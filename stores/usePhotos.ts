import {create} from "zustand/react";
import {Photos} from "unsplash-js/src/methods/search/types/response";
interface State {
    photos: Photos | undefined;
}

interface Actions {
    setPhotos: (photos: Photos | undefined) => void,
}


export const usePhotos = create<State & Actions>((set) => ({
    photos: undefined,
    setPhotos: (photos) => set({photos}),
}))
