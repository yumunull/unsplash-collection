"use client"
import Image from "next/image";
import SearchBar from "@/app/_components/SearchBar";
import {usePhotos} from "@/stores/usePhotos";
import Gallery from "@/app/_components/Gallery";

const SearchPage = () => {
    const {photos} = usePhotos();
    return (
        <div className={`flex w-full glow relative`}>
            {photos === undefined && false ?
                <>
                    <Image src={`/hero-left.png`} alt={`background image`} width={1200} height={600}
                           className={`absolute top-0 -z-10`} style={{height: "100%", width: "auto"}}/>
                    <Image src={`/hero-right.png`} alt={`background image`} width={1200} height={600}
                           className={`absolute top-0 right-0 -z-10`} style={{height: "100%", width: "auto"}}/>
                    <div className={`flex flex-col justify-center items-center w-full h-full gap-4`}>
                        <h1 className={`title`}>Search</h1>
                        <p className={`large-description`}>Search high-resolution images from Unsplash...</p>
                        <SearchBar/>
                    </div>
                </>
                :
                <div className={"flex flex-col w-full"}>
                    <div className={`w-full bg-[url(/gradiend-bg.svg)] bg-cover bg-no-repeat grow-0 flex h-28 relative`}> 
                        <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[720px]`}>
                            <SearchBar/>
                        </div>
                    </div>

                    <div className={"p-16"}>
                        <Gallery/>
                    </div>
                </div>
            }
        </div>
    )
}

export default SearchPage;
