import dbConnect from "@/utils/dbConn";
import Contact from "@/models/contactModel";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await dbConnect();
        const body = await req.json();

        await Contact.create(body)

        return NextResponse.json({
            message: "Message sent successfully"
        }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            message: `Server error, Please try again!`,
        }, { status: 500 })
    }
}