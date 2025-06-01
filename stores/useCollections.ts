import {Collections} from "unsplash-js/src/methods/search/types/response";
import {create} from "zustand/react";
import {Basic} from "unsplash-js/dist/methods/collections/types";

interface State {
    collections: Basic[]
}

interface Actions {
    appendCollections: (collections: Basic[]) => void,
    setCollections: (collections: Basic[]) => void,
}

export const useCollections = create<State & Actions>((set) => ({
    collections: [],
    appendCollections: (collections) => set((state) => ({
        collections: [...state.collections, ...collections]
    })),
    setCollections: (collections) => set({collections}),
}))