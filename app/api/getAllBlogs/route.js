import { connectDB } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const GET = async () => {
  const db = await connectDB();
  const servicesCollection = db.collection("AllBlogs");
  try {
    const resp = await servicesCollection.find().toArray();
    return NextResponse.json(resp);
  } catch (error) {
    return NextResponse.json({ message: "No data found" });
  }
};
