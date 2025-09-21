import about from "@/data/content/about.json";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json({
      status: "success",
      data: about,
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        message: "Failed to load about data",
      },
      { status: 500 },
    );
  }
}
