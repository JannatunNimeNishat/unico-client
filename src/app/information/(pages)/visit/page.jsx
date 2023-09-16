"use client"
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';



// import required modules
import { EffectFade, Autoplay } from 'swiper/modules';
import Button from '@/components/Button/Button';



const VisitPage = () => {
    return (
        <div>
            {/*  */}
            <>
                <Swiper
                    spaceBetween={30}
                    effect={'fade'}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 3000,
                    }}
                    modules={[EffectFade, Autoplay]}
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

            <div className='mt-16 my-container'>
                <h2 className='text-5xl font-bold text-center pt-3 '>A beautiful campus in a <br /> world-class city</h2>

                <div className='h-1 w-[100px] mx-auto   bg-[#ae152d] mt-[35px] mb-[40px] ' />
                <p className='text-center text-gray-500 text-[20px] '>Studying business at UniCamp is a great way to enhance your career. <br /> In today’s competitive environment, professionals need the skills to <br /> adapt to an ever-changing business world.</p>
                {/* card-1 */}
                <div className='flex gap-8 mt-24'>
                    <div className='relative flex items-center justify-center m-3 overflow-hidden shadow-xl h-[372px] w-[570px]'>
                        <div className="bg-[url('/visit/visit1.jpg')] absolute w-full h-full translate-all duration-500 ease-in-out transform bg-center bg-cover hover:scale-150 ">

                        </div>
                        {/*  <div className=" bg-[url('/visit/visit1.jpg')] translate-all hover:scale-150 ease-in-out duration-300 bg-cover bg-center">

                        </div> */}
                    </div>
                    {/* <figure className='flex-1 h-[372px] w-[570px]'>
                        <Image className='' height={372} width={570} src={'/visit/visit1.jpg'} alt=''></Image>
                    </figure> */}
                    <div className='space-y-8 flex-1  flex flex-col justify-center items-start'>
                        <h2 className='text-4xl font-bold pt-3 '>Guided Walking Tours</h2>
                        <p className='text-justify text-gray-500 pr-5 pb-3'>Here you will find information on opening times and admission charges, where these apply, for the colleges and private halls of UniCamp. Each of the University’s schools and divisions has its own unique stories and special resources to share.</p>

                        <Button btn_text={'Learn more'} />
                    </div>
                </div>

                {/* card-2 */}
                <div className='flex flex-row-reverse gap-8 mt-24'>
                    <div className=" relative flex items-center justify-center m-3 overflow-hidden shadow-xl h-[372px] w-[570px] ">
                        <div className="bg-[url('/visit/visit1.jpg')] absolute w-full h-full translate-all duration-500 ease-in-out transform bg-center bg-cover hover:scale-150 ">

                        </div>

                    </div>

                    <div className='space-y-8 flex-1  flex flex-col justify-center items-start'>
                        <h2 className='text-4xl font-bold pt-3 '>Explore from Home</h2>
                        <p className='text-justify text-gray-500 pr-5 pb-3'>To virtually explore many of the University’s schools resources, and facilities, you may want to start with a digital overview, watch online virtual tours that fit your interests, or explore some of our local attractions.</p>

                        <Button btn_text={'Take virtual tours'} />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default VisitPage;