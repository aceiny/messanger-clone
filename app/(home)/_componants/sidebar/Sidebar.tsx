"use client"
import React from 'react'
import SidebarSection from './SidebarSection'
import { Archive, Carrot, MessageCircle, MessageCircleMore, Store, Users } from 'lucide-react'

const Sidebar = () => {
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
    <div className='w-[60px] border-r border-[#E5E5E5] pt-4 h-full'>
        <div className='flex flex-col justify-center items-center'>
          {
            sections.map((section , index) => (
              <SidebarSection key={index} name={section.name} icon={section.icon} onClick={section.onClick}/>
            ))
          }
        </div>
    </div>
  )
}

export default Sidebar