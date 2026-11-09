import {
  applicationDefault,
  cert,
  getApps,
  initializeApp,
  type App,
} from "firebase-admin/app";
import {
  getFirestore,
  type Firestore,
} from "firebase-admin/firestore";

const EXPECTED_PROJECT_ID = "akigo-9ad3b";

function getRequiredEnvironmentVariable(name: string): string {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(
      `Missing required Firebase Admin environment variable: ${name}`,
    );
  }

  return value;
}

function getPrivateKey(): string {
  return getRequiredEnvironmentVariable(
    "FIREBASE_ADMIN_PRIVATE_KEY",
  ).replace(/\\n/g, "\n");
}

function getAdminApp(): App {
  const existingApp = getApps()[0];

  if (existingApp) {
    return existingApp;
  }

  const projectId = getRequiredEnvironmentVariable(
    "FIREBASE_ADMIN_PROJECT_ID",
  );
  if (projectId !== EXPECTED_PROJECT_ID) {
    throw new Error(
      `Firebase Admin project mismatch. Expected "${EXPECTED_PROJECT_ID}" but received "${projectId}".`,
    );
  }

  const clientEmail = process.env.FIREBASE_ADMIN_CLIENT_EMAIL?.trim() || "";
  const privateKey = process.env.FIREBASE_ADMIN_PRIVATE_KEY?.trim() || "";
  const isPlaceholder = (value: string) =>
    !value || /PLACEHOLDER|FULL_REAL_KEY_CONTENT_HERE|YOUR_|REAL_/i.test(value);
  const credential = isPlaceholder(clientEmail) || isPlaceholder(privateKey)
    ? applicationDefault()
    : cert({ projectId, clientEmail, privateKey: getPrivateKey() });

  return initializeApp({
    projectId,
    credential,
  });
}

export function getAdminDb(): Firestore {
  const app = getAdminApp();
  const db = getFirestore(app);

  if (process.env.NODE_ENV !== "production") {
    console.info(
      `[Firebase Admin] Connected to project: ${app.options.projectId}`,
    );
  }

  return db;
}
