"use client"
import Image from "next/image";
import SearchBar from "@/app/_components/SearchBar";
import useSearch from "@/stores/useSearch";

const SearchPage = () => {
    const {keyword, setKeyword, setSearched} = useSearch()
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
                    <SearchBar text={keyword} setText={setKeyword} searchCallback={() => setSearched(true)}/>
                </div>
            </>
        </div>
    )
}

export default SearchPage;
