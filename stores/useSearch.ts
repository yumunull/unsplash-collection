import {create} from "zustand/react";

interface State {
    keyword: string,
}

interface Actions {
    setKeyword: (keyword: string) => void,
}

const useSearch = create<State & Actions>((set) => ({
    keyword: "",
    setKeyword: (keyword) => set({keyword}),
}))

export default  useSearch