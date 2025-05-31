import Image from "next/image";
import {usePhotos} from "@/stores/usePhotos";
import {ReactNode} from "react";

const Gallery = () => {
    const {photos} = usePhotos()

    const getGalleryColumn = (offset: number, gap: number) => {
        const res: ReactNode[] = []
        if (!photos) return res;
        for (let i = offset; i < photos.results.length; i += gap) {
            const photo = photos.results[i]
            res.push((
                <div key={`${photo.id}-${i}`}>
                    <Image className={"rounded-sm"} src={photo.urls.raw} alt={photo.description ?? ""}
                           width={photo.width} height={photo.height}/>
                </div>
            ))
        }
        return res
    }

    const getGallery = (col: number) => {
        const res: ReactNode[] = []
        for (let i = 0; i < col; i++) {
            res.push((
                <div className={`gap-[inherit] flex flex-col`} key={i}>
                    {getGalleryColumn(i, col)}
                </div>))
        }
        return res;
    }

    return (
        <div className={`flex gap-6 w-full`}>
            {getGallery(4)}
        </div>
    )
}

export default Gallery;