import home from "@/data/content/home.json";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json({
      status: "success",
      data: home,
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        message: "Failed to load home data",
      },
      { status: 500 },
    );
  }
}
