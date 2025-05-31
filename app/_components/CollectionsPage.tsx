import Link from "next/link";
import Image from "next/image";
import {Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";

const CollectionsPage = () => {
    return (
        <div className={`flex flex-col grow items-center`}>
            <span
                className={`title bg-gradient-to-r text-transparent bg-clip-text from-[#F2C593] to-[#8A3282]`}>Collections</span>
            <p>
                Explore the world through collections of beautiful<br/>photos free to use under the <Link
                href={"https://unsplash.com/license"}><b className={`underline`}>Unsplash Licence</b></Link>
            </p>

            <Dialog>
                <DialogTrigger asChild>
                    <div className={"grid w-full grid-cols-3 gap-8 grid-rows-[300px] mt-8"}>
                        <div
                            className={"bg-gray flex flex-col gap-8 items-center justify-center rounded-md w-full h-full cursor-pointer hover:scale-110 transition-all duration-150"}>
                            <Image src={"/Plus.svg"} alt={"add new collection"} width={48} height={48}/>
                            <span className={"large-description"}>Add new collection</span>
                        </div>
                    </div>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className={"mx-auto"}>Add collection</DialogTitle>
                    </DialogHeader>
                    <input className={"px-4 py-3 mt-4 outline-none border-gray border-2 border-solid rounded-md"}/>
                    <DialogFooter className={"mx-auto flex gap-4"}>
                        <button className={`cursor-pointer px-4 py-2 transition-all duration-150 hover:bg-gray rounded-sm`}>Save</button>
                        <button className={`cursor-pointer px-4 py-2 transition-all duration-150 hover:bg-gray rounded-sm`}>Cancel</button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default CollectionsPage;