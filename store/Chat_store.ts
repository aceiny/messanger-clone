import { create } from "zustand";

type ChatStore = {
    Chats : any;
    setChats : (chats : any) => void;
    Chat : any;
    setChat : (chat : any) => void;
    addChat : (chat : any) => void;
}
export const useChatStore = create<ChatStore>((set) => ({
    Chats : null,
    Chat : null,
    setChats : (chats : any) => set({Chats : chats}),
    setChat : (chat : any) => set({Chat : chat}),
    addChat : (chat : any) => set((state : any) => ({Chats : [chat,...state.Chats]}))
}))