"use client"
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { BarChart } from 'lucide-react'
import React from 'react'

const SidebarSection = ({name , icon , onClick} : any) => {
    const isActive = false
  return (
    <button
    data-content={name}
    onClick={onClick}
    className={cn('hover:bg-[#eeeeee] relative SidebarSection transition p-3 rounded-lg text-center' , isActive ? 'bg-[#eeeeee]' : 'bg-white')}
    >
        {icon}
    </button>
  )
}

export default SidebarSection