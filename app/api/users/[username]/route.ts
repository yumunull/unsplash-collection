import unsplash from "@/lib/unsplash";
import {NextRequest, NextResponse} from "next/server";

export const GET = async (req: NextRequest, {params}: {params: Promise<{username:string}>}) => {
    const {username} = await params

    const res = await unsplash.users.get({username: username})
    if (res.type == "error") {
        return NextResponse.json({errors: res.errors}, {status: res.status})
    }

    return NextResponse.json(res.response)
}