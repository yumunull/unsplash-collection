import {NextRequest} from "next/server";

export const DELETE = (req: NextRequest, {params}: {
    params: Promise<{
        collectionId: string,
        imageId: string,
    }>
}) => {

}
