import { create } from "zustand";

type UserStore = {
    Users : any;
    setUsers : (user : any) => void;
}
export const useUserStore = create<UserStore>((set) => ({
    Users : null,
    setUsers : (user : any) => set({Users : user})
}))