import { cn } from '@/lib/utils'
import React from 'react'

interface Props {
    sender: any, 
    context: string,
    sent: boolean
}

const ChatMessage = ({sender , context , sent} : Props) => {
  return (
    <div className={cn('flex items-center gap-2' , sent?" justify-end":" justify-start")}>
        {
            sent ? null : <img src="https://img.freepik.com/photos-gratuite/prise-vue-au-grand-angle-seul-arbre-poussant-sous-ciel-assombri-pendant-coucher-soleil-entoure-herbe_181624-22807.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1707436800&semt=sph" alt="image" className='w-[30px] object-cover  h-[30px] rounded-full ' />
        }
        <div className={cn(' py-2 px-3 rounded-full' , sent?"bg-[#0A7CFF] text-white":"bg-[#f0f0f0] text-[#050505]")}>this is a message</div>
    </div>
  )
}

export default ChatMessage