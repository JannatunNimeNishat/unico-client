"use client"
import React from 'react'



import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import Swiper core and required modules
import { Navigation, Autoplay } from 'swiper/modules';


import Button from '../Button/Button';



const Banner = () => {
    return (
        <div>
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={
                    {
                        delay: 3000
                    }
                }
                loop={true}
                navigation={true}

            >
                <SwiperSlide>

                    <div className="h-[88vh]  bg-cover bg-center bg-[url('/banner/img_1.jpg')] " >
                        <div className='absolute top-0 bottom-0 w-[800px]  flex items-center  bg-gradient-to-r from-black to-[rgba(21, 21, 21, 1)] '>

                            <div className=' pl-5 lg:pl-20 text-white  mt-3'>
                                <h3 className=' text-xl lg:text-6xl font-bold '>Discover the world of <br /> possibility with Unico.</h3>
                                <p className='mt-1 lg:mt-6 mb-6 uppercase'>fall 2023 applications are now open</p>

                                <Link href='/'>
                                    <Button btn_text={'Admissions'} btn_width={'163px'} />
                                </Link>

                            </div>

                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>

                    <div className={`h-[88vh]  bg-cover bg-center bg-[url('/banner/img_2.jpg')] `}>
                        <div className='absolute top-0 bottom-0 w-[800px]  flex items-center  bg-gradient-to-r from-black to-[rgba(21, 21, 21, 1)] '>


                            <div className=' pl-5 lg:pl-20 text-white  mt-3'>
                                <h3 className=' text-xl lg:text-6xl font-bold '>Discover the world of <br /> possibility with Unico.</h3>
                                <p className='mt-1 lg:mt-6 mb-6 uppercase'>fall 2023 applications are now open</p>

                                <Link href='/'>
                                    <Button btn_text={'Admissions'} btn_width={'163px'} />
                                </Link>

                            </div>


                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className={`h-[88vh]  bg-cover bg-center bg-[url('/banner/img_3.jpg')]`} >
                        <div className='absolute top-0 bottom-0 w-[800px]  flex items-center  bg-gradient-to-r from-black to-[rgba(21, 21, 21, 1)] '>


                            <div className=' pl-5 lg:pl-20 text-white  mt-3'>
                                <h3 className=' text-xl lg:text-6xl font-bold '>Discover the world of <br /> possibility with Unico.</h3>
                                <p className='mt-1 lg:mt-6 mb-6 uppercase'>fall 2023 applications are now open</p>

                                <Link href='/'>
                                    <Button btn_text={'Admissions'} btn_width={'163px'} />
                                </Link>

                            </div>

                        </div>
                    </div>
                </SwiperSlide>




            </Swiper>


        </div>
    )
}

export default Banner