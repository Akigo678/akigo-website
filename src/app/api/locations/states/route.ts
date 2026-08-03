import { NextResponse } from "next/server";
import { loadUsCities } from "@/lib/locations/usCities";

export const runtime = "nodejs";

export async function GET() {
  const cities = await loadUsCities();

  const grouped = new Map<
    string,
    {
      name: string;
      code: string;
      cities: Set<string>;
    }
  >();

  for (const city of cities) {
    const current = grouped.get(city.stateCode) ?? {
      name: city.state,
      code: city.stateCode,
      cities: new Set<string>(),
    };

    current.cities.add(city.city);
    grouped.set(city.stateCode, current);
  }

  const states = [...grouped.values()]
    .map((state) => ({
      name: state.name,
      code: state.code,
      cityCount: state.cities.size,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  return NextResponse.json(
    { states },
    {
      headers: {
        "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      },
    },
  );
}