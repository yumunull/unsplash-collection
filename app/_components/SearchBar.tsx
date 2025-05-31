import useSearch from "@/stores/useSearch";
import Image from "next/image";
import React from "react";
import {usePhotos} from "@/stores/usePhotos";

const SearchBar = () => {
    const {setKeyword, setSearched, keywordDisplay, setKeywordDisplay} = useSearch();
    const {setPhotos} = usePhotos();
    const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        console.log(e.key);
        if (e.key === "Enter") {
            // const res = await fetch(`/api/search/photos?query=${keyword}`)
            // if (!res.ok) {
            //     console.log(`error occurred on searching photos: ${keyword}`)
            //     return
            // }
            //
            // const json = await res.json()
            // console.log(JSON.stringify(json))
            // setPhotos(json)
            setKeyword(keywordDisplay)
            setSearched(true)
        }

    }
    return (
        <div
            className={`relative flex justify-center items-center max-w-[720px] w-full border-2 border-solid border-gray rounded-xl bg-(--background-input)`}>
            <input type={`text`} className={`p-6 w-full outline-none`} placeholder={`Enter your keywords...`}
                   value={keywordDisplay} onChange={(e) => setKeywordDisplay(e.target.value)} onKeyDown={handleSearch}/>
            <Image src={`/Search.svg`} alt={`search icon`} width={36} height={36}
                   className={`ml-auto mr-4`}/>
        </div>
    )
}


export default SearchBar;