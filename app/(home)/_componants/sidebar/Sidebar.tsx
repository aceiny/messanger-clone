"use client"
import React from 'react'
import SidebarSection from './SidebarSection'
import { Archive, Carrot, MessageCircle, MessageCircleMore,Sidebar , Store, Users } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import UserProfile from './UserProfile'

const SideBar = () => {
  const sections = [
    {
      name : "Home",
      icon : <MessageCircle size={26}/>,
      onClick : ()=>{console.log('hello world')}
    } ,
    {
      name : "People",
      icon : <Users size={26}/>,
      onClick : ()=>{console.log('hello world')}
    }, 
    {
      name : "Marketplace",
      icon : <Store size={26}/>,
      onClick : ()=>{console.log('hello world')}
    },
    {
      name : "Requests",
      icon : <MessageCircleMore size={26}/>,
      onClick : ()=>{console.log('hello world')}
    },
    {
      name : "Archive",
      icon : <Archive size={26}/>,
      onClick : ()=>{console.log('hello world')}
    }
  ]
  return (
    <div className='w-[60px] border-r border-[#E5E5E5] py-4 h-full flex flex-col justify-between'>
        <div className='flex flex-col justify-center items-center'>
          {
            sections.map((section , index) => (
              <SidebarSection key={index} name={section.name} icon={section.icon} onClick={section.onClick}/>
            ))
          }
        </div>
        <div className='flex flex-col items-center  justify-center gap-3'>
          <UserProfile/>
          <button className=' flex items-center justify-center rounded-full transition bg-[#eeeeee] hover:bg-[#e8e8e8] h-[37px] w-[37px] '>
            <Sidebar/>
          </button>
        </div>
    </div>
  )
}

export default SideBar