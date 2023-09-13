"use client"
import React from 'react'
import Button from '../Button/Button'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillFacebook,AiOutlineInstagram, AiOutlineYoutube,AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="mt-28 bg-cover  bg-[url('/footer/footer_bg.jpg')] " >
      <div className=' backdrop-brightness-50 h-full w-full px-16 py-14'>

        <div className=''>
          {/* newslate */}
          <div className='w-full flex flex-col items-center'>
            {/* news late */}
            <div className=' '>
              <h3 className='text-4xl text-white text-center'>Get the latest UniCamp news <br /> delivered to you inbox</h3>
              <div className='flex items-center justify-center mt-6 w-full '>
                <input className='w-[400px] px-3 py-3 bg-gray-800 text-white' type="email" name="email" placeholder='Enter your email' id="" />
                <Button btn_text={'Subscribe'} isArrowImg={true} />
              </div>
            </div>
            <div className='h-[1px] w-full bg-white mt-12'></div>
          </div>
          {/* footer */}
          <div className='pt-16 flex justify-between'>
            {/* 1st */}
            <div className='text-white'>
              <div className='flex items-center gap-3'>
                <Image width={70} height={70} src={'/navbar/unico_logo.png'} alt='' />
                <div>
                  <h3 className='text-xl font-bold text-white'>UNICO</h3>
                  <p className='text-white'>Since 1980</p>
                </div>
              </div>
              <p className='mt-4'>UniCamp transforms lives through accessible, student-centered, high- <br /> quality education and meets learners’ needs for a lifetime.</p>
              <p className='pt-10'>© 2021 UNICO. All Rights Reserved</p>
            </div>
            {/* 2nd */}
            <div className='space-y-3 text-white '>
              <p  className='font-bold text-xl'>About</p>
              <Link className='block' href={`#`} >About Us</Link>
              <Link className='block' href={`#`} >Courses</Link>
              <Link className='block' href={`#`} >News</Link>
              <Link className='block' href={`#`} >Events</Link>
              <Link className='block' href={`#`} >Contact</Link>
            </div>
            {/* 3rd */}
            <div className='space-y-3 text-white '>
              <p  className='font-bold text-xl'>Links</p>
              <Link className='block' href={`#`} >Students</Link>
              <Link className='block' href={`#`} >Faculty & Staffs</Link>
              <Link className='block' href={`#`} >Alumni</Link>
              <Link className='block' href={`#`} >Visit</Link>
              <Link className='block' href={`#`} >Media Relations</Link>
            </div>
            {/* 4th */}
            <div className='text-white'>
            <p  className='text-xl font-bold'>Contact Us</p>
            <div className='mt-5 flex gap-3'>
            <AiOutlineTwitter className='h-7 w-7'/>
            <AiFillFacebook className='h-7 w-7'/>
            <AiOutlineInstagram className='h-7 w-7'/>
            <AiOutlineYoutube className='h-7 w-7'/>
            </div>
            </div>
          </div>
          
        </div>

      </div>

    </div>
  )
}

export default Footer