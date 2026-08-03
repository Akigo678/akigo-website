"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Check,
  ChevronRight,
  Globe2,
  Loader2,
  LocateFixed,
  MapPin,
  Search,
  X,
} from "lucide-react";
import { useEffect, useId, useMemo, useRef, useState } from "react";

type SupportedLanguage = {
  code: "en" | "es";
  label: string;
  nativeLabel: string;
};

type StateRecord = {
  name: string;
  code: string;
  cityCount: number;
};

type LocationResult = {
  city: string;
  state: string;
  stateCode: string;
  country: "US";
  latitude?: number;
  longitude?: number;
};

type LocationView = "states" | "cities" | "search";

const languages: SupportedLanguage[] = [
  { code: "en", label: "English", nativeLabel: "English" },
  { code: "es", label: "Spanish", nativeLabel: "Español" },
];

const LANGUAGE_KEY = "akigo-language";
const LOCATION_KEY = "akigo-selected-location";

const defaultLocation: LocationResult = {
  city: "Select city",
  state: "",
  stateCode: "",
  country: "US",
};

function readStoredLanguage(): SupportedLanguage {
  if (typeof window === "undefined") return languages[0];

  const storedCode = window.localStorage.getItem(LANGUAGE_KEY);
  return languages.find((language) => language.code === storedCode) ?? languages[0];
}

function readStoredLocation(): LocationResult {
  if (typeof window === "undefined") return defaultLocation;

  try {
    const raw = window.localStorage.getItem(LOCATION_KEY);
    if (!raw) return defaultLocation;

    const parsed = JSON.parse(raw) as Partial<LocationResult>;

    if (
      typeof parsed.city !== "string" ||
      typeof parsed.state !== "string" ||
      typeof parsed.stateCode !== "string"
    ) {
      return defaultLocation;
    }

    return {
      city: parsed.city,
      state: parsed.state,
      stateCode: parsed.stateCode,
      country: "US",
      latitude:
        typeof parsed.latitude === "number" ? parsed.latitude : undefined,
      longitude:
        typeof parsed.longitude === "number" ? parsed.longitude : undefined,
    };
  } catch {
    return defaultLocation;
  }
}

export function FooterLocaleControls() {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [language, setLanguage] = useState<SupportedLanguage>(languages[0]);
  const [location, setLocation] = useState<LocationResult>(defaultLocation);

  useEffect(() => {
    setLanguage(readStoredLanguage());
    setLocation(readStoredLocation());
  }, []);

  const locationLabel =
    location.stateCode && location.city !== "Select city"
      ? `${location.city}, ${location.stateCode}`
      : "Select city";

  return (
    <>
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => setLanguageOpen(true)}
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/[0.10] bg-white/[0.025] px-4 text-sm font-semibold text-white/70 transition hover:border-[#96ed08]/40 hover:bg-white/[0.05] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96ed08]"
          aria-haspopup="dialog"
        >
          <Globe2 size={17} />
          {language.nativeLabel}
        </button>

        <button
          type="button"
          onClick={() => setLocationOpen(true)}
          className="inline-flex min-h-11 max-w-full items-center gap-2 rounded-full border border-white/[0.10] bg-white/[0.025] px-4 text-sm font-semibold text-white/70 transition hover:border-[#96ed08]/40 hover:bg-white/[0.05] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96ed08]"
          aria-haspopup="dialog"
        >
          <MapPin size={17} />
          <span className="max-w-[230px] truncate">{locationLabel}</span>
        </button>
      </div>

      {languageOpen ? (
        <LanguageDialog
          selectedLanguage={language}
          onClose={() => setLanguageOpen(false)}
          onSelect={(nextLanguage) => {
            setLanguage(nextLanguage);
            window.localStorage.setItem(LANGUAGE_KEY, nextLanguage.code);
            document.documentElement.lang = nextLanguage.code;
            setLanguageOpen(false);
          }}
        />
      ) : null}

      {locationOpen ? (
        <LocationDialog
          selectedLocation={location}
          onClose={() => setLocationOpen(false)}
          onSelect={(nextLocation) => {
            setLocation(nextLocation);
            window.localStorage.setItem(
              LOCATION_KEY,
              JSON.stringify(nextLocation),
            );
            setLocationOpen(false);
          }}
        />
      ) : null}
    </>
  );
}

function DialogShell({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  const titleId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeButtonRef.current?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/75 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      role="presentation"
      onMouseDown={(event) => {
        if (event.currentTarget === event.target) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="max-h-[92dvh] w-full overflow-hidden rounded-t-[1.75rem] border border-white/[0.12] bg-[#0b0b0b] shadow-2xl sm:max-w-2xl sm:rounded-[1.75rem]"
      >
        <div className="flex items-center justify-between border-b border-white/[0.08] px-6 py-5 sm:px-7">
          <h2 id={titleId} className="font-display text-2xl font-bold text-white">
            {title}
          </h2>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="grid size-11 place-items-center rounded-full border border-white/[0.10] bg-white/[0.03] text-white transition hover:border-[#96ed08]/40 hover:text-[#96ed08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96ed08]"
          >
            <X size={20} />
          </button>
        </div>

        {children}
      </section>
    </div>
  );
}

function LanguageDialog({
  selectedLanguage,
  onClose,
  onSelect,
}: {
  selectedLanguage: SupportedLanguage;
  onClose: () => void;
  onSelect: (language: SupportedLanguage) => void;
}) {
  return (
    <DialogShell title="Select your preferred language" onClose={onClose}>
      <div className="grid gap-3 p-6 sm:grid-cols-2 sm:p-7">
        {languages.map((language) => {
          const selected = language.code === selectedLanguage.code;

          return (
            <button
              key={language.code}
              type="button"
              onClick={() => onSelect(language)}
              className="flex min-h-16 items-center justify-between rounded-2xl border border-white/[0.10] bg-white/[0.025] px-5 text-left transition hover:border-[#96ed08]/40 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96ed08]"
            >
              <span>
                <span className="block font-bold text-white">
                  {language.nativeLabel}
                </span>
                <span className="mt-1 block text-sm text-white/45">
                  {language.label}
                </span>
              </span>

              {selected ? <Check size={19} className="text-[#96ed08]" /> : null}
            </button>
          );
        })}
      </div>
    </DialogShell>
  );
}

function LocationDialog({
  selectedLocation,
  onClose,
  onSelect,
}: {
  selectedLocation: LocationResult;
  onClose: () => void;
  onSelect: (location: LocationResult) => void;
}) {
  const [view, setView] = useState<LocationView>("states");
  const [states, setStates] = useState<StateRecord[]>([]);
  const [selectedState, setSelectedState] = useState<StateRecord | null>(null);
  const [cities, setCities] = useState<LocationResult[]>([]);
  const [query, setQuery] = useState("");
  const [stateLoading, setStateLoading] = useState(true);
  const [cityLoading, setCityLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const [error, setError] = useState("");
  const [locating, setLocating] = useState(false);

  const selectedLabel = useMemo(() => {
    if (!selectedLocation.stateCode || selectedLocation.city === "Select city") {
      return "No city selected";
    }

    return `${selectedLocation.city}, ${selectedLocation.stateCode}`;
  }, [selectedLocation]);

  useEffect(() => {
    let active = true;

    async function loadStates() {
      setStateLoading(true);
      setError("");

      try {
        const response = await fetch("/api/locations/states");

        if (!response.ok) throw new Error("Unable to load states");

        const payload = (await response.json()) as {
          states?: StateRecord[];
        };

        if (active) {
          setStates(Array.isArray(payload.states) ? payload.states : []);
        }
      } catch {
        if (active) setError("Unable to load United States locations.");
      } finally {
        if (active) setStateLoading(false);
      }
    }

    void loadStates();

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    const normalizedQuery = query.trim();

    if (normalizedQuery.length < 2) {
      if (view === "search") setView("states");
      return;
    }

    if (view === "cities") return;

    const controller = new AbortController();
    const timer = window.setTimeout(async () => {
      setView("search");
      setSearchLoading(true);
      setError("");

      try {
        const response = await fetch(
          `/api/locations/search?q=${encodeURIComponent(normalizedQuery)}`,
          { signal: controller.signal },
        );

        if (!response.ok) throw new Error("Search request failed");

        const payload = (await response.json()) as {
          results?: LocationResult[];
        };

        setCities(Array.isArray(payload.results) ? payload.results : []);
      } catch (searchError) {
        if ((searchError as Error).name !== "AbortError") {
          setError("City search is temporarily unavailable.");
          setCities([]);
        }
      } finally {
        setSearchLoading(false);
      }
    }, 250);

    return () => {
      window.clearTimeout(timer);
      controller.abort();
    };
  }, [query, view]);

  async function openState(state: StateRecord) {
    setSelectedState(state);
    setView("cities");
    setQuery("");
    setCityLoading(true);
    setError("");

    try {
      const response = await fetch(
        `/api/locations/cities?state=${encodeURIComponent(state.code)}`,
      );

      if (!response.ok) throw new Error("Unable to load cities");

      const payload = (await response.json()) as {
        cities?: LocationResult[];
      };

      setCities(Array.isArray(payload.cities) ? payload.cities : []);
    } catch {
      setError(`Unable to load cities in ${state.name}.`);
      setCities([]);
    } finally {
      setCityLoading(false);
    }
  }

  async function filterCitiesInState(value: string) {
    setQuery(value);

    if (!selectedState) return;

    setCityLoading(true);
    setError("");

    try {
      const response = await fetch(
        `/api/locations/cities?state=${encodeURIComponent(
          selectedState.code,
        )}&q=${encodeURIComponent(value.trim())}`,
      );

      if (!response.ok) throw new Error("Unable to filter cities");

      const payload = (await response.json()) as {
        cities?: LocationResult[];
      };

      setCities(Array.isArray(payload.cities) ? payload.cities : []);
    } catch {
      setError(`Unable to search cities in ${selectedState.name}.`);
    } finally {
      setCityLoading(false);
    }
  }

  function resetToStates() {
    setSelectedState(null);
    setView("states");
    setQuery("");
    setCities([]);
    setError("");
  }

  function useCurrentLocation() {
    if (!navigator.geolocation) {
      setError("Location access is not supported by this browser.");
      return;
    }

    setLocating(true);
    setError("");

    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        try {
          const response = await fetch(
            `/api/locations/reverse?lat=${coords.latitude}&lng=${coords.longitude}`,
          );

          if (!response.ok) throw new Error("Reverse lookup failed");

          const payload = (await response.json()) as {
            location?: LocationResult;
          };

          if (!payload.location) throw new Error("No location found");

          onSelect(payload.location);
        } catch {
          setError("We could not identify your city from the current location.");
          setLocating(false);
        }
      },
      () => {
        setError("Location permission was denied or unavailable.");
        setLocating(false);
      },
      {
        enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 300000,
      },
    );
  }

  const showSearchInput = view !== "states" || true;

  return (
    <DialogShell title="Choose your location" onClose={onClose}>
      <div className="max-h-[calc(92dvh-82px)] overflow-y-auto">
        <div className="border-b border-white/[0.08] p-6 sm:p-7">
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
            Selected location
          </p>
          <p className="mt-2 text-xl font-bold text-white">{selectedLabel}</p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={useCurrentLocation}
              disabled={locating}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#96ed08] px-5 font-extrabold text-black transition hover:bg-[#a7ff22] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96ed08] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0b0b] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {locating ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                <LocateFixed size={18} />
              )}
              Use my current location
            </button>

            <Link
              href="/launch-markets"
              onClick={onClose}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/[0.12] px-5 font-bold text-white/75 transition hover:border-[#96ed08]/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96ed08]"
            >
              View Launch Markets
              <ChevronRight size={17} />
            </Link>
          </div>
        </div>

        <div className="p-6 sm:p-7">
          {view === "cities" && selectedState ? (
            <button
              type="button"
              onClick={resetToStates}
              className="mb-5 inline-flex items-center gap-2 text-sm font-bold text-[#96ed08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96ed08]"
            >
              <ArrowLeft size={17} />
              All states
            </button>
          ) : null}

          {showSearchInput ? (
            <>
              <label htmlFor="footer-city-search" className="sr-only">
                Search United States locations
              </label>

              <div className="relative">
                <Search
                  size={19}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
                />

                <input
                  id="footer-city-search"
                  type="search"
                  value={query}
                  onChange={(event) => {
                    if (view === "cities") {
                      void filterCitiesInState(event.target.value);
                    } else {
                      setQuery(event.target.value);
                    }
                  }}
                  placeholder={
                    view === "cities" && selectedState
                      ? `Search cities in ${selectedState.name}`
                      : "Search city, state, or ZIP code"
                  }
                  autoComplete="off"
                  className="min-h-13 w-full rounded-full border border-white/[0.12] bg-black/35 pl-12 pr-5 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#96ed08]/60 focus:ring-2 focus:ring-[#96ed08]/15"
                />
              </div>
            </>
          ) : null}

          <p className="mt-3 text-sm leading-6 text-white/42">
            Selecting a city personalizes location information. It does not mean
            that AkiGO service is currently available there.
          </p>

          <div aria-live="polite" className="mt-5">
            {error ? (
              <p className="rounded-xl border border-amber-400/20 bg-amber-400/[0.06] px-4 py-3 text-sm text-amber-200">
                {error}
              </p>
            ) : null}
          </div>

          {view === "states" ? (
            <div className="mt-6">
              <h3 className="text-sm font-extrabold uppercase tracking-[0.14em] text-white/50">
                United States
              </h3>

              {stateLoading ? (
                <div className="flex items-center gap-2 py-10 text-sm text-white/50">
                  <Loader2 size={18} className="animate-spin text-[#96ed08]" />
                  Loading states
                </div>
              ) : (
                <div className="mt-4 divide-y divide-white/[0.08] overflow-hidden rounded-2xl border border-white/[0.10]">
                  {states.map((state) => (
                    <button
                      key={state.code}
                      type="button"
                      onClick={() => void openState(state)}
                      className="flex min-h-16 w-full items-center justify-between gap-4 bg-white/[0.02] px-5 text-left transition hover:bg-[#96ed08]/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#96ed08]"
                    >
                      <span>
                        <span className="block font-bold text-white">
                          {state.name}
                        </span>
                        <span className="mt-1 block text-sm text-white/40">
                          {state.cityCount.toLocaleString()} cities
                        </span>
                      </span>

                      <ChevronRight size={18} className="shrink-0 text-white/30" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : null}

          {view === "cities" && selectedState ? (
            <div className="mt-6">
              <h3 className="font-display text-2xl font-bold text-white">
                {selectedState.name}
              </h3>

              {cityLoading ? (
                <div className="flex items-center gap-2 py-10 text-sm text-white/50">
                  <Loader2 size={18} className="animate-spin text-[#96ed08]" />
                  Loading cities
                </div>
              ) : cities.length > 0 ? (
                <div className="mt-4 divide-y divide-white/[0.08] overflow-hidden rounded-2xl border border-white/[0.10]">
                  {cities.map((city) => (
                    <button
                      key={`${city.city}-${city.stateCode}-${city.latitude ?? ""}`}
                      type="button"
                      onClick={() => onSelect(city)}
                      className="flex min-h-16 w-full items-center justify-between gap-4 bg-white/[0.02] px-5 text-left transition hover:bg-[#96ed08]/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#96ed08]"
                    >
                      <span>
                        <span className="block font-bold text-white">{city.city}</span>
                        <span className="mt-1 block text-sm text-white/40">
                          {city.state}
                        </span>
                      </span>

                      <ChevronRight size={18} className="shrink-0 text-white/30" />
                    </button>
                  ))}
                </div>
              ) : (
                <p className="py-10 text-sm text-white/45">
                  No matching cities were found in {selectedState.name}.
                </p>
              )}
            </div>
          ) : null}

          {view === "search" ? (
            <div className="mt-6">
              <h3 className="text-sm font-extrabold uppercase tracking-[0.14em] text-white/50">
                Search results
              </h3>

              {searchLoading ? (
                <div className="flex items-center gap-2 py-10 text-sm text-white/50">
                  <Loader2 size={18} className="animate-spin text-[#96ed08]" />
                  Searching locations
                </div>
              ) : cities.length > 0 ? (
                <div className="mt-4 divide-y divide-white/[0.08] overflow-hidden rounded-2xl border border-white/[0.10]">
                  {cities.map((city) => (
                    <button
                      key={`${city.city}-${city.stateCode}-${city.latitude ?? ""}`}
                      type="button"
                      onClick={() => onSelect(city)}
                      className="flex min-h-16 w-full items-center justify-between gap-4 bg-white/[0.02] px-5 text-left transition hover:bg-[#96ed08]/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#96ed08]"
                    >
                      <span>
                        <span className="block font-bold text-white">{city.city}</span>
                        <span className="mt-1 block text-sm text-white/40">
                          {city.state}
                        </span>
                      </span>

                      <ChevronRight size={18} className="shrink-0 text-white/30" />
                    </button>
                  ))}
                </div>
              ) : (
                <p className="py-10 text-sm text-white/45">
                  No matching United States cities were found.
                </p>
              )}
            </div>
          ) : null}

          <div className="mt-6 rounded-2xl border border-[#96ed08]/20 bg-[#96ed08]/[0.04] p-5">
            <p className="font-bold text-white">Is your market not available?</p>
            <p className="mt-2 text-sm leading-6 text-white/48">
              Register interest so AkiGO can evaluate local rider, driver,
              delivery, and business demand.
            </p>
            <Link
              href="/launch-markets#market-interest"
              onClick={onClose}
              className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-[#96ed08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96ed08]"
            >
              Register market interest
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </DialogShell>
  );
}
