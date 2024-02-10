"use client"
import React from 'react'
import { Dialog, DialogContent, DialogTrigger, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
const Login = () => {
    const handleLogin = (e : any) => {
        console.log(e.target.username.value)
        console.log("login handler")
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