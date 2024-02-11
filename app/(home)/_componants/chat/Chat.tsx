import React from 'react'
import ChatHeader from './ChatHeader'
import ChatBody from './ChatBody'
import ChatFooter from './ChatFooter'
import { useChatStore } from '@/store/Chat_store'
const Chat = () => {
  const chat = useChatStore(state => state.Chat)
  return (
    <div className='w-full h-full flex  flex-col'>
      {
        chat ?     
        <>
          <ChatHeader />
          <ChatBody messages={chat.Messages} />
          <ChatFooter />
        </>
         : <h1>no chat selected</h1>
        
      }
    </div>
  )
}

export default Chat