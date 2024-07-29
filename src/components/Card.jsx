import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import profile from "../assets/profile.jpg"

const Card = () => {
  return (
    <div className='w-[665px] px-5 py-4 text-white border border-white rounded-xl'>
        <div className='flex justify-between'>
        <div className='w-[473px] h-122px'>
        <h1 className='text-xl font-bold'>Trapped by Tradition: A struggle between family duty and personal despair</h1>
        <p className='pt-2 py-8 font-medium'>Hi, I’m a 32 year old man. I belong from a very lower middle class family but I was very good in studies, so I started living outside home in metro....</p>
        </div>
        <div> <img className='w-[64px] h-[64px] rounded-full ' src={profile} alt="" /></div>
        </div>
  <div className='flex justify-between '>
  <div className=' container flex gap-10  max-w-[530px]'>
     <div className='likebutton items-center gap-4 px-4 py-2 border border-white inline-flex rounded-lg'>
            <FaRegHeart className='text-lg'  />
            <span>12</span>
        </div>
        <div className='commentbutton items-center gap-4 px-4 py-2 border border-white inline-flex rounded-lg'>
            <FaRegComment  className='text-lg'/>
            <span>1</span>
        </div>
        <div className='viewsbutton items-center gap-4 px-4 py-2 border border-white inline-flex rounded-lg'>
            <MdOutlineRemoveRedEye  className='text-lg'/>
            <span>20</span>
        </div>
     </div>
     <div className='flex flex-col text-white/60'>
        <span>Posted</span>
        <span>50 days ago</span>
     </div>
  </div>




    </div>
  )
}

export default Card