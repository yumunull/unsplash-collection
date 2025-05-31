import {NextRequest, NextResponse} from "next/server";
import unsplash from "@/lib/unsplash";

export const GET = async (req: NextRequest, {params}: {params: Promise<{id:string}>}) => {
    const {id} = await params
    const res = await unsplash.photos.get({photoId: id})
    if (res.type == "error") {
        return NextResponse.json({errors: res.errors}, {status: res.status})
    }

    return NextResponse.json(res.response)
}