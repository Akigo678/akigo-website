import { NextRequest, NextResponse } from "next/server";
import {
  loadUsCities,
  normalizeLocationText,
} from "@/lib/locations/usCities";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const query = normalizeLocationText(
    request.nextUrl.searchParams.get("q") ?? "",
  );

  if (query.length < 2) {
    return NextResponse.json({ results: [] });
  }

  const cities = await loadUsCities();

  const results = cities
    .filter((record) => {
      const searchable = normalizeLocationText(
        [
          record.city,
          record.state,
          record.stateCode,
          ...(record.zipCodes ?? []),
        ].join(" "),
      );

      return searchable.includes(query);
    })
    .sort((a, b) => {
      const aStarts = normalizeLocationText(a.city).startsWith(query) ? 0 : 1;
      const bStarts = normalizeLocationText(b.city).startsWith(query) ? 0 : 1;

      return (
        aStarts - bStarts ||
        a.city.localeCompare(b.city) ||
        a.state.localeCompare(b.state)
      );
    })
    .slice(0, 60)
    .map((record) => ({
      city: record.city,
      state: record.state,
      stateCode: record.stateCode,
      country: "US" as const,
      latitude: record.latitude,
      longitude: record.longitude,
    }));

  return NextResponse.json(
    { results },
    {
      headers: {
        "Cache-Control": "public, max-age=300, stale-while-revalidate=3600",
      },
    },
  );
}
