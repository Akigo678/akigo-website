import {
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
  const clientEmail = getRequiredEnvironmentVariable(
    "FIREBASE_ADMIN_CLIENT_EMAIL",
  );
  const privateKey = getPrivateKey();

  if (projectId !== EXPECTED_PROJECT_ID) {
    throw new Error(
      `Firebase Admin project mismatch. Expected "${EXPECTED_PROJECT_ID}" but received "${projectId}".`,
    );
  }

  return initializeApp({
    projectId,
    credential: cert({
      projectId,
      clientEmail,
      privateKey,
    }),
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