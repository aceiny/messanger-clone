import { create } from "zustand";

type ChatStore = {
    Chats : [] | null;
    setChats : (chats : any) => void;
    Chat : any;
    setChat : (chat : any) => void;
}
export const useChatStore = create<ChatStore>((set) => ({
    Chats : null,
    Chat : null,
    setChats : (chats : any) => set({Chats : chats}),
    setChat : (chat : any) => set({Chat : chat})
}))