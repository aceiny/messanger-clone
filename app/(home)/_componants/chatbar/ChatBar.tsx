import React from 'react'
import ChatCard from './ChatCard'
import ChatTop from './ChatTop'

const ChatBar = () => {
  return (
    <div className='min-w-[400px] border-r border-[#E5E5E5] flex pt-5 flex-col gap-[12px] justify-start'>
        <ChatTop/>
        <div className='w-full px-[6px] overflow-y-auto'>
            <ChatCard/>
            <ChatCard/>
            <ChatCard/>
            <ChatCard/>
            <ChatCard/>
            <ChatCard/>
            <ChatCard/>
            <ChatCard/>
            <ChatCard/>
            <ChatCard/>
            <ChatCard/>
            <ChatCard/>
            <ChatCard/>
            <ChatCard/>
            <ChatCard/>
            <ChatCard/>
        </div>
    </div>
  )
}

export default ChatBar