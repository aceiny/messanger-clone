import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog'
import { SquarePen } from 'lucide-react'
import React from 'react'

const NewChat = () => {
  return (
    <div>
        <Dialog>
            <DialogTrigger asChild>
                <button className=' flex items-center justify-center rounded-full transition bg-[#eeeeee] hover:bg-[#e8e8e8] h-[37px] w-[37px] '>
                    <SquarePen/>                
                </button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <h1>New Chat</h1>
                    <DialogClose />
                </DialogHeader>
                <input type="text" placeholder='auth-input' className='auth-input' />
                <input type="text" placeholder='message'/>
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default NewChat