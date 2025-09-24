import ourStory from "@/data/content/our-story.json";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json({
      status: "success",
      data: ourStory,
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
