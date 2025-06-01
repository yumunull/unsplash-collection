import {FC} from "react";
import {useCollections} from "@/stores/useCollections";
interface Props {
    index: number,
}
const CollectionsPreview: FC<Props> = ({index}) => {
    const {collections} = useCollections()
    if (index >= collections.length) return <></>
    const collection = collections[index]
    return (
        <div>
            <span>{collection.title}</span>
            <span>{collection.total_photos} photo{collection.total_photos > 1 && "s"}</span>
        </div>
    )
}

export default CollectionsPreview;