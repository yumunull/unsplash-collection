import Image from "next/image";
import TopButton from "@/app/_components/TopButton";
import {ETopTab} from "@/stores/useTopTab";

const Top = () => {
    
    return (
        <div className={`flex w-full px-8 py-4 border-b-[0.01rem] border-solid border-gray-transparent`}>
            <Image src={`/Logo.svg`} alt={`Logo`} width={120} height={32} />
            <div className={`ml-auto flex gap-4`}>
                <TopButton type={ETopTab.HOME} href={"/"}>Home</TopButton>
                <TopButton type={ETopTab.COLLECTIONS} href={"/collections"}>Collections</TopButton>
            </div>
        </div>
    )
}


export default Top;