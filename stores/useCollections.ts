import {create} from "zustand/react";
import {Basic} from "unsplash-js/dist/methods/collections/types";
import useSWRInfinite from "swr/infinite";
import {fetcher} from "@/lib/fetcher";


const getKey = (pageIndex: number, previousPageData: Basic[]) => {
    if (previousPageData && !previousPageData.length) return null
    return `/api/collections?page=${pageIndex + 1}`
}

export const useCollectionsSWR = () => {
    return useSWRInfinite<Basic[]>(getKey, fetcher)
}

interface State {
    collections: Basic[]
}


interface Actions {
    setCollections: (collections: Basic[]) => void;
    appendCollections: (collections: Basic[]) => void;
}

export const useCollections = create<State & Actions>((set) => ({
    collections: [],
    setCollections: (collections) => {set({collections})},
    appendCollections: (collections) => {set(state => ({collections: [...state.collections, ...collections ]}))}
}))