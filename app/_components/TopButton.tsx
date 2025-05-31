"use client"
import {ETopTab, useTopTab} from "@/stores/useTopTab";
import {FC, PropsWithChildren} from "react";
import Link from "next/link";
interface Props {
    type: ETopTab,
    href: string,
}
const TopButton: FC<PropsWithChildren<Props>> = ({type, href, children}) => {
    const {tab, setTab} = useTopTab();
    const handleClick = () => {
        setTab(type)
    }
    return (
        <button className={`relative px-4 py-2 rounded-md ${type == tab ? `top-button-selected` : `top-button`}`} onClick={handleClick}>
            <Link href={href} className={"w-full h-full absolute top-0 left-0"}/>
                {children}
        </button>
    )
}


export default TopButton;