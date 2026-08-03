import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const latitude = Number(request.nextUrl.searchParams.get("lat"));
  const longitude = Number(request.nextUrl.searchParams.get("lng"));

  if (
    !Number.isFinite(latitude) ||
    !Number.isFinite(longitude) ||
    latitude < -90 ||
    latitude > 90 ||
    longitude < -180 ||
    longitude > 180
  ) {
    return NextResponse.json(
      { error: "Invalid coordinates." },
      { status: 400 },
    );
  }

  const endpoint = process.env.AKIGO_REVERSE_GEOCODING_URL;

  if (!endpoint) {
    return NextResponse.json(
      {
        error:
          "Reverse geocoding is not configured. Set AKIGO_REVERSE_GEOCODING_URL.",
      },
      { status: 503 },
    );
  }

  try {
    const target = new URL(endpoint);
    target.searchParams.set("lat", String(latitude));
    target.searchParams.set("lng", String(longitude));

    const response = await fetch(target, {
      headers: {
        Accept: "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Reverse geocoding provider failed.");
    }

    const payload = (await response.json()) as {
      city?: string;
      state?: string;
      stateCode?: string;
      latitude?: number;
      longitude?: number;
    };

    if (!payload.city || !payload.state || !payload.stateCode) {
      throw new Error("Reverse geocoding response is incomplete.");
    }

    return NextResponse.json({
      location: {
        city: payload.city,
        state: payload.state,
        stateCode: payload.stateCode,
        country: "US",
        latitude:
          typeof payload.latitude === "number" ? payload.latitude : latitude,
        longitude:
          typeof payload.longitude === "number" ? payload.longitude : longitude,
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to resolve location." },
      { status: 502 },
    );
  }
}
