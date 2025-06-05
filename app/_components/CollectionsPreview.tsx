import Image from "next/image";
import {FC} from "react";
import {useCollections} from "@/stores/useCollections";

interface Props {
    index: number,
}

const CollectionsPreview: FC<Props> = ({index}) => {
    const {collections} = useCollections()
    if (index >= collections.length) return <></>
    const collection = collections[index]
    const getPreviewPhoto = (index: number) => {
        return collection?.preview_photos?.at(index) ?
            <Image src={collection.preview_photos[index].urls.raw} alt={"preview photo"} fill/> : <></>
    }
    return (
        <div className={"w-full h-full flex flex-col"}>
            <div className={"grid grid-rows-2 grid-cols-[7fr_3fr] grow gap-1 [&_*]:rounded-sm [&_*]:overflow-hidden"}>
                <div className={"bg-gray relative row-span-2"}>
                    {
                        getPreviewPhoto(0)
                    }
                </div>
                <div className={"bg-gray relative"}></div>
                <div className={"bg-gray relative"}></div>
            </div>
            <span className={""}>{collection.title}</span>
            <span>{collection.total_photos} photo{collection.total_photos > 1 && "s"}</span>
        </div>
    )
}

export default CollectionsPreview;