import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger , DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from '@/components/ui/dropdown-menu'
import React from 'react'

const UserProfile = () => {
  return (
    <DropdownMenu>
    <DropdownMenuTrigger>
    <div className=' rounded-full flex justify-center bg-transparent items-center hover:bg-[#e8e8e8] transition  h-[37px] w-[37px] '>
        <img src="" alt="profile image" className=' bg-red-200 rounded-full w-[34px] h-[34px] ' />
      </div>
    </DropdownMenuTrigger>
    <DropdownMenuContent className='ml-6 min-w-[300px]'>
        <DropdownMenuSeparator />
        <a href="https://github.com/aceiny/messanger-clone"><DropdownMenuItem>Star this Repo</DropdownMenuItem></a>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Checkout my Github</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Log out</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  )
}

export default UserProfile