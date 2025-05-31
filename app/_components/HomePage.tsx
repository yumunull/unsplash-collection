"use client"
import useSearch from "@/stores/useSearch";
import ResultPage from "@/app/_components/ResultPage";
import SearchPage from "@/app/_components/SearchPage";

const HomePage = () => {
    const {searched} = useSearch()
    return (
        <>
            {searched ? <ResultPage/> : <SearchPage/>}
        </>
    )
}

export default HomePage;