import React from 'react'
interface UserCardProps {
    image: string,
    name: string
}
const UserCard = ({image , name} : UserCardProps) => {
  return (
    <div className={'cursor-pointer  rounded-lg gap-[11px]  p-[4px] transition flex items-center hover:bg-[#f5f5f5]'}>
            <img src={image} alt="image" className='w-[35px] object-cover  h-[35px] rounded-full ' />
            <div className=' flex flex-col justify-center '>
                <h2 className='font-bold text-[#050505] text-base'>{name}</h2>
            </div>
    </div>
  )
}

export default UserCard