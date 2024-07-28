import { users } from "@/app/util/db";
import { NextResponse } from "next/server";

export const GET = (request, content) => {
    console.log(content.params.id)
    const usersData = users.filter((item) => item.id === content.params.id)
    return NextResponse.json(usersData.length == 0 ? { result: 'No Data Found', success: false } : { result: usersData[0], success: true },
        { status: 200 })
}

export const PUT = async (request, content) => {
    let payload = await request.json();
    payload.id = content.params.id
    if (!payload.id || !payload.name || !payload.age || !payload.city) {
        return NextResponse.json({ result: "request data is not valid", success: false }, { status: 400 })
    }
    return NextResponse.json({ result: payload, success: true }, { status: 200 })
}

export const DELETE = async (request, content) => {
    let id = content.params.id
    if (id) {
        return NextResponse.json({ result: "User Deleted", success: true }, { status: 200 })
    }
    return NextResponse.json({ result: "Internal error , Please try after sometime", success: false }, { status: 400 })
}