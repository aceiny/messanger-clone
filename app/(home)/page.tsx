"use client"
import React, { useEffect } from 'react'
import Chat from './_componants/chat/Chat'
import axios from 'axios'
import { API_URL } from '@/configs'
import { useChatStore } from '@/store/Chat_store'
import { useAuthStore } from '@/store/Auth_store'
const page = () => {
    const user = useAuthStore(state => state.user)
    const setUser = useAuthStore(state => state.setUser)
    const setAuth = useAuthStore(state => state.setAuth)
    const Chats = useChatStore(state => state.Chats)
    const setChats = useChatStore(state => state.setChats)
    useEffect(() => {
        if(!localStorage.getItem('token')) {
            setAuth(false)
        }
        if(!user) {
            axios.get(API_URL+'/auth/user',{headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
            .then(res => {
                setUser(res.data)
                return 
            })
            .catch(err => {
                if(err.response.status === 401) {
                    setAuth(false)
                    localStorage.removeItem('token')
                }
                else {
                    alert('Server Error')
                }
            })
        }
    }, [])
    useEffect(() => {
        if(!Chats){
            axios.get(API_URL+'/chat',{headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
            .then(res => {
                setChats(res.data)
            })
            .catch(err => {
                if(err.response.status === 401) {
                    setAuth(false)
                    localStorage.removeItem('token')
                }
                else {
                    alert('Server Error')
                }
            })
        }
    }, [])
    const noChat = false
    if(noChat){
        return (
            <div className='flex items-center justify-center h-full gap-5 flex-col '>
                <img src="https://cdn-icons-png.flaticon.com/512/678/678649.png" className=' max-w-[200px] max-h-[200px]' alt="" />
                <h1 className=' text-[20px] text-[#050505] font-[700]'>No Chat Selected</h1>
            </div>
        )
    }
    return (
        <Chat/>
    )
}

export default page