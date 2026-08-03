"use client";

import {
  ArrowLeft,
  Bell,
  CheckCircle2,
  ChevronDown,
  CircleUserRound,
  Clock3,
  Copy,
  Download,
  FileText,
  Globe2,
  Loader2,
  Mail,
  MessageSquareText,
  RefreshCw,
  Save,
  MapPin,
  ShieldAlert,
  Tag,
  UserRound,
} from "lucide-react";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  type User,
} from "firebase/auth";
import {
  doc,
  getDoc,
  Timestamp,
  type DocumentData,
} from "firebase/firestore";
import { httpsCallable } from "firebase/functions";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";

import { db, functions } from "@/lib/firebase";

const ROUTES = {
  dashboard: "/",
  login: "/login",
  notifications: "/notifications",
  adminProfile: "/admin-profile",
  websiteOperations: "/website-operations",
};

const ALLOWED_COLLECTIONS = new Set([
  "websiteContactSubmissions",
  "websitePartnerRequests",
  "websiteBusinessRequests",
  "websiteDriverInterest",
  "websiteMarketInterest",
  "websiteLaunchList",
  "websiteSafetyConcerns",
  "websiteSupportRequests",
]);

const COLLECTION_LABELS: Record<string, string> = {
  websiteContactSubmissions: "Contact Request",
  websitePartnerRequests: "Partner Request",
  websiteBusinessRequests: "Business Lead",
  websiteDriverInterest: "Driver Interest",
  websiteMarketInterest: "Market Interest",
  websiteLaunchList: "Launch List Subscriber",
  websiteSafetyConcerns: "Safety Concern",
  websiteSupportRequests: "Support Request",
};

const STATUS_OPTIONS = [
  { value: "new", label: "New" },
  { value: "in_review", label: "In review" },
  { value: "waiting", label: "Waiting" },
  { value: "resolved", label: "Resolved" },
  { value: "closed", label: "Closed" },
  { value: "archived", label: "Archived" },
  { value: "spam", label: "Spam" },
];

const PRIORITY_OPTIONS = [
  { value: "normal", label: "Normal" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" },
];

type AdminProfile = {
  uid: string;
  email: string;
  displayName: string;
  role: string;
};

type CaseRecord = {
  id: string;
  collectionName: string;
  data: DocumentData;
};

type StaffOption = {
  uid: string;
  displayName: string;
  email: string;
  role: string;
};

type CaseNote = {
  id: string;
  note: string;
  authorUid: string;
  authorName: string;
  authorEmail: string;
  createdAt: string | null;
};

type AuditEvent = {
  id: string;
  action: string;
  actorUid: string;
  actorName: string;
  actorEmail: string;
  changes: unknown;
  noteId: string;
  createdAt: string | null;
};

function goTo(href: string) {
  if (typeof window !== "undefined") {
    window.location.href = href;
  }
}

function normalizeRouteParam(value: string | string[] | undefined) {
  if (Array.isArray(value)) return value[0] ?? "";
  return value ?? "";
}

function toDate(value: unknown): Date | null {
  if (!value) return null;
  if (value instanceof Date) return value;
  if (value instanceof Timestamp) return value.toDate();

  if (
    typeof value === "object" &&
    value !== null &&
    "toDate" in value &&
    typeof (value as { toDate?: unknown }).toDate === "function"
  ) {
    return (value as { toDate: () => Date }).toDate();
  }

  const parsed = new Date(String(value));
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function formatDateTime(value: Date | string | null) {
  if (!value) return "Not available";

  const date = value instanceof Date ? value : new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Not available";
  }

  return date.toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function valueFrom(data: DocumentData, keys: string[]) {
  for (const key of keys) {
    const value = data[key];

    if (typeof value === "string" && value.trim()) {
      return value.trim();
    }
  }

  return "";
}

function normalizedStatus(data: DocumentData) {
  const value = valueFrom(data, [
    "reviewStatus",
    "status",
    "subscriptionStatus",
  ]).toLowerCase();

  if (!value || value === "unreviewed") return "new";
  if (value === "reviewing") return "in_review";
  return value;
}

function normalizedPriority(data: DocumentData) {
  const value = valueFrom(data, ["priority"]).toLowerCase();

  if (["normal", "medium", "high"].includes(value)) {
    return value;
  }

  const urgency = valueFrom(data, ["urgency"]).toLowerCase();

  if (urgency === "follow-up to an emergency") return "high";
  if (urgency === "needs prompt review") return "medium";
  return "normal";
}

function humanize(value: string) {
  return value
    .replaceAll("_", " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function formatStoredValue(value: unknown): string {
  if (value === null || typeof value === "undefined") {
    return "Not provided";
  }

  if (value instanceof Timestamp) {
    return formatDateTime(value.toDate());
  }

  if (
    typeof value === "object" &&
    value !== null &&
    "toDate" in value &&
    typeof (value as { toDate?: unknown }).toDate === "function"
  ) {
    return formatDateTime(
      (value as { toDate: () => Date }).toDate(),
    );
  }

  if (Array.isArray(value)) {
    return value.map((item) => String(item)).join(", ");
  }

  if (typeof value === "object") {
    try {
      return JSON.stringify(value, null, 2);
    } catch {
      return "[Stored object]";
    }
  }

  return String(value);
}

async function loadAdminProfile(user: User): Promise<AdminProfile> {
  const adminSnapshot = await getDoc(doc(db, "admins", user.uid));

  if (!adminSnapshot.exists()) {
    throw new Error("NOT_ADMIN");
  }

  const data = adminSnapshot.data();
  const active =
    data.active !== false && data.status !== "suspended";

  if (!active) {
    throw new Error("ADMIN_INACTIVE");
  }

  return {
    uid: user.uid,
    email: String(data.email || user.email || ""),
    displayName: String(
      data.displayName ||
        data.name ||
        user.displayName ||
        "AkiGO Staff",
    ),
    role: String(data.roleId || data.role || "staff"),
  };
}

function callableErrorMessage(error: unknown) {
  if (error instanceof Error && error.message) {
    return error.message.replace(/^Firebase:\s*/i, "");
  }

  return "The operation could not be completed.";
}

export default function WebsiteSubmissionWorkspacePage() {
  const params = useParams();

  const [adminProfile, setAdminProfile] =
    useState<AdminProfile | null>(null);
  const [record, setRecord] = useState<CaseRecord | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [addingNote, setAddingNote] = useState(false);
  const [error, setError] = useState("");
  const [actionMessage, setActionMessage] = useState("");
  const [showRaw, setShowRaw] = useState(false);
  const [status, setStatus] = useState("new");
  const [priority, setPriority] = useState("normal");
  const [assignedToUid, setAssignedToUid] = useState("");
  const [staff, setStaff] = useState<StaffOption[]>([]);
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState<CaseNote[]>([]);
  const [audit, setAudit] = useState<AuditEvent[]>([]);

  const collectionName = normalizeRouteParam(
    params?.collectionName as string | string[] | undefined,
  );
  const id = normalizeRouteParam(
    params?.id as string | string[] | undefined,
  );

  const loadRecord = useCallback(async () => {
    if (
      !collectionName ||
      !id ||
      !ALLOWED_COLLECTIONS.has(collectionName)
    ) {
      setError("This website submission route is not valid.");
      return;
    }

    const snapshot = await getDoc(
      doc(db, collectionName, id),
    );

    if (!snapshot.exists()) {
      setError(
        "The requested website submission was not found.",
      );
      return;
    }

    const recordData = snapshot.data();

    setRecord({
      id: snapshot.id,
      collectionName,
      data: recordData,
    });
    setStatus(normalizedStatus(recordData));
    setPriority(normalizedPriority(recordData));
    setAssignedToUid(
      valueFrom(recordData, ["assignedToUid"]),
    );
  }, [collectionName, id]);

  const loadActivity = useCallback(async () => {
    const getActivity = httpsCallable<
      { collectionName: string; documentId: string },
      {
        success: true;
        notes: CaseNote[];
        audit: AuditEvent[];
      }
    >(functions, "getWebsiteCaseActivity");

    const result = await getActivity({
      collectionName,
      documentId: id,
    });

    setNotes(result.data.notes ?? []);
    setAudit(result.data.audit ?? []);
  }, [collectionName, id]);

  const loadStaff = useCallback(async () => {
    const listStaff = httpsCallable<
      Record<string, never>,
      { success: true; staff: StaffOption[] }
    >(functions, "listWebsiteAssignableStaff");

    const result = await listStaff({});
    setStaff(result.data.staff ?? []);
  }, []);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(
      auth,
      async (user) => {
        if (!user) {
          goTo(ROUTES.login);
          return;
        }

        try {
          setLoading(true);
          const profile = await loadAdminProfile(user);
          setAdminProfile(profile);

          await Promise.all([
            loadRecord(),
            loadActivity(),
            loadStaff(),
          ]);
        } catch (loadError) {
          console.error(
            "Website submission workspace failed:",
            loadError,
          );

          if (
            loadError instanceof Error &&
            loadError.message === "NOT_ADMIN"
          ) {
            await signOut(auth);
            goTo(ROUTES.login);
            return;
          }

          setError(
            loadError instanceof Error &&
              loadError.message === "ADMIN_INACTIVE"
              ? "This Admin account is not active."
              : callableErrorMessage(loadError),
          );
        } finally {
          setLoading(false);
        }
      },
    );

    return unsubscribe;
  }, [loadActivity, loadRecord, loadStaff]);

  const data = record?.data ?? {};

  const caseSummary = useMemo(() => {
    const name =
      valueFrom(data, [
        "name",
        "fullName",
        "contactName",
        "displayName",
      ]) ||
      valueFrom(data, ["organization", "businessName"]) ||
      valueFrom(data, ["email"]) ||
      "Unnamed submission";

    const summary =
      valueFrom(data, [
        "message",
        "details",
        "description",
        "needs",
        "notes",
        "primaryNeed",
        "serviceInterest",
        "concernType",
        "inquiryType",
      ]) || "No summary was provided.";

    const email = valueFrom(data, ["email"]);
    const phone = valueFrom(data, ["phone"]);
    const organization = valueFrom(data, [
      "organization",
      "businessName",
    ]);
    const city = valueFrom(data, ["city"]);
    const state = valueFrom(data, ["state", "region"]);
    const reference =
      valueFrom(data, ["referenceId"]) ||
      record?.id.slice(0, 12).toUpperCase() ||
      "Not available";

    const createdAt = toDate(
      data.createdAt ||
        data.confirmedAt ||
        data.lastRequestedAt ||
        data.updatedAt,
    );

    return {
      name,
      summary,
      email,
      phone,
      organization,
      city,
      state,
      reference,
      createdAt,
      source: valueFrom(data, ["source"]) || "Not recorded",
      assignedTo:
        valueFrom(data, [
          "assignedToName",
          "assignedTo",
        ]) || "Unassigned",
    };
  }, [data, record?.id]);

  const storedFields = useMemo(
    () =>
      Object.entries(data)
        .filter(
          ([key]) =>
            ![
              "ipHash",
              "confirmationTokenHash",
            ].includes(key),
        )
        .sort(([left], [right]) =>
          left.localeCompare(right),
        ),
    [data],
  );

  async function refreshWorkspace() {
    try {
      setRefreshing(true);
      setError("");

      await Promise.all([
        loadRecord(),
        loadActivity(),
        loadStaff(),
      ]);

      setActionMessage("Workspace refreshed.");
    } catch (refreshError) {
      setError(callableErrorMessage(refreshError));
    } finally {
      setRefreshing(false);
    }
  }

  async function saveCaseChanges() {
    try {
      setSaving(true);
      setError("");
      setActionMessage("");

      const updateCase = httpsCallable<
        {
          collectionName: string;
          documentId: string;
          status: string;
          priority: string;
          assignedToUid: string;
        },
        { success: true }
      >(functions, "updateWebsiteCase");

      await updateCase({
        collectionName,
        documentId: id,
        status,
        priority,
        assignedToUid,
      });

      await Promise.all([loadRecord(), loadActivity()]);
      setActionMessage(
        "Case workflow updated successfully.",
      );
    } catch (saveError) {
      setError(callableErrorMessage(saveError));
    } finally {
      setSaving(false);
    }
  }

  async function submitInternalNote() {
    try {
      if (note.trim().length < 2) {
        setError("Enter an internal note before saving.");
        return;
      }

      setAddingNote(true);
      setError("");
      setActionMessage("");

      const addNote = httpsCallable<
        {
          collectionName: string;
          documentId: string;
          note: string;
        },
        { success: true; noteId: string }
      >(functions, "addWebsiteCaseNote");

      await addNote({
        collectionName,
        documentId: id,
        note: note.trim(),
      });

      setNote("");
      await Promise.all([loadRecord(), loadActivity()]);
      setActionMessage("Internal note added.");
    } catch (noteError) {
      setError(callableErrorMessage(noteError));
    } finally {
      setAddingNote(false);
    }
  }

  async function copyText(
    value: string,
    successMessage: string,
  ) {
    if (!value) {
      setActionMessage("No value is available to copy.");
      return;
    }

    try {
      await navigator.clipboard.writeText(value);
      setActionMessage(successMessage);
    } catch {
      setActionMessage(
        "Copy failed. Select the value manually.",
      );
    }
  }

  function exportRecord() {
    if (!record) return;

    const payload = {
      id: record.id,
      collectionName: record.collectionName,
      exportedAt: new Date().toISOString(),
      data: record.data,
      internalNotes: notes,
      auditHistory: audit,
    };

    const blob = new Blob(
      [JSON.stringify(payload, null, 2)],
      {
        type: "application/json;charset=utf-8",
      },
    );
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = `${caseSummary.reference}.json`;
    link.click();
    URL.revokeObjectURL(url);

    setActionMessage("Submission exported.");
  }

  async function logout() {
    await signOut(getAuth());
    goTo(ROUTES.login);
  }

  if (loading) {
    return (
      <main className="grid min-h-screen place-items-center bg-[#050505] text-white">
        <div className="flex items-center gap-3 text-gray-400">
          <Loader2
            size={22}
            className="animate-spin text-lime-400"
          />
          Loading submission workspace
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <TopNav
        profile={adminProfile}
        onLogout={logout}
      />

      <div className="mx-auto max-w-[1600px] px-5 py-7 sm:px-8 sm:py-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => goTo(ROUTES.websiteOperations)}
            className="inline-flex items-center gap-2 text-sm font-black text-gray-400 transition hover:text-lime-400"
          >
            <ArrowLeft size={17} />
            Back to Website Inbox
          </button>

          <button
            type="button"
            onClick={() => void refreshWorkspace()}
            disabled={refreshing}
            className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/10 bg-zinc-950 px-4 text-sm font-black text-gray-300 transition hover:border-lime-400/45 hover:text-lime-400 disabled:opacity-50"
          >
            <RefreshCw
              size={16}
              className={refreshing ? "animate-spin" : ""}
            />
            Refresh
          </button>
        </div>

        {error ? (
          <section className="mt-7 rounded-3xl border border-red-500/30 bg-red-500/10 p-8">
            <div className="flex items-start gap-4">
              <ShieldAlert
                size={27}
                className="mt-0.5 shrink-0 text-red-300"
              />

              <div>
                <h1 className="text-2xl font-black">
                  Submission unavailable
                </h1>
                <p className="mt-3 leading-7 text-red-100/70">
                  {error}
                </p>

                <button
                  type="button"
                  onClick={() =>
                    goTo(ROUTES.websiteOperations)
                  }
                  className="mt-6 rounded-xl bg-lime-400 px-5 py-3 font-black text-black"
                >
                  Return to Website Admin
                </button>
              </div>
            </div>
          </section>
        ) : record ? (
          <>
            <section className="mt-7 rounded-3xl border border-white/10 bg-zinc-950 p-6 sm:p-8">
              <div className="flex flex-col justify-between gap-6 xl:flex-row xl:items-start">
                <div className="flex items-start gap-4">
                  <div className="grid size-14 shrink-0 place-items-center rounded-2xl bg-lime-400/10 text-lime-400">
                    <FileText size={26} />
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.17em] text-lime-400">
                      {COLLECTION_LABELS[
                        record.collectionName
                      ] || "Website Submission"}
                    </p>

                    <h1 className="mt-2 text-3xl font-black sm:text-4xl">
                      {caseSummary.name}
                    </h1>

                    <p className="mt-3 max-w-3xl leading-7 text-gray-400">
                      {caseSummary.summary}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <StatusBadge
                    status={humanize(status)}
                  />
                  <PriorityBadge
                    priority={humanize(priority)}
                  />
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-3 border-t border-white/10 pt-6">
                <ActionButton
                  icon={Copy}
                  label="Copy Reference"
                  onClick={() =>
                    void copyText(
                      caseSummary.reference,
                      "Reference copied.",
                    )
                  }
                />

                <ActionButton
                  icon={Mail}
                  label="Copy Email"
                  disabled={!caseSummary.email}
                  onClick={() =>
                    void copyText(
                      caseSummary.email,
                      "Email copied.",
                    )
                  }
                />

                <ActionButton
                  icon={Download}
                  label="Export JSON"
                  onClick={exportRecord}
                />

                <ActionButton
                  icon={Bell}
                  label="Notifications"
                  onClick={() =>
                    goTo(ROUTES.notifications)
                  }
                />
              </div>

              {actionMessage ? (
                <p
                  className="mt-4 rounded-xl border border-lime-400/20 bg-lime-400/[0.05] px-4 py-3 text-sm font-bold text-lime-300"
                  role="status"
                  aria-live="polite"
                >
                  {actionMessage}
                </p>
              ) : null}
            </section>

            <div className="mt-6 grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
              <div className="space-y-6">
                <Panel
                  title="Requester Information"
                  icon={CircleUserRound}
                >
                  <DetailsGrid
                    rows={[
                      ["Name", caseSummary.name],
                      ["Email", caseSummary.email],
                      ["Phone", caseSummary.phone],
                      [
                        "Organization",
                        caseSummary.organization,
                      ],
                      [
                        "Market",
                        [
                          caseSummary.city,
                          caseSummary.state,
                        ]
                          .filter(Boolean)
                          .join(", "),
                      ],
                      [
                        "Submitted",
                        formatDateTime(
                          caseSummary.createdAt,
                        ),
                      ],
                    ]}
                  />
                </Panel>

                <Panel
                  title="Submission Details"
                  icon={FileText}
                >
                  <p className="whitespace-pre-wrap text-sm leading-7 text-gray-300">
                    {caseSummary.summary}
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      setShowRaw((current) => !current)
                    }
                    className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/10 bg-black px-4 text-sm font-black text-gray-300 transition hover:border-lime-400/45 hover:text-lime-400"
                    aria-expanded={showRaw}
                  >
                    {showRaw
                      ? "Hide Stored Fields"
                      : "View Stored Fields"}

                    <ChevronDown
                      size={16}
                      className={`transition ${
                        showRaw ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {showRaw ? (
                    <div className="mt-4 max-h-[520px] space-y-4 overflow-y-auto rounded-2xl border border-white/10 bg-black p-5">
                      {storedFields.map(([key, value]) => (
                        <div
                          key={key}
                          className="border-b border-white/[0.07] pb-4 last:border-b-0 last:pb-0"
                        >
                          <p className="text-xs font-black uppercase tracking-wider text-gray-600">
                            {key}
                          </p>

                          <pre className="mt-2 whitespace-pre-wrap break-words font-sans text-sm leading-6 text-gray-300">
                            {formatStoredValue(value)}
                          </pre>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </Panel>

                <Panel
                  title="Internal Notes"
                  icon={MessageSquareText}
                >
                  <textarea
                    value={note}
                    onChange={(event) =>
                      setNote(event.target.value)
                    }
                    rows={5}
                    maxLength={4000}
                    placeholder="Add a private note for AkiGO staff..."
                    className="w-full resize-y rounded-2xl border border-white/10 bg-black px-4 py-4 text-sm leading-6 text-white outline-none transition placeholder:text-gray-700 focus:border-lime-400/55"
                  />

                  <button
                    type="button"
                    onClick={() => void submitInternalNote()}
                    disabled={
                      addingNote || note.trim().length < 2
                    }
                    className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-xl bg-lime-400 px-5 text-sm font-black text-black transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {addingNote ? (
                      <Loader2
                        size={16}
                        className="animate-spin"
                      />
                    ) : (
                      <Save size={16} />
                    )}
                    Add Internal Note
                  </button>

                  <div className="mt-5 space-y-3">
                    {notes.length === 0 ? (
                      <p className="rounded-2xl border border-dashed border-white/10 bg-black/30 p-4 text-sm text-gray-600">
                        No internal notes have been added.
                      </p>
                    ) : (
                      notes.map((item) => (
                        <div
                          key={item.id}
                          className="rounded-2xl border border-white/10 bg-black p-4"
                        >
                          <p className="whitespace-pre-wrap text-sm leading-6 text-gray-300">
                            {item.note}
                          </p>
                          <p className="mt-3 text-xs font-bold text-gray-600">
                            {item.authorName ||
                              item.authorEmail ||
                              "AkiGO Staff"}{" "}
                            · {formatDateTime(item.createdAt)}
                          </p>
                        </div>
                      ))
                    )}
                  </div>
                </Panel>
              </div>

              <div className="space-y-6">
                <Panel
                  title="Case Management"
                  icon={UserRound}
                >

                  <div className="grid gap-4">
                    <FieldSelect
                      label="Status"
                      value={status}
                      onChange={setStatus}
                      options={STATUS_OPTIONS}
                    />

                    <FieldSelect
                      label="Priority"
                      value={priority}
                      onChange={setPriority}
                      options={PRIORITY_OPTIONS}
                    />

                    <FieldSelect
                      label="Assigned staff"
                      value={assignedToUid}
                      onChange={setAssignedToUid}
                      options={[
                        {
                          value: "",
                          label: "Unassigned",
                        },
                        ...staff.map((item) => ({
                          value: item.uid,
                          label: `${item.displayName}${
                            item.role
                              ? ` — ${humanize(item.role)}`
                              : ""
                          }`,
                        })),
                      ]}
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => void saveCaseChanges()}
                    disabled={saving}
                    className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-lime-400 px-5 font-black text-black transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {saving ? (
                      <Loader2
                        size={17}
                        className="animate-spin"
                      />
                    ) : (
                      <Save size={17} />
                    )}
                    Save Case Changes
                  </button>

                  <div className="mt-5 rounded-2xl border border-white/10 bg-black p-4">
                    <DetailsGrid
                      rows={[
                        [
                          "Current assignee",
                          caseSummary.assignedTo,
                        ],
                        ["Source", caseSummary.source],
                        [
                          "Collection",
                          record.collectionName,
                        ],
                        ["Document ID", record.id],
                      ]}
                      compact
                    />
                  </div>
                </Panel>

                <Panel
                  title="Consent and Source"
                  icon={CheckCircle2}
                >
                  <DetailsGrid
                    rows={[
                      [
                        "Privacy consent",
                        data.privacyConsent === true
                          ? "Recorded"
                          : "Not recorded",
                      ],
                      [
                        "Marketing consent",
                        data.marketingConsent === true
                          ? "Opted in"
                          : data.marketingConsent === false
                            ? "Not opted in"
                            : "Not applicable",
                      ],
                      [
                        "Consent version",
                        valueFrom(data, [
                          "consentTextVersion",
                          "consentVersion",
                        ]) || "Not recorded",
                      ],
                      [
                        "Source",
                        caseSummary.source,
                      ],
                    ]}
                  />
                </Panel>

                <Panel
                  title="Activity Timeline"
                  icon={Clock3}
                >

                  <div className="space-y-4">
                    {audit.map((event) => (
                      <TimelineItem
                        key={event.id}
                        title={humanize(event.action)}
                        subtitle={`${
                          event.actorName ||
                          event.actorEmail ||
                          "AkiGO Staff"
                        } · ${formatDateTime(event.createdAt)}`}
                        detail={
                          event.changes
                            ? formatStoredValue(event.changes)
                            : ""
                        }
                      />
                    ))}

                    <TimelineItem
                      title="Submission received"
                      subtitle={formatDateTime(
                        caseSummary.createdAt,
                      )}
                      detail={`Created in ${record.collectionName}.`}
                    />
                  </div>
                </Panel>

                <Panel title="Labels" icon={Tag}>
                  <p className="text-sm leading-6 text-gray-500">
                    Label management remains scheduled for a later
                    Phase 2 step.
                  </p>
                </Panel>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </main>
  );
}

function TopNav({
  profile,
  onLogout,
}: {
  profile: AdminProfile | null;
  onLogout: () => void;
}) {
  const name =
    profile?.displayName ||
    profile?.email.split("@")[0] ||
    "AkiGO Staff";

  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <nav className="sticky top-0 z-50 flex h-[74px] items-center justify-between border-b border-white/10 bg-[#070707]/95 px-5 backdrop-blur sm:px-8">
      <button
        type="button"
        onClick={() => goTo(ROUTES.dashboard)}
        className="text-3xl font-black italic sm:text-4xl"
      >
        Aki<span className="text-lime-400">GO</span>
      </button>

      <div className="hidden h-full items-center gap-9 lg:flex">
        <TopNavLink
          icon={Globe2}
          label="Website"
          href={ROUTES.websiteOperations}
          active
        />

        <TopNavLink
          icon={FileText}
          label="Submission"
          href="#"
        />

        <TopNavLink
          icon={Bell}
          label="Notifications"
          href={ROUTES.notifications}
        />
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => goTo(ROUTES.adminProfile)}
          className="flex items-center gap-3 rounded-full border border-white/10 px-3 py-2 transition hover:border-lime-400 sm:px-4"
        >
          <div className="grid size-10 place-items-center rounded-full border border-lime-400 font-black text-lime-400">
            {initials || "AK"}
          </div>

          <div className="hidden text-left md:block">
            <p className="max-w-40 truncate font-black">
              {name}
            </p>

            <p className="text-xs capitalize text-gray-500">
              {profile?.role.replaceAll("_", " ") ||
                "Staff"}
            </p>
          </div>

          <ChevronDown size={17} />
        </button>

        <button
          type="button"
          onClick={onLogout}
          className="hidden rounded-xl border border-white/10 px-4 py-3 text-sm font-black text-white/70 transition hover:border-red-500 hover:text-red-400 xl:block"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

function TopNavLink({
  icon: Icon,
  label,
  href,
  active,
}: {
  icon: typeof FileText;
  label: string;
  href: string;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={() => {
        if (href !== "#") {
          goTo(href);
        }
      }}
      className={`flex h-full items-center gap-2 border-b-2 font-bold transition ${
        active
          ? "border-lime-400 text-lime-400"
          : href === "#"
            ? "cursor-default border-transparent text-gray-500"
            : "border-transparent text-gray-200 hover:text-lime-400"
      }`}
    >
      <Icon size={20} />
      {label}
    </button>
  );
}

function Panel({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: typeof FileText;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-white/10 bg-zinc-950 p-6">
      <div className="flex items-center gap-3">
        <div className="grid size-10 place-items-center rounded-xl bg-lime-400/10 text-lime-400">
          <Icon size={19} />
        </div>

        <h2 className="text-xl font-black">{title}</h2>
      </div>

      <div className="mt-6">{children}</div>
    </section>
  );
}

function DetailsGrid({
  rows,
  compact = false,
}: {
  rows: [string, string][];
  compact?: boolean;
}) {
  return (
    <div
      className={
        compact ? "space-y-3" : "grid gap-4 sm:grid-cols-2"
      }
    >
      {rows.map(([label, value]) => (
        <div
          key={label}
          className={
            compact
              ? "flex items-start justify-between gap-4"
              : "rounded-2xl border border-white/10 bg-black p-4"
          }
        >
          <p className="text-xs font-black uppercase tracking-wider text-gray-600">
            {label}
          </p>

          <p
            className={`${
              compact ? "max-w-[60%] text-right" : "mt-2"
            } break-words text-sm font-bold leading-6 text-gray-300`}
          >
            {value || "Not provided"}
          </p>
        </div>
      ))}
    </div>
  );
}

function FieldSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: Array<{ value: string; label: string }>;
}) {
  return (
    <label className="block">
      <span className="text-xs font-black uppercase tracking-wider text-gray-600">
        {label}
      </span>

      <span className="relative mt-2 block">
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="min-h-12 w-full appearance-none rounded-xl border border-white/10 bg-black px-4 pr-11 text-sm font-bold text-white outline-none transition focus:border-lime-400/55"
        >
          {options.map((option) => (
            <option
              key={option.value || "empty"}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown
          size={16}
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
        />
      </span>
    </label>
  );
}

function TimelineItem({
  title,
  subtitle,
  detail,
}: {
  title: string;
  subtitle: string;
  detail?: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="grid size-10 shrink-0 place-items-center rounded-full bg-lime-400/10 text-lime-400">
        <Clock3 size={17} />
      </div>

      <div className="min-w-0">
        <p className="font-black">{title}</p>
        <p className="mt-1 text-xs text-gray-600">
          {subtitle}
        </p>

        {detail ? (
          <pre className="mt-2 whitespace-pre-wrap break-words font-sans text-xs leading-5 text-gray-500">
            {detail}
          </pre>
        ) : null}
      </div>
    </div>
  );
}

function ActionButton({
  icon: Icon,
  label,
  onClick,
  disabled,
}: {
  icon: typeof FileText;
  label: string;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/10 bg-black px-4 text-sm font-black text-gray-300 transition hover:border-lime-400/45 hover:text-lime-400 disabled:cursor-not-allowed disabled:opacity-35"
    >
      <Icon size={16} />
      {label}
    </button>
  );
}

function StatusBadge({ status }: { status: string }) {
  return (
    <span className="inline-flex rounded-full bg-lime-400/10 px-4 py-2 text-xs font-black text-lime-300">
      {status}
    </span>
  );
}

function PriorityBadge({
  priority,
}: {
  priority: string;
}) {
  const className =
    priority === "High"
      ? "bg-red-400/10 text-red-300"
      : priority === "Medium"
        ? "bg-yellow-400/10 text-yellow-300"
        : "bg-white/[0.06] text-gray-400";

  return (
    <span
      className={`inline-flex rounded-full px-4 py-2 text-xs font-black ${className}`}
    >
      {priority} Priority
    </span>
  );
}
