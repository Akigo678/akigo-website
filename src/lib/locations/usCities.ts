import { promises as fs } from "node:fs";
import path from "node:path";

export type UsCityRecord = {
  city: string;
  state: string;
  stateCode: string;
  country?: string;
  latitude?: number;
  longitude?: number;
  zipCodes?: string[];
};

let cachedCities: UsCityRecord[] | null = null;

export function normalizeLocationText(value: string): string {
  return value
    .trim()
    .toLocaleLowerCase("en-US")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

export async function loadUsCities(): Promise<UsCityRecord[]> {
  if (cachedCities) return cachedCities;

  const possiblePaths = [
    path.join(process.cwd(), "src", "data", "us-cities.json"),
    path.join(process.cwd(), "data", "us-cities.json"),
  ];

  for (const filePath of possiblePaths) {
    try {
      const raw = await fs.readFile(filePath, "utf8");
      const parsed = JSON.parse(raw) as UsCityRecord[];

      cachedCities = parsed.filter(
        (record) =>
          record &&
          typeof record.city === "string" &&
          typeof record.state === "string" &&
          typeof record.stateCode === "string",
      );

      return cachedCities;
    } catch {
      // Try the next supported file location.
    }
  }

  return [];
}
