import { NextRequest, NextResponse } from "next/server";
import { loadUsCities, normalizeLocationText } from "@/lib/locations/usCities";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const stateCode = (
    request.nextUrl.searchParams.get("state") ?? ""
  ).trim().toUpperCase();

  const query = normalizeLocationText(
    request.nextUrl.searchParams.get("q") ?? "",
  );

  if (!/^[A-Z]{2}$/.test(stateCode)) {
    return NextResponse.json(
      { error: "A valid two-letter state code is required." },
      { status: 400 },
    );
  }

  const cities = await loadUsCities();

  const results = cities
    .filter((record) => record.stateCode === stateCode)
    .filter((record) => {
      if (!query) return true;

      return normalizeLocationText(
        [
          record.city,
          record.state,
          record.stateCode,
          ...(record.zipCodes ?? []),
        ].join(" "),
      ).includes(query);
    })
    .sort((a, b) => a.city.localeCompare(b.city))
    .slice(0, 2000)
    .map((record) => ({
      city: record.city,
      state: record.state,
      stateCode: record.stateCode,
      country: "US" as const,
      latitude: record.latitude,
      longitude: record.longitude,
    }));

  return NextResponse.json(
    { cities: results },
    {
      headers: {
        "Cache-Control": "public, max-age=900, stale-while-revalidate=3600",
      },
    },
  );
}
