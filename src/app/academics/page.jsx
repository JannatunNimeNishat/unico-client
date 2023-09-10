"use client"
import React from 'react';
import Lottie from "lottie-react";
import play_btn from '../../../public/academic/play_btn.json'
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/Button/Button';

const departments = [
    {
        id: 1,
        title: 'Faculty of Electrical and Computer Engineering (FECE)',
        img: 'https://i.ibb.co/Z6j89T0/fece.jpg',
        dept: [
            {
                id: 1,
                dept_name: 'Computer Science and Engineering (CSE)',
                href: '/cse'
            },
            {
                id: 2,
                href: '/ict',
                dept_name: 'Information and Communication Technology (ICT)'
            },
            {
                id: 3,
                href: '/eee',
                dept_name: 'Electrical and Electronic Engineering (EEE)'
            },
        ],

    },
    {
        id: 2,
        title: 'Faculty  Mechanical Engineering (FME)',
        img: 'https://i.ibb.co/ZXm0Htd/me.jpg',
        dept: [
            {
                id: 1,
                href: '/me',
                dept_name: 'Department of Mechanical Engineering (ME)'
            },
            {
                id: 2,
                href: '/ipe',
                dept_name: 'Industrial and Production Engineering (IPE)'
            }
        ],

    },
    {
        id: 3,
        title: 'Department of Civil Engineering (CE)',
        img: 'https://i.ibb.co/KssyxHQ/ce.jpg',
        dept: [
            {
                id: 1,
                href: '/ce',
                dept_name: 'Department of Civil Engineering (CE)'
            }
        ],

    },
    {
        id: 4,
        title: 'Faculty of Business Studies (FBC)',
        img: 'https://i.ibb.co/Ch7SkKg/bba.jpg',
        dept: [
            {
                id: 1,
                href: '/dba',
                dept_name: 'Department of Business Administration (DBA)'
            },
            {
                id: 2,
                href: '/ais',
                dept_name: 'Department of Accounting and Information Systems (AIS)'
            },
            {
                id: 3,
                href: '/mba',
                dept_name: 'Department of Business Administration (MBA)'
            },
        ],

    },
]

const Academics = () => {
    return (
        <div className='pt-[50px] my-container'>
            <div className=''>
                <h3 className='text-5xl font-bold pt-8 text-center'>Academics</h3>
                <div className='h-1 w-[68px] bg-[#ae152d] mt-[20px] mb-[20px] mx-auto' />
                <div className='mt-16 grid grid-cols-3 gap-8   text-center'>
                    <div>
                        <h3 className='text-5xl text-[#ae152d] font-bold'>95</h3>
                        <p className='pt-1'>Student Nationalities</p>
                    </div>
                    <div>
                        <h3 className='text-5xl text-[#ae152d] font-bold'>70 %</h3>
                        <p className='pt-1'>International Students</p>
                    </div>
                    <div>
                        <h3 className='text-5xl text-[#ae152d] font-bold'>12</h3>
                        <p className='pt-1'>Different Majors</p>
                    </div>
                </div>

            </div>

            <div className={`mt-16 bg-[url('/academic/academic_img.jpg')] bg-cover bg-center h-[100vh] flex items-center justify-center`}>

                <Link href='https://www.youtube.com/watch?v=ij8pX9SE9h8&ab_channel=Universit%C3%A9deLausanne'>
                    <Lottie className='mt-12 h-[150px] w-[150px]' animationData={play_btn} loop={true} />
                </Link>
            </div>

            {/* departments */}
            <div className='mt-16'>
                {
                    departments.map((item, index) => <div
                        key={item.id}
                        className={`flex  mb-20 gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
                    >
                        <Image width={675} height={413} src={item.img} alt='' />
                        <div className='w-[575px] shadow-xl border flex flex-col justify-center items-center '>

                            <div className='w-[480px] px-3 h-[360px] border flex flex-col justify-center items-center '>
                                <h1 className='text-3xl font-bold pt-3 text-center'>{item.title}</h1>
                                <div className='h-1 w-[68px] bg-[#ae152d] mt-[20px] mb-[20px] mx-auto' />
                                <ul className=' flex flex-col w-3/4 mx-auto gap-3'>
                                    {
                                        item.dept.map(singleDept => <Link
                                            key={singleDept.id}
                                            href={singleDept.href}
                                            className=' text-start hover:text-[#ae152d] font-semibold'
                                        >{singleDept.id}. {singleDept.dept_name}</Link>)
                                    }
                                </ul>

                            </div>

                        </div>
                    </div>)
                }
            </div>
            {/* learn aboard & career development */}
            <div className='flex gap-8 mt-28'>
                <div className='h-[230px] w-[575px] shadow-xl px-8 py-3 flex flex-col justify-center border'>
                    <div className='flex items-center gap-4'>
                        <Image width={70} height={70} src={'/academic/graduation.png'} alt='' />
                        <div >
                            <h3 className='text-xl mt-5 font-bold'>Learning Abroad</h3>
                            <p className='text-gray-500 py-3'>UniCamp is a global institution, and there are vast opportunities to learn and pursue research.</p>
                        </div>
                    </div>
                    <Link className='ml-20 mt-3' href='/'>
                        <Button btn_text={'Learn more'} isArrowImg={true}></Button>
                    </Link>
                </div>
                <div className='h-[230px] w-[575px] shadow-xl px-8 py-3 flex flex-col justify-center border'>
                    <div className='flex items-center gap-4'>
                        <Image width={70} height={70} src={'/academic/professional_development.png'} alt='' />
                        <div>
                            <h3 className='text-xl font-bold'>Career Development</h3>
                            <p className='text-gray-500 py-3'>We empower you to discover your interests and pursue your passions while studying.</p>
                        </div>
                    </div>
                    <Link className='ml-20 mt-3' href='/'>
                        <Button btn_text={'Learn more'} isArrowImg={true}></Button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Academics;