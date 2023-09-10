import axios from 'axios';
import React from 'react';

import department from '../../../../public/department/departments.json'
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button/Button';

const getData = (value) => {
    console.log(value);
    /* axios('/department/departments.json')
        .then((response) => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        }) */

    return department.filter(item => item.dept === value.toUpperCase());

}


const SingleDept = ({ params }) => {
    const data = getData(params.slug)
    const { id, dept_name, dept, goals_and_objectives, mission, dept_head, eligibility_for_admission } = data[0] || [{}];
    // console.log(dept_name);
    return (
        <div className='mt-10 my-container px-5'>
            <h3 className='text-4xl font-bold py-4'>{dept_name}</h3>
            <h3 className='text-2xl font-semibold text-[#ae152d] mt-14'>Goals and Objectives</h3>
            <p className='text-gray-500 pt-3 text-justify'>{goals_and_objectives}</p>
            {/* mission */}
            <h3 className='text-2xl font-semibold text-[#ae152d] mt-10'>Mission</h3>
            <p className='text-gray-500 pt-3 text-justify'>{mission}</p>
            {/* Eligibility for Admission */}
            <h3 className='text-2xl font-semibold text-[#ae152d] mt-10'>Eligibility for Admission</h3>
            <p className='text-gray-500 pt-3 text-justify'>{eligibility_for_admission}</p>

            {/* FACULTY MEMBERS */}
            <h3 className='text-2xl text-[#ae152d] mt-14 font-semibold'>FACULTY MEMBERS</h3>
            <div className='mt-5 grid grid-cols-4 gap-5'>
                {/* 1st */}
                <div className='  shadow-xl border py-4 hover:shadow-2xl '>

                    <figure className='h-[180px] w-[180px] flex items-center justify-center border-4 border-[#ae152d] rounded-full mx-auto '>
                        <Image className='rounded-full h-[150px] w-[150px] hover:h-[170px] hover:w-[170px]  hover:duration-700 mx-auto' height={150} width={150} src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' alt='' />
                    </figure>

                    <div className='text-center mt-4 px-5'>
                        <p className='font-semibold text-xl'>{dept_head}</p>
                        <small className='mt-1 block'>Assistant professor</small>
                        <small className='leading-3'>Ph.D. (Pursuing ) in CSE, RUET, M.Sc. (Thesis) in CSE & B.Sc. Engg. in CSE, SUST.</small>

                        <Link className='bg-[#9d2235] w-2/3 mx-auto mt-3  text-white font-bold px-4 py-2 flex gap-2 items-center justify-center hover:bg-black' href={`/teachers/${1}`}>
                            view profile
                        </Link>

                    </div>

                </div>
                {/* 2nd */}
                <div className='  shadow-xl border py-4 px-5'>

                    <figure className='h-[180px] w-[180px] flex items-center justify-center border-4 border-[#ae152d] rounded-full mx-auto '>
                        <Image className='rounded-full h-[150px] w-[150px] hover:h-[170px] hover:w-[170px]  hover:duration-700 mx-auto' height={150} width={150} src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' alt='' />
                    </figure>

                    <div className='text-center mt-4'>
                        <p className='font-semibold text-xl'>{dept_head}</p>
                        <small className='mt-1 block'>Assistant professor</small>
                        <small className='leading-3'>Ph.D. (Pursuing ) in CSE, RUET, M.Sc. (Thesis) in CSE & B.Sc. Engg. in CSE, SUST.</small>

                        <Link className='bg-[#9d2235] w-2/3 mx-auto mt-3  text-white font-bold px-4 py-2 flex gap-2 items-center justify-center hover:bg-black' href={`/teachers/${1}`}>
                            view profile
                        </Link>

                    </div>

                </div>
                {/* 3rd */}
                <div className='  shadow-xl border py-4'>

                    <figure className='h-[180px] w-[180px] flex items-center justify-center border-4 border-[#ae152d] rounded-full mx-auto '>
                        <Image className='rounded-full h-[150px] w-[150px] hover:h-[170px] hover:w-[170px]  hover:duration-700 mx-auto' height={150} width={150} src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' alt='' />
                    </figure>

                    <div className='text-center mt-4 px-5'>
                        <p className='font-semibold text-xl'>{dept_head}</p>
                        <small className='mt-1 block'>Assistant professor</small>
                        <small className='leading-3'>Ph.D. (Pursuing ) in CSE, RUET, M.Sc. (Thesis) in CSE & B.Sc. Engg. in CSE, SUST.</small>

                        <Link className='bg-[#9d2235] w-2/3 mx-auto mt-3  text-white font-bold px-4 py-2 flex gap-2 items-center justify-center hover:bg-black' href={`/teachers/${1}`}>
                            view profile
                        </Link>

                    </div>

                </div>

                {/* 4th */}
                <div className='w-[260px]  shadow-xl border py-4'>

                    <figure className='h-[180px] w-[180px] flex items-center justify-center border-4 border-[#ae152d] rounded-full mx-auto '>
                        <Image className='rounded-full h-[150px] w-[150px] hover:h-[170px] hover:w-[170px]  hover:duration-700 mx-auto' height={150} width={150} src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' alt='' />
                    </figure>

                    <div className='text-center mt-4 px-5'>
                        <p className='font-semibold text-xl'>{dept_head}</p>
                        <small className='mt-1 block'>Assistant professor</small>
                        <small className='leading-3'>Ph.D. (Pursuing ) in CSE, RUET, M.Sc. (Thesis) in CSE & B.Sc. Engg. in CSE, SUST.</small>

                        <Link className='bg-[#9d2235] w-2/3 mx-auto mt-3  text-white font-bold px-4 py-2 flex gap-2 items-center justify-center hover:bg-black' href={`/teachers/${1}`}>
                            view profile
                        </Link>

                    </div>

                </div>
            </div>
            <div className='mt-10  flex justify-center   text-center'>
                <Button btn_text={'Show All Faculty Members'} />
            </div>
        </div>
    );
};

export default SingleDept;