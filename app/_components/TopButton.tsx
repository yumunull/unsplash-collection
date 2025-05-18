"use client"
import {ETopTab, useTopTab} from "@/stores/useTopTab";
import {FC, PropsWithChildren} from "react";

interface Props {
    type: ETopTab,
}
const TopButton: FC<PropsWithChildren<Props>> = ({type, children}) => {
    const {tab, setTab} = useTopTab();
    
    return (
        <button className={`px-4 py-2 rounded-md ${type == tab ? `top-button-selected` : `top-button`}`} onClick={()=>setTab(type)}>
            {children}
        </button>
    )
}


export default TopButton;