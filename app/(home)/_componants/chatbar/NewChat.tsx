import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog'
import { API_URL } from '@/configs'
import { useUserStore } from '@/store/User_store'
import axios from 'axios'
import { SquarePen } from 'lucide-react'
import React, { useRef, useState } from 'react'
import UsersContainer from './Users'
import { useChatStore } from '@/store/Chat_store'

const NewChat = () => {
    const userInput = useRef(null)
    const addChat = useChatStore(state => state.addChat)
    const Users = useUserStore(state => state.Users)
    const setUsers = useUserStore(state => state.setUsers)
    const [choosedUser, setChoosedUser] = useState([]) as any
    const [groupName, setGroupName] = useState('') as any
    const ChooseUser = (user : any) => {
        console.log(user)
        setChoosedUser([...choosedUser,user])
    }
    const GetUsers = async (e : any) => {
        await axios.get(`${API_URL}/auth?search=${e.target.value}`)
        .then(res =>{
            setUsers(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }
    const CreateChat = async (e : any) => {
        e.preventDefault()
        const dataObj = {
            Participants : choosedUser.map((user : any) => user._id),
            IsGroup : choosedUser.length > 1 ? true : false,
            Name : choosedUser.length > 1 ? groupName : choosedUser[0].Name,
            ImageUrl : choosedUser[0].ImageUrl
        }
        await axios.post(`${API_URL}/chat`, dataObj , {headers : {Authorization : `Bearer ${localStorage.getItem('token')}`}})
        .then(res =>{
            console.log(res.data)
            addChat(res.data)
        })
        .catch(err =>{
            console.log(err.response)
            if(err.response.status === 400) {
                alert(err.response.data.message[0])
            }
        })
    }
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
                <form action="" className='flex flex-col gap-3' onSubmit={CreateChat}>
                    <input type="text" placeholder='user' onChange={GetUsers} ref={userInput} className=' input-auth' />
                    <UsersContainer UserInput={userInput} Choosed={choosedUser} ChooseUser={ChooseUser}/>
                    <div className='flex items-center justify-start flex-wrap gap-3'>
                        {
                            choosedUser && choosedUser.map((user : any) => (
                                <div key={user._id} className='flex flex-col border rounded hover:bg-[#f0f0f0] p-3 items-center gap-1'>
                                    <img src={user.ImageUrl} alt="image" className='w-[25px] object-cover  h-[25px] rounded-full ' />
                                    <h2 className='font-bold text-[#050505] text-[14px]'>{user.Name}</h2>
                                </div>
                            ))
                        }
                    </div>
                    {choosedUser && choosedUser.length > 1 && <input type="text" placeholder='group name' onChange={(e)=>setGroupName(e.target.value)} className='input-auth' />}
                    <input type="submit" value={'send'} className='w-full bg-black text-white py-3 cursor-pointer opacity-100 hover:opacity-80 rounded' />
                </form>
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default NewChat