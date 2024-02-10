import React from 'react'
import ChatMessage from './ChatMessage'

const ChatBody = () => {
  return (
    <div className='flex-1 overflow-y-auto gap-1 flex flex-col-reverse px-3'>
        <ChatMessage
        sender="you"
        context='outgoing'
        sent={true}
        />
        <ChatMessage
        sender="other"
        context='ingoing'
        sent={false}
        />
    </div>
  )
}

export default ChatBody