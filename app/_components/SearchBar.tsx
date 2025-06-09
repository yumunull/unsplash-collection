import Image from "next/image";
import React, {FC} from "react";

interface Props{
    text: string,
    setText: (text: string) => void,
    searchCallback?: () => void
}

const SearchBar: FC<Props> = ({text, setText, searchCallback}) => {
    const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        console.log(e.key);
        if (e.key === "Enter") {
            if(searchCallback) searchCallback()
        }

    }
    return (
        <div
            className={`relative flex justify-center items-center max-w-[720px] w-full border-2 border-solid border-gray rounded-xl bg-(--background-input)`}>
            <input type={`text`} className={`p-6 w-full outline-none`} placeholder={`Enter your keywords...`}
                   value={text} onChange={(e) => setText(e.target.value)} onKeyDown={handleSearch}/>
            <Image src={`/Search.svg`} alt={`search icon`} width={36} height={36}
                   className={`ml-auto mr-4`}/>
        </div>
    )
}


export default SearchBar;