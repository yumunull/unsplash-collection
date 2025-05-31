import {create} from "zustand/react";
import {Photos} from "unsplash-js/src/methods/search/types/response";
interface State {
    photos: Photos | undefined;
}

interface Actions {
    setPhotos: (photos: Photos | undefined) => void,
    appendPhotos: (photos: Photos) => void,
}


export const usePhotos = create<State & Actions>((set) => ({
    photos: undefined,
    setPhotos: (photos) => set({photos}),
    appendPhotos: (photos)=> set((state) => ({
        photos: {...photos, results: [...state.photos?.results ?? [], ...photos.results]}
    }))
}))
