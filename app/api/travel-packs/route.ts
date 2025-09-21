import travelPacks from "@/data/content/travel-packs.json";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json({
      status: "success",
      data: travelPacks,
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        message: "Failed to load travel packs",
      },
      { status: 500 },
    );
  }
}
