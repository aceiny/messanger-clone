"use client"
import React from 'react'
import { Dialog, DialogContent, DialogTrigger, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { API_URL } from '@/configs';
import { useAuthStore } from '@/store/Auth_store';
const Login = () => {
    const setAuth = useAuthStore(state => state.setAuth)
    const handleLogin = async(e : any) => {
        e.preventDefault()
        if(!e.target.username.value || !e.target.password.value) return alert('All fields are required')
        const dataObj = {
            Username: e.target.username.value,
            Password: e.target.password.value
        }
        await axios.post(API_URL+"/auth/login", dataObj)
        .then(res =>{
            localStorage.setItem('token', res.data.Token)
            setAuth(true)
        })
        .catch(err =>{
            console.log(err.response)
            if(err.response.status === 400) {
                alert(err.response.data.message[0])
            }
            else if(err.response.status === 401) {
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
            <button className="button-auth">Login</button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Login</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleLogin} className=' flex gap-3 flex-col items-center '>
                <input type="text" name='username' placeholder="Username" className="input-auth" />
                <input type="password" name='password' placeholder="Password" className="input-auth" />
                <input type='submit' value="Login" className='button-auth'/>
            </form>
        </DialogContent>
    </Dialog>
  )
}

export default Login