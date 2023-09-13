import React from 'react';
import NoticeComponent from '../NoticeComponent/NoticeComponent';
import Image from 'next/image';
import Link from 'next/link';

const AcademicsComponent = () => {

    const departments = [
        {
            id: 1,
            title: 'Faculty of Electrical and Computer Engineering (FECE)',
            img: 'https://i.ibb.co/Z6j89T0/fece.jpg',
            dept: [
                {
                    id: 1,
                    dept_name: 'Computer Science and Engineering (CSE)',
                    href: 'departments/cse'
                },
                {
                    id: 2,
                    href: 'departments/ict',
                    dept_name: 'Information and Communication Technology (ICT)'
                },
                {
                    id: 3,
                    href: 'departments/eee',
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
                    href: 'departments/me',
                    dept_name: 'Department of Mechanical Engineering (ME)'
                },
                {
                    id: 2,
                    href: 'departments/ipe',
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
                    href: 'departments/ce',
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
                    href: 'departments/dba',
                    dept_name: 'Department of Business Administration (DBA)'
                },
                {
                    id: 2,
                    href: 'departments/ais',
                    dept_name: 'Department of Accounting and Information Systems (AIS)'
                },
                {
                    id: 3,
                    href: 'departments/mba',
                    dept_name: 'Department of Business Administration (MBA)'
                },
            ],

        },
    ]


    return (
        <div className='my-28 my-container grid grid-cols-6 gap-8'>
            <div className='col-span-4  px-5 py-5'>
                <h3 className='text-3xl font-bold'>Academics</h3>
                <div className='h-1 w-[68px] bg-[#ae152d] mt-[15px] mb-[20px] ' />
                <div className='mt-7'>

                    {
                        departments.map((department, index) => <div
                            key={department.id}
                            className='border shadow-xl hover:shadow-2xl flex items-center gap-14 px-8 py-4 my-6'>
                            <Image height={170} width={170} src={department.img} alt='' />
                            <div>
                                <h3 className='font-bold'>{department.title}</h3>
                                <ul className='list-disc px-8 space-y-1 mt-2'>
                                    {
                                        department.dept.map(item => <li
                                            key={item.id}
                                            className='hover:text-[#ae152d] cursor-pointer'>
                                            <Link href={item.href}>{item.dept_name}</Link>
                                        </li>)
                                    }

                                </ul>
                            </div>
                        </div>
                        )
                    }



                    {/* <div className='border shadow-2xl flex items-center justify-evenly py-4'>
                        <Image height={170} width={170} src={'/academic/bba.jpg'} alt='' />
                        <div>
                            <h3 className='font-bold'>FACULTY OF ELECTRICAL AND COMPUTER ENGINEERING (FECE)</h3>
                            <ul className='list-disc px-8 space-y-1 mt-2'>
                                <li className='hover:text-[#ae152d] cursor-pointer'>Computer Science and Engineering</li>
                                <li className='hover:text-[#ae152d] cursor-pointer'>Computer Science and Engineering</li>
                                <li className='hover:text-[#ae152d] cursor-pointer'>Computer Science and Engineering</li>
                                <li className='hover:text-[#ae152d] cursor-pointer'>Computer Science and Engineering</li>
                            </ul>
                        </div>
                    </div>
 */}


                </div>
            </div>
            <div className='col-span-2 px-5 py-5'>
                <NoticeComponent />
            </div>

        </div>
    );
};

export default AcademicsComponent;