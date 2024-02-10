"use client"
import { API_URL } from '@/configs'
import { useAuthStore } from '@/store/Auth_store'
import React from 'react'
import Auth from '../../[auth]/page'
const SecureRoutes = ({children}:{children : React.ReactNode}) => {
    const isAuthenticated = useAuthStore(state => state.isAuth)
  return (
    <>
    {
        isAuthenticated ? children : <Auth/>
    }
    </>
  )
}

export default SecureRoutes