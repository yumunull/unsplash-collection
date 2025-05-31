"use client"
import SearchBar from "@/app/_components/SearchBar";
import Gallery from "@/app/_components/Gallery";
import {usePhotos} from "@/stores/usePhotos";
import {useCallback, useEffect, useRef} from "react";
import useSWRInfinite from "swr/infinite";
import {Photos} from "unsplash-js/src/methods/search/types/response";
import useSearch from "@/stores/useSearch";

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const ResultPage = () => {
    const {keyword} = useSearch()
    const getKey = useCallback((pageIndex: number, previousPageData: Photos) => {
        if (previousPageData && !previousPageData.results.length) return null
        return `/api/search/photos?query=${keyword}&page=${pageIndex + 1}`
    },[keyword])
    const updatePhotosContainer = useRef<HTMLDivElement>(null);
    const {setPhotos, appendPhotos} = usePhotos()
    const {isLoading, size, setSize} = useSWRInfinite<Photos>(getKey, fetcher, {
        onSuccess: (pages) => {
            appendPhotos(pages[pages.length - 1])
        }
    })

    useEffect(() => {
        setSize(1).then(()=>{
            setPhotos(undefined)
        })
    }, [keyword, setPhotos, setSize]);

    useEffect(() => {
        window.addEventListener("scrollend", async () => {
            console.log("window scrollend")
            const rect = updatePhotosContainer.current?.getBoundingClientRect()
            if (!rect) return;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const containerBottomInDoc = rect.bottom + scrollTop
            const windowBottomInDoc = scrollTop + window.innerHeight

            if (windowBottomInDoc >= containerBottomInDoc - 10) {
                if (!isLoading) {
                    console.log("fetch next page")
                    await setSize(size + 1)
                }
            }
        })
    }, [isLoading, setSize, size])
    return (
        <div className={`flex w-full glow relative`}>
            <div className={"flex flex-col w-full"}>
                <div
                    className={`w-full bg-[url(/gradiend-bg.svg)] bg-cover bg-no-repeat grow-0 flex h-28 relative`}>
                    <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[720px]`}>
                        <SearchBar/>
                    </div>
                </div>

                <div className={"p-16"} ref={updatePhotosContainer}>
                    <Gallery/>
                </div>
            </div>
        </div>
    )
}

export default ResultPage