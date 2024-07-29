import React from 'react'
import Logo from "../assets/one-life-logo-white.png"

const Footer = () => {
  return (
    <div className='bg-[#1E424A] px-16 py-11 flex text-white justify-between'>
        <img src={Logo} alt="" />
        <div>
            <a href="" className='list-item text-xl'>Home</a>
            <a href="" className='list-item text-xl'>About us</a>
            <a href="" className='list-item text-xl'>Privacy</a>
        </div>
        <div>
            <a href="" className='list-item text-xl'>Careers</a>
            <a href="" className='list-item text-xl'>Refund Policy</a>
            <a href="" className='list-item text-xl'>Contact us</a>
        </div>
        <div className='max-w-[220px] text-xl'>
            <p>@FlyFare Technologies LLP 2024</p>
            <p>All Rights Reserved</p>
        </div>
        

    </div>
  )
}

export default Footer