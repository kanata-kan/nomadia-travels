import gallery from "@/data/content/gallery.json";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json({
      status: "success",
      data: gallery,
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        message: "Failed to load gallery",
      },
      { status: 500 },
    );
  }
}
