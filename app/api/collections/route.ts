import unsplash from "@/lib/unsplash";
import {NextRequest, NextResponse} from "next/server";
export const GET = async () => {
    const res = await fetch(`https://api.unsplash.com/users/${process.env.UNSPLASH_USERNAME}/collections`, {
        headers: {
            "Authorization": `Bearer ${process.env.UNSPLASH_AUTH_KEY}`
        }
    })

    if (!res.ok) {
        return NextResponse.json({errors: "can not get collections list"}, {status: res.status})
    }

    const json = await res.json()
    return NextResponse.json(json)
}


export const POST = async (req: NextRequest) => {
    const formData = await req.formData()
    const title = formData.get("title")
    if (!title) {
        return NextResponse.json({errors: "title is not provided"}, {status: 401})
    }
    const res = await fetch(`https://api.unsplash.com/collections`, {
        body: JSON.stringify({
            title: title as string,
            private: true
        }),
        method: "POST",
        headers: {
            "Authorization": `Bearer ${process.env.UNSPLASH_AUTH_KEY}`,
            "Content-Type": "application/json"
        }
    })

    const json = await res.json()
    console.log(json)

    if (!res.ok) {
        return NextResponse.json({errors: "can not create collections"}, {status: res.status})
    }

    return NextResponse.json(json)
}