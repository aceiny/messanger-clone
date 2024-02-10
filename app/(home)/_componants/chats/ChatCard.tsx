import { cn } from '@/lib/utils'
import React from 'react'

const ChatCard = () => {
    const isActive = false
  return (
    <div className={cn('w-full cursor-pointer rounded-lg gap-[11px]  p-[10px] transition flex items-center hover:bg-[#f5f5f59b]' , isActive ? "bg-[#f0f0f0] hover:bg-[#f0f0f0]" : "" )}>
        <img src="https://img.freepik.com/photos-gratuite/prise-vue-au-grand-angle-seul-arbre-poussant-sous-ciel-assombri-pendant-coucher-soleil-entoure-herbe_181624-22807.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1707436800&semt=sph" alt="image" className='w-[45px] object-cover  h-[45px] rounded-full ' />
        <div className=' flex flex-col justify-center '>
            <h2 className='font-bold text-[#050505] text-base'>Name</h2>
            <p className='text-[#65676b] text-sm'>Last message - 19m</p>
        </div>
    </div>
  )
}

export default ChatCard