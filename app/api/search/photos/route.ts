import {NextRequest, NextResponse} from "next/server";
import unsplash from "@/lib/unsplash";

export const GET = async (req: NextRequest) => {
    const keyword = req.nextUrl.searchParams.get("query")
    const pageStr = req.nextUrl.searchParams.get("page")
    const page = pageStr ? parseInt(pageStr) : undefined

    console.log(`search ${keyword} ${page}`)

    if (!keyword) {
        return NextResponse.json({error: "query is required"})
    }
    const res = await unsplash.search.getPhotos({query: keyword as string, page: page, perPage: 16})

    if (res.type == "error") {
        console.log(res.errors)
        return NextResponse.json({error: res.errors}, {status: res.status})
    }

    return NextResponse.json(res.response)
}