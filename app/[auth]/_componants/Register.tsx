"use client"
import React from 'react'
import axios from 'axios'
import { Dialog, DialogContent, DialogTrigger, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { API_URL } from '@/configs';
import { Clock7Icon } from 'lucide-react';
import { useAuthStore } from '@/store/Auth_store';
const Register = () => {
    const setAuth = useAuthStore(state => state.setAuth)
    const handleRegister = async (e : any) => {
        e.preventDefault()
        if(!e.target.fullname.value || !e.target.username.value || !e.target.password.value) return alert('All fields are required')
        const dataObj = {
            Name: e.target.fullname.value,
            Username: e.target.username.value,
            Password: e.target.password.value
        }
        await axios.post(API_URL+"/auth/signup", dataObj)
        .then(res =>{
            localStorage.setItem('token', res.data.Token)
            setAuth(true)
        })
        .catch(err =>{
            console.log(err.response)
            if(err.response.status === 400) {
                alert(err.response.data.message[0])
            }
            else if(err.response.status === 409) {
                alert(err.response.data.message)
            }
            else if(err.response.status === 500) {
                alert('Server Error')
            }
        })
    }
  return (
    <Dialog>
        <DialogTrigger asChild>
            <button className="button-auth">Register</button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Register</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleRegister} className=' flex gap-3 flex-col items-center '>
                <input type="text" name='fullname' placeholder='fullname' className='input-auth' />
                <input type="text" name='username' placeholder="Username" className="input-auth" />
                <input type="password" name='password' placeholder="Password" className="input-auth" />
                <input type='submit' value="Register" className='button-auth'/>
            </form>
        </DialogContent>
    </Dialog>
  )
}

export default Register