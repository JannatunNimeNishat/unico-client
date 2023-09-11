import axios from 'axios';
import React from 'react';

import department from '../../../../public/department/departments.json'
import teachers from '../../../../public/teachers/teachers.json'
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button/Button';

const getData = (value) => {
    // console.log(value);
    /* axios('/department/departments.json')
        .then((response) => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        }) */
    // console.log(teachers.filter(item => item.dept === value.toUpperCase()));
    const slug_dept_info = {};
    slug_dept_info['department_info'] = department.filter(item => item.dept === value.toUpperCase());
    slug_dept_info['teachers_info'] = teachers.filter(item => item.dept === value.toUpperCase());
    // console.log(slug_dept_info);
    return slug_dept_info;

}


const SingleDept = ({ params }) => {
    const data = getData(params.slug)
    const { id, dept_name, dept, goals_and_objectives, mission, dept_head, eligibility_for_admission } = data.department_info[0] || [{}];
    // console.log(data);
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
                {
                    data.teachers_info.map(item => <div
                    key={item.id}
                    className='  shadow-xl border py-4 hover:shadow-2xl '>

                        <figure className='h-[180px] w-[180px] flex items-center justify-center border-4 border-[#ae152d] rounded-full mx-auto '>
                            <Image className='rounded-full h-[150px] w-[150px] hover:h-[170px] hover:w-[170px]  hover:duration-700 mx-auto' height={150} width={150} src={item.img} alt='' />
                        </figure>

                        <div className='text-center mt-4 px-5'>
                            <p className='font-semibold text-xl'>{item.name}</p>
                            <small className='mt-1 block text-gray-500'>{item.designation}</small>
                            <small className='leading-3 text-gray-500'>{item.qualification}</small>

                            <Link className='bg-[#9d2235] w-2/3 mx-auto mt-3  text-white font-bold px-4 py-2 flex gap-2 items-center justify-center hover:bg-black' href={`/teachers/${item.id}`}>
                                view profile
                            </Link>

                        </div>

                    </div>)
                }
              
            </div>
            <div className='mt-10  flex justify-center   text-center'>
                <Button btn_text={'Show All Faculty Members'} />
            </div>


        </div>
    );
};

export default SingleDept;