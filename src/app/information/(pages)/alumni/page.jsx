"use client"
import Button from '@/components/Button/Button';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { format } from 'date-fns';
import newsAndBlogs from '../../../../../public/news_and_blogs/news_and_blogs.json';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import Swiper core and required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const AlumniPage = () => {

    const [alumniNews, setAlumniNews] = useState(newsAndBlogs?.filter(item => item.category === 'ALUMNI'));
    console.log(alumniNews);
    return (
        <div>
            {/* banner     */}
            <div className="bg-[url('/alumni/alumni_img.jpg')] h-[40vh] bg-cover bg-center">
                <div className='backdrop-brightness-50 w-full h-full flex flex-col  px-8 justify-center'>
                    <h3 className='text-5xl font-bold text-white '>Alumni</h3>
                    <div className='h-1 w-[150px]  bg-[#ae152d] mt-[12px] mb-[20px] ' />
                </div>
            </div>
            {/* Alumni Stories */}
            <div className='flex gap-5 items-center mt-28'>
                <div className='flex-1 pl-20 '>
                    <h3 className='text-4xl font-bold '>Alumni Stories</h3>
                    <p className='text-justify mt-[45px] text-gray-500 leading-8 text-[20px] mb-[50px]'>The UniCamp community is a widespread <br /> network made up of 5 schools and over <br /> 60,000 alumni in more than 140 countries <br /> worldwide. <br /> <br />
                        This is where you can tell us what you want <br /> to hear about from your college, <br /> department. we want you to know that <br /> UniCamp alumni community is here to <br /> support you.</p>

                    <Link href='/'>
                        <Button btn_text={'Read more'} btn_width={'200px'} isArrowImg={true} />
                    </Link>
                </div>

                <div className='flex-1 '>
                    <Image width={800} height={300} className='w-[700px] h-[600px]' src='/alumni/alumni_story_1.jpg' alt='' />
                </div>
            </div>

            {/* alumni news */}
            <div  >
                <div className='my-container px-5 lg:px-0 mt-20'>

                    <h3 className='text-center text-3xl font-bold'>Alumni News</h3>
                    <div className='h-1 w-[150px] mx-auto  bg-[#ae152d] mt-[12px] mb-[20px] ' />
                    <h3 className='text-center text-xl lg:mt-5 mb-3 lg:mb-10 text-gray-500'>What's happening in UniCamp</h3>

                    {/* slider cards */}
                    <div className='py-3 '>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={10}

                            pagination={{
                                clickable: true
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 30
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 40
                                }
                            }}
                            autoplay={{
                                delay: 4000,
                            }}
                            modules={[Pagination, Autoplay]}
                            className="mySwiper"
                        >

                            {
                                alumniNews?.map(alumniNew => (
                                    <SwiperSlide key={alumniNew._id}>
                                        <Link href={'#'}>
                                            <figure className='rounded-lg  '>

                                                <Image className='h-[192px] w-[293px] hover:px-2 hover:py-2  ease-in duration-150'
                                                    width={293} height={192} src={alumniNew.post_img} alt=''></Image>
                                            </figure>
                                            {/* body */}
                                            <div className='py-8'>
                                                <div className='flex gap-5 items-center '>
                                                    <div className='h-[2px] w-[35px] bg-black text-black'></div>
                                                    <div className='flex gap-3'>
                                                        <p className='uppercase'>{alumniNew.category}</p>
                                                        <p className='uppercase'>{alumniNew.type}</p>
                                                    </div>
                                                    <p className='text-slate-400'>{alumniNew.date}</p>
                                                </div>
                                                <h3 className='text-2xl font-semibold pt-4 pl-12 hover:text-[#ae152d]'>{alumniNew.post_title}</h3>
                                            </div>
                                        </Link>
                                    </SwiperSlide>

                                ))
                            }

                        </Swiper>
                        <div className='w-full flex justify-center mt-8'>
                            <Link href={'#'}>
                                <Button btn_text={'View all news'} isArrowImg={true} />
                            </Link>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default AlumniPage;