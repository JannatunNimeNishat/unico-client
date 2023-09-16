"use client"
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';



// import required modules
import { EffectFade, Autoplay } from 'swiper/modules';


const VisitPage = () => {
    return (
        <div>
            {/*  */}
            <>
                <Swiper
                    spaceBetween={30}
                    effect={'fade'}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 3000,
                    }}
                    modules={[EffectFade,Autoplay]}
                    className="mySwiper"
                >


                    <SwiperSlide >
                        <div className='h-[100vh] w-[full]'>
                        <Image className='' layout='fill' alt='' src="https://images.unsplash.com/photo-1576495199011-eb94736d05d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80" />

                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='h-[100vh] w-[full]'>
                        <Image className='' layout='fill' alt='' src="https://images.unsplash.com/photo-1577985043696-8bd54d9f093f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />

                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='h-[100vh] w-[full]'>
                        <Image className='' layout='fill' alt='' src="https://images.unsplash.com/photo-1592280771190-3e2e4d571952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" />

                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='h-[100vh] w-[full]'>
                        <Image className='' layout='fill' alt='' src="https://images.unsplash.com/photo-1527891751199-7225231a68dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />

                        </div>
                    </SwiperSlide>


                    
                </Swiper>
            </>
        </div>
    );
};

export default VisitPage;