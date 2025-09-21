import contact from "@/data/content/contact.json";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json({
      status: "success",
      data: contact,
    });
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
