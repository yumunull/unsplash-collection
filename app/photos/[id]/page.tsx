"use client"
import {use} from "react";
import useSWR from "swr";
import Image from "next/image";
import {fetcher} from "@/lib/fetcher";

import {Full as UsersFull} from "unsplash-js/src/methods/users/types";
import {Full as PhotosFull} from "unsplash-js/dist/methods/photos/types";

const PhotoDetail = ({params}: { params: Promise<{ id: string }> }) => {
    const {id} = use(params)
    const {data: photosData, isLoading: isPhotosLoading} = useSWR<PhotosFull>(`/api/photos/${id}`, fetcher)
    const {
        data: usersData,
        isLoading: isUsersLoading
    } = useSWR<UsersFull>(photosData ? `/api/users/${photosData?.user.username}` : null, fetcher)
    if (!photosData || !usersData) return <div>Loading...</div>
    return (
        <div className={`flex gap-8 grow p-16`}>
            <div className={`max-w-2/5`}>
                <Image src={photosData?.urls.raw} alt={photosData?.description ?? ""} width={photosData?.width}
                       height={photosData?.height} className={`rounded-sm`}/>
            </div>

            <div className={"flex flex-col gap-4 grow"}>
                <div className={`flex gap-4 items-center`}>
                    <Image src={usersData?.profile_image.small} alt={`profile image`} width={40} height={40}
                           className={`rounded-full`}/>
                    <span className={`large-description`}>{usersData?.username}</span>
                </div>
                <p className={"description !font-light"}>{photosData?.description}</p>
                <div className={`flex gap-4`}>
                    <button
                        className={`flex gap-2 bg-gray px-8 py-3 rounded-sm transition-all duration-150 hover:scale-110 hover:shadow-md cursor-pointer`}>
                        <Image src={`/Plus.svg`} alt={`add to collection`} width={16} height={16}/>
                        <span>Add to Collection</span>
                    </button>
                    <button
                        className={`flex gap-2 bg-gray px-8 py-3 rounded-sm transition-all duration-150 hover:scale-110 hover:shadow-md cursor-pointer`}>
                        <Image src={`/down arrow.svg`} alt={`download`} width={16} height={16}/>
                        <span>Download</span>
                    </button>
                </div>
                <span className={"title mt-4"}>Collections</span>
                <div className={"flex flex-col gap-4 "}>
                    {photosData?.related_collections.results.map((collection) => (
                        <div
                            className={`group flex gap-4 p-2 hover:bg-gray rounded-md transition-all duration-150 cursor-pointer`}
                            key={collection.id}>
                            <div className={`w-16 aspect-square relative`}>
                                <Image src={collection?.cover_photo?.urls.raw} alt={collection.title} fill
                                       className={`rounded-sm`}/>
                            </div>
                            <div className={`flex flex-col justify-center`}>
                                <span className={"large-description font-light"}>{collection.title}</span>
                                <span
                                    className={"small-text"}>{collection.total_photos} photo{collection.total_photos > 1 && "s"}</span>
                            </div>
                            <button className={`hidden group-hover:flex ml-auto items-center gap-2 small-text cursor-pointer border-[1px] border-transparent transition-all duration-150 border-solid hover:border-indigo my-auto rounded-sm px-2 py-1`}>
                                <Image src={`/Remove.svg`} alt={`remove`} width={16} height={16}/>
                                <span>Remove</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PhotoDetail;