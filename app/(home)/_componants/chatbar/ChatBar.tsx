"use client"
import React from 'react'
import ChatCard from './ChatCard'
import ChatTop from './ChatTop'
import { useChatStore } from '@/store/Chat_store'

const ChatBar = () => {
  const Chats = useChatStore(state => state.Chats)
  return (
    <div className='min-w-[400px] border-r border-[#E5E5E5] flex pt-5 flex-col gap-[12px] justify-start'>
        <ChatTop/>
        <div className='w-full px-[6px] overflow-y-auto'>
          {
            Chats && 
            Chats.length > 0 ? Chats.map((chat : any , index : number) => <ChatCard key={index} name={chat.Name}  image={chat.ImageUrl}/>) 
            : <div className='text-[#050505] w-full h-full flex  items-center justify-center  text-[20px] font-[700]'><p>No Chat Found</p></div>
          }
        </div>
    </div>
  )
}

export default ChatBar