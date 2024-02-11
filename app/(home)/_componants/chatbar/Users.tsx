"use client"
import { User } from 'lucide-react'
import React from 'react'
import UserCard from './UserCard'
import { useUserStore } from '@/store/User_store'
import { cn } from '@/lib/utils'
import { useAuthStore } from '@/store/Auth_store'

const UsersContainer = ({ UserInput , Choosed , ChooseUser} : {UserInput : any , Choosed : any , ChooseUser : any} ) => {
    const loggedUser = useAuthStore(state => state.user)
    const users = useUserStore(state => state.Users)
    const setUsers = useUserStore(state => state.setUsers)
    const ClickHandler = (user : any) => {
        ChooseUser(user)
        UserInput.current.value = ''
        setUsers(null)
    }
  return (
    <div className={cn(' p-3 border absolute w-[90%] max-h-[50%] overflow-y-auto bg-white top-[120px] rounded-b-md left-[50%] translate-x-[-50%] origin-bottom' , users && users.length > 1 ? " scale-1" : " scale-0 ")}>
        {
            loggedUser && users && users.map((user : any) => {
                return Choosed.find((userobj : any)=> userobj._id == user._id ) || user._id == loggedUser._id  ? null : <div onClick={()=>ClickHandler(user)}><UserCard key={user._id} image={user.ImageUrl} name={user.Name} /></div>
                })
        }
    </div>
  )
}

export default UsersContainer