"use client"
import React, { useEffect, useState } from 'react'
import ChatCard from './ChatCard'
import ChatTop from './ChatTop'
import { useChatStore } from '@/store/Chat_store'
import { API_URL } from '@/configs'
import io from 'socket.io-client'
const ChatBar = () => {
  const Chats = useChatStore(state => state.Chats)
  const [socket , setSocket] = useState(null) as any
  useEffect(() => {
    if(!socket) {
      const sock = io(API_URL)
      setSocket(sock)
      if(sock) console.log('socket created' , sock)
    }
  }, [])
  useEffect(() => {
    if(socket && Chats) {
      socket.emit('join' , {chats : Chats.map((chat : any) => chat._id)})
      socket.emit('message' , {message : 'hello from front end' , chatId : '65c80583d6dc599577b10248'})
    }
  }, [Chats])
  useEffect(() => {
    if(socket) {
      socket.on('message' , (chat : any) => {
        console.log(chat)
      })

    }
    return () => {
      if(socket) socket.disconnect();
    };
  },[socket])
  return (
    <div className='min-w-[400px] border-r border-[#E5E5E5] flex pt-5 flex-col gap-[12px] justify-start'>
        <ChatTop/>
        <div className='w-full px-[6px] overflow-y-auto'>
          {
            Chats && 
            Chats.length > 0 ? Chats.map((chat : any , index : number) => <ChatCard key={index} id={chat._id} name={chat.Name}  image={chat.ImageUrl}/>) 
            : <div className='text-[#050505] w-full h-full flex  items-center justify-center  text-[20px] font-[700]'><p>No Chat Found</p></div>
          }
        </div>
    </div>
  )
}

export default ChatBar