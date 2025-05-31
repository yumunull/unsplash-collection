"use client"
import Image from "next/image";
import SearchBar from "@/app/_components/SearchBar";
import {usePhotos} from "@/stores/usePhotos";
import Gallery from "@/app/_components/Gallery";
import {useEffect, useRef} from "react";
import useSearch from "@/stores/useSearch";

const SearchPage = () => {
    return (
        <div className={`flex w-full glow relative`}>
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
        </div>
    )
}

export default SearchPage;
