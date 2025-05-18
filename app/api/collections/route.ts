import unsplash from "@/lib/unsplash";
import {NextResponse} from "next/server";
export const GET = async () => {
    const res = await unsplash.search.getPhotos({
        query: "cat",
    })
    return NextResponse.json(res)
}