import cars from "@/data/content/cars.json";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json({
      status: "success",
      data: cars,
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        message: "Failed to load cars",
      },
      { status: 500 },
    );
  }
}
