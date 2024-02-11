import { create } from "zustand"

type SocketStore = {
    socket : any;
    setSSocket : (socket : any) => void;
}
export const useSocketStore = create<SocketStore>((set : any) => ({
    socket : null,
    setSSocket : (socket : any) => set({socket})
}))