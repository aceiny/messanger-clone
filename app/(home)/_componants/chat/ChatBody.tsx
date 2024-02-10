import React from 'react'
import ChatMessage from './ChatMessage'

const ChatBody = () => {
  return (
    <div className='flex-1 flex flex-col-reverse px-3'>
        <ChatMessage
        sender="you"
        context='outgoing'
        sent={true}
        />
    </div>
  )
}

export default ChatBody