import activities from "@/data/content/activities.json";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json({
      status: "success",
      data: activities,
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
