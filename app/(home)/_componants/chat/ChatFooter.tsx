"use client"
import React, { useState } from 'react'
import { BsPlusCircleFill } from "react-icons/bs";
import { FaRegImage } from "react-icons/fa6";
import { PiStickerFill } from "react-icons/pi";
import { HiGif } from "react-icons/hi2";
import { AiFillLike } from "react-icons/ai";
import { MdEmojiEmotions } from "react-icons/md";
import axios from 'axios';
import { API_URL } from '@/configs';
import { useChatStore } from '@/store/Chat_store';
const ChatFooter = () => {
    const chat = useChatStore(state => state.Chat)
    const [message , setMessage] = useState("")
    const handleKeyUp = async (e : any) => {
        if(e.key === "Enter" && message !== ""){
            await axios.post(API_URL+"/chat/message/" + chat._id , {Message : message} , {headers : {Authorization : `Bearer ${localStorage.getItem('token')}`}})
            .then(res =>{
                console.log(res.data)
            })
            .catch(err =>{
                console.log(err.response)
            })
            e.target.value = ""
            setMessage("")
        }
        setMessage(e.target.value)
    }
  return (
    <div className='flex px-4 py-3 items-center text-[#0A7CFF] text-[20px]'>
        <button className='button-circle'>
            <BsPlusCircleFill />
        </button>
        {
            message === "" ?
                <>
                <button className='button-circle'>
                    <FaRegImage />
                </button>
                <button className='button-circle text-[22px]'>
                    <PiStickerFill />
                </button>
                <button className='button-circle text-[22px]'>
                    <HiGif />
                </button>
                </>
            : null
        }
        <div className=' flex items-center flex-1 bg-[#f5f5f5] rounded-full mx-2'>
            <input 
            onKeyUp={handleKeyUp} 
            type="text"
            className=' outline-none flex-1 rounded-l-full px-3 bg-transparent text-[#050505] text-[14px]' 
            placeholder='Aa' />
            <button className=' button-circle text-[22px]'>
                <MdEmojiEmotions />
            </button>
        </div>
        <button className='button-circle text-[22px]'>
            <AiFillLike />
        </button>
    </div>
  )
}

export default ChatFooter