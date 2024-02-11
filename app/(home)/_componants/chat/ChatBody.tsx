import React, { use } from 'react'
import ChatMessage from './ChatMessage'
import { useUserStore } from '@/store/User_store'
import { useAuthStore } from '@/store/Auth_store'

const ChatBody = ({messages}:{messages : [any]}) => {
  const loggedUser = useAuthStore(state => state.user)
  return (
    <div className='flex-1 overflow-y-auto gap-1 flex flex-col-reverse px-3'>
      {
        messages.map((message:any, index:number) => {
          return <ChatMessage key={index} sender={message.Sender} context={message.Message} sent={message.Sender == loggedUser._id} />
        })
      }
    </div>
  )
}

export default ChatBody