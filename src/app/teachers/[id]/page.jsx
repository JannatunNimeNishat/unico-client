import React from 'react';

import teachers from '../../../../public/teachers/teachers.json';
import Image from 'next/image';

import { AiOutlineMail } from "react-icons/ai";


const getData = (value) => {

    return teachers.filter(item => item.id === parseInt(value));
}

const SingleTeacher = ({ params }) => {
    const data = getData(params.id);
    console.log(data);
    const { name, img, dept_name, email, designation, qualification, courses, publications } = data[0] || [{}];
    return (
        <div className='mt-10 grid grid-cols-4 my-container gap-5 '>
            {/* 1st */}
            <div className='col-span-1 border px-3 py-5 '>

                <figure>
                    <Image className='mx-auto' height={200} width={200} src={img} alt='' />
                </figure>
                <div className='text-center'>
                    <h3 className='text-xl font-semibold mt-3'>{name}</h3>
                    <p className='text-gray-500 text-[14px] mt-1'>{designation}</p>
                    <p className='text-gray-500 text-[14px]'>{dept_name}</p>
                    <p className='text-gray-500 text-[14px]'>{email}</p>
                </div>
            </div>
            {/* 2nd */}
            <div className='col-span-3 border px-5 py-5'>
                <h3 className='text-xl font-semibold bg-[#ae152d] py-1 px-3 text-white shadow-xl'>Designation</h3>
                <p className='my-4 text-gray-500'>{designation}</p>

                <h3 className='text-xl font-semibold bg-[#ae152d] py-1 px-3 text-white shadow-xl mt-8'>Qualification</h3>
                <p className='my-3 text-gray-500'>{qualification}</p>


                <h3 className='text-xl font-semibold bg-[#ae152d] py-1 px-3 text-white shadow-xl mt-8'>Publications</h3>
                {
                    publications.map((item, index) => <p key={index} className='my-3 text-gray-500'>[{index + 1}] {item.title} {item.year} {item.journal}
                        {
                            item.authors.map((author, index) => <span className='pl-2 text-gray-500' key={index}>{author}</span>)
                        }

                    </p>)
                }

                <h3 className='text-xl font-semibold bg-[#ae152d] py-1 px-3 text-white shadow-xl mt-8'>Courses</h3>
                {
                    courses.map((course, index) => <p key={index} className='mt-3 text-gray-500' >{index + 1}. {course}</p>)
                }
            </div>

        </div>
    );
};

export default SingleTeacher;