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
            Chats.length > 0 ? Chats.map((chat, index) => <ChatCard key={index} />) 
            : <h1 className='text-[#050505] text-[20px] font-[700]'>No Chat Found</h1>
          }
        </div>
    </div>
  )
}

export default ChatBar