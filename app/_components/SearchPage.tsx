"use client"
import Image from "next/image";
import useSearch from "@/stores/useSearch";

const SearchPage = () => {
    const {keyword, setKeyword} = useSearch();
    return (
        <div className={`flex w-full glow relative`}>
            <Image src={`/hero-left.png`} alt={`background image`} width={1200} height={600}
                   className={`absolute top-0 -z-10`} style={{height: "100%", width: "auto"}}/>
            <Image src={`/hero-right.png`} alt={`background image`} width={1200} height={600}
                   className={`absolute top-0 right-0 -z-10`} style={{height: "100%", width: "auto"}}/>
            <div className={`flex flex-col justify-center items-center w-full h-full gap-4`}>
                <h1 className={`title`}>Search</h1>
                <p className={`large-description`}>Search high-resolution images from Unsplash...</p>
                <div
                    className={`relative flex justify-center items-center max-w-[720px] w-4/5 border-2 border-solid border-gray rounded-xl bg-(--background-input)`}>
                    <input type={`text`} className={`p-6 w-full outline-none`} placeholder={`Enter your keywords...`}
                    value={keyword} onChange={(e)=>setKeyword(e.target.value)}/>
                    <Image src={`/Search.svg`} alt={`search icon`} width={36} height={36}
                           className={`ml-auto mr-4`}/>
                </div>
            </div>
        </div>
    )
}


export default SearchPage;
