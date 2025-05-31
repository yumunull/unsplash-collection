"use client"
import CollectionsPage from "@/app/_components/CollectionsPage";
import {useEffect} from "react";
import {useTopTab, ETopTab} from "@/stores/useTopTab";

const Page = () => {
    const {setTab} = useTopTab()

    useEffect(() => {
        setTab(ETopTab.COLLECTIONS)
    }, [setTab]);

    return (
        <div className={`p-16`}>
            <CollectionsPage/>
        </div>
    )
}

export default Page;