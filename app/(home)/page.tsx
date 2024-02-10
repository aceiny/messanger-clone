import React from 'react'
import Chat from './_componants/chat/Chat'
const page = () => {
    const noChat = false
    if(noChat){
        return (
            <div className='flex items-center justify-center h-full gap-5 flex-col '>
                <img src="https://cdn-icons-png.flaticon.com/512/678/678649.png" className=' max-w-[200px] max-h-[200px]' alt="" />
                <h1 className=' text-[20px] text-[#050505] font-[700]'>No Chat Selected</h1>
            </div>
        )
    }
    return (
        <Chat/>
    )
}

export default page