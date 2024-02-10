import React from 'react'
import ChatHeader from './ChatHeader'
import ChatBody from './ChatBody'
import ChatFooter from './ChatFooter'
const Chat = () => {
  return (
    <div className='w-full h-full flex flex-col'>
        <ChatHeader />
        <ChatBody />
        <ChatFooter />
    </div>
  )
}

export default Chat