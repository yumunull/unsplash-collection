import {create} from "zustand/react";

interface State {
    keyword: string,
    keywordDisplay: string,
    searched: boolean,
}

interface Actions {
    setKeyword: (keyword: string) => void,
    setKeywordDisplay: (keywordDisplay: string) => void,
    setSearched: (searched: boolean) => void,
}

const useSearch = create<State & Actions>((set) => ({
    keyword: "",
    keywordDisplay: "",
    searched: false,
    setKeyword: (keyword) => set({keyword}),
    setKeywordDisplay: (keywordDisplay) => set({keywordDisplay}),
    setSearched: (searched) => set({searched}),
}))

export default  useSearch