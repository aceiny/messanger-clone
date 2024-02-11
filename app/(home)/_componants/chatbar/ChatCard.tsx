import { API_URL } from '@/configs'
import { cn } from '@/lib/utils'
import { useChatStore } from '@/store/Chat_store'
import axios from 'axios'
import React from 'react'

const ChatCard = ({id,name , image} : {id:string,name: string , image : string }) => {
    const isActive = false
    const chat = useChatStore(state => state.Chat)
    const setChat = useChatStore(state => state.setChat)
    const ClickHandler = async() => {
        await axios.get(`${API_URL}/chat/${id}` , {headers : {Authorization : `Bearer ${localStorage.getItem('token')}`}})
        .then(res =>{
          console.log(res.data)
            setChat(res.data)
        })
        .catch(err =>{
            console.log(err.response)
        })
    }
  return (
    <div onClick={ClickHandler} className={cn('w-full cursor-pointer rounded-lg gap-[11px]  p-[10px] transition flex items-center hover:bg-[#f5f5f59b]' , isActive ? "bg-[#f0f0f0] hover:bg-[#f0f0f0]" : "" )}>
        <img src={image} alt="image" className='w-[45px] object-cover  h-[45px] rounded-full ' />
        <div className=' flex flex-col justify-center '>
            <h2 className='font-bold text-[#050505] text-base'>{name}</h2>
            <p className='text-[#65676b] text-sm'>Last message - 19m</p>
        </div>
    </div>
  )
}

export default ChatCard