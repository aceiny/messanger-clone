"use client"
import { API_URL } from '@/configs'
import { useAuthStore } from '@/store/Auth_store'
import React, { useEffect } from 'react'
import Auth from '../../[auth]/page'
import axios from 'axios'
import Loading from './Loading'
import { useUserStore } from '@/store/User_store'
const SecureRoutes = ({children}:{children : React.ReactNode}) => {
    const setUser = useAuthStore(state => state.setUser)
    const isAuthenticated = useAuthStore(state => state.isAuth)
    const setAuth = useAuthStore(state => state.setAuth)
    const isAuthLoading = useAuthStore(state => state.CheckAuthLoading)
    const setAuthLoading = useAuthStore(state => state.setCheckAuthLoading)
    useEffect(() => {
      if(!localStorage.getItem('token')) {
        setAuth(false)
        setAuthLoading(false)
        return ;
      }
      if(!isAuthenticated){
        if(localStorage.getItem('token')) {
          axios.get(API_URL+'/auth/user',{headers:localStorage.getItem('token') ? {Authorization: `Bearer ${localStorage.getItem('token')}`} : {}})
          .then(res => {
            setAuth(true)
            setAuthLoading(false)
            setUser(res.data)
          })
          .catch(err => {
            setAuth(false)
            setAuthLoading(false)
            localStorage.removeItem('token')
          })
        }
      }
    }, [isAuthenticated])
  return (
    <>
    {
        isAuthLoading ? <Loading/> : isAuthenticated ? children : <Auth />
    }
    </>
  )
}

export default SecureRoutes
