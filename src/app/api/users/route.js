import { users } from "@/app/util/db";
import { NextResponse } from "next/server";

export const GET = (request) => {
    const data = users;
    return NextResponse.json(data, { status: 200 })
}

export const POST = async (request) => {
    let payload = await request.json();
    console.log(payload)
    if (!payload.name || !payload.age || !payload.city) {
        return NextResponse.json({ result: "require field not found", success: false }, { status: 400 })
    }
    return NextResponse.json({ result: 'new User Created', success: true }, { status: 200 })
}