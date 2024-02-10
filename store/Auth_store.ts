import { create } from 'zustand'

type AuthStore = {
    isAuth: boolean;
    LoginLoading : boolean;
    CheckAuthLoading : boolean;
    user : any ; 
    setAuth: (isLogin: boolean) => void;
    setUser: (user: any) => void;
    setLoginLoading : (loading : boolean) => void;
    setCheckAuthLoading : (loading : boolean) => void;
}

export const useAuthStore = create<AuthStore>((set : any) => ({
    isAuth: true,
    user: null,
    LoginLoading : false,
    CheckAuthLoading : false,
    setAuth: (isLogin: boolean) => set({ isAuth: isLogin }),
    setUser: (user: any) => set({ user: user }),
    setLoginLoading : (loading : boolean) => set({LoginLoading : loading}),
    setCheckAuthLoading : (loading : boolean) => set({CheckAuthLoading : loading})
}));
