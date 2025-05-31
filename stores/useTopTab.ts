import {create} from "zustand/react";

enum ETopTab {
    HOME = "HOME",
    COLLECTIONS = "COLLECTIONS",
}
interface State {
    tab: ETopTab, 
}

interface Actions {
    setTab: (tab: ETopTab) => void,
}

const useTopTab = create<State & Actions>((set) => ({
    tab: ETopTab.HOME,
    setTab: (tab) => set({tab}),
}))


export  {useTopTab, ETopTab}
