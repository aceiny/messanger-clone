import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaVideo } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
const ChatHeader = () => {
  return (
    <div className='pl-[6px] py-[6px] pr-[10px] border-[#E5E5E5] border-b shadow flex justify-between items-center'>
        <div className={'cursor-pointer rounded-lg gap-[11px]  p-[4px] transition flex items-center hover:bg-[#f5f5f59b]'}>
            <img src="https://img.freepik.com/photos-gratuite/prise-vue-au-grand-angle-seul-arbre-poussant-sous-ciel-assombri-pendant-coucher-soleil-entoure-herbe_181624-22807.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1707436800&semt=sph" alt="image" className='w-[35px] object-cover  h-[35px] rounded-full ' />
            <div className=' flex flex-col justify-center '>
                <h2 className='font-bold text-[#050505] text-base'>Name</h2>
                <p className='text-[#65676b] text-sm'>Active now</p>
            </div>
        </div>
        <div className='flex items-center gap-3 text-[#0A7CFF] text-[20px]'>
            <button className='button-circle'>
                <FaPhoneAlt/>
            </button>
            <button className='button-circle'>
                <FaVideo />
            </button>
            <button className='button-circle'>
                <BsThreeDots/>
            </button>
        </div> 
    </div>
  )
}

export default ChatHeader