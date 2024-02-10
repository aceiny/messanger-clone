import { Search, SquarePen } from 'lucide-react'
import React from 'react'
import NewChat from './NewChat'

const ChatTop = () => {
  return (
    <main className='px-[24px] flex flex-col gap-4'>
        <div className='flex items-center justify-between'>
            <h1 className='font-[700] text-[24px] text-[#050505]'>Chats</h1>
            <NewChat/>
        </div>
        <div className='w-full h-[42px]  px-3 rounded-full bg-[#f3f3f3] flex items-center'>
            <Search size={20} className='text-[#767676]'/>
            <input type="text" placeholder='Search' className='px-2 flex-1 bg-transparent h-full rounded-r-full outline-none' />
        </div>
    </main>
  )
}

export default ChatTop