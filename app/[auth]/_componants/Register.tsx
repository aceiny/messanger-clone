"use client"
import React from 'react'
import { Dialog, DialogContent, DialogTrigger, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
const Register = () => {
    const handleRegister = (e : any) => {
        console.log(e.target.username.value)
        console.log("register handler")
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
                <input type="text" name='username' placeholder="Username" className="input-auth" />
                <input type="password" name='password' placeholder="Password" className="input-auth" />
                <input type='submit' value="Register" className='button-auth'/>
            </form>
        </DialogContent>
    </Dialog>
  )
}

export default Register