"use client"
import Link from "next/link";
import Image from "next/image";
import {Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {useEffect, useState} from "react";
import CollectionsPreview from "@/app/_components/CollectionsPreview";
import {useCollections, useCollectionsSWR} from "@/stores/useCollections";

const CollectionsPage = () => {
    const [title, setTitle] = useState("")
    const [open, setOpen] = useState(false)
    const {collections, setCollections} = useCollections()
    const {data, mutate} = useCollectionsSWR()

    useEffect(() => {
        if(!data) return
        setCollections(data.flat())
    }, [data, setCollections]);
    
    const handleCreateCollections = async () => {
        const formData = new FormData()
        formData.append("title", title)
        setTitle("")
        const res = await fetch("/api/collections", {
            method: "POST",
            body: formData
        })
        const json = await res.json()
        if (!res.ok) {
            console.log(`error occurred on creating collections: ${title} - ${json.errors}`)
        }
        await mutate()
        console.log(JSON.stringify(json))
        handleCloseDialog()
    }

    const handleCloseDialog = () => {
        setOpen(false)
    }
    return (
        <div className={`flex flex-col grow items-center`}>
            <span
                className={`title bg-gradient-to-r text-transparent bg-clip-text from-[#F2C593] to-[#8A3282]`}>Collections</span>
            <p>
                Explore the world through collections of beautiful<br/>photos free to use under the <Link
                href={"https://unsplash.com/license"}><b className={`underline`}>Unsplash Licence</b></Link>
            </p>
            <span>{collections.length}</span>
            <div className={"grid w-full grid-cols-3 gap-8 grid-rows-[300px] mt-8"}>
                {collections.map((_, i) => (
                    <CollectionsPreview key={i} index={i}/>
                ))}
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                        <div
                            className={"bg-gray flex flex-col gap-8 items-center justify-center rounded-md w-full h-full cursor-pointer hover:scale-110 transition-all duration-150"}>
                            <Image src={"/Plus.svg"} alt={"add new collection"} width={48} height={48}/>
                            <span className={"large-description"}>Add new collection</span>
                        </div>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle className={"mx-auto"}>Add collection</DialogTitle>
                        </DialogHeader>
                        <input
                            value={title}
                            onChange={(e) => {
                                setTitle(e.target.value)
                            }}
                            className={"px-4 py-3 mt-4 outline-none border-gray border-2 border-solid rounded-md"}/>
                        <DialogFooter className={"mx-auto flex gap-4"}>
                            <button onClick={handleCreateCollections}
                                    className={`cursor-pointer px-4 py-2 transition-all duration-150 hover:bg-gray rounded-sm`}>Save
                            </button>
                            <button onClick={handleCloseDialog}
                                    className={`cursor-pointer px-4 py-2 transition-all duration-150 hover:bg-gray rounded-sm`}>Cancel
                            </button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}

export default CollectionsPage;