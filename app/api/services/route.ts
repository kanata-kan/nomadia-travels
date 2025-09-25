import { NextResponse } from "next/server";
import services from "@/data/content/services.json";

export async function GET() {
  try {
    return NextResponse.json({ status: "success", data: services });
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        message: "Failed to load contact data",
      },
      { status: 500 },
    );
  }
}
