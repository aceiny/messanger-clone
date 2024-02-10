import React from 'react'
import ChatMessage from './ChatMessage'

const ChatBody = () => {
  return (
    <div className='flex-1 flex flex-col-reverse px-3'>
        <ChatMessage sent={true} />
        <ChatMessage sent={false} />
        <ChatMessage sent={true} />
        <ChatMessage sent={false} />
        <ChatMessage sent={true} />
        <ChatMessage sent={false} />
    </div>
  )
}

export default ChatBody