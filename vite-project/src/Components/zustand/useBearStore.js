import { create } from "zustand";
import { persist } from "zustand/middleware";// для созранения состояния в localStorage

export const useBearStore = create( persist((set) =>({
    bears: 0,
    plusBear: () => set(state => ({bears: state.bears + 1})),
    removeAllBear: () => set({bears: 0}),
    minusBear: () => set(state => ({bears: state.bears -1}))
}),{
    name:"bear-storage"
}))