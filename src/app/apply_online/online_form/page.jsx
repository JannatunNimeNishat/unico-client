"use client"
import useAuth from '@/hooks/useAuth';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';

const OnlineFormPage = () => {
    const { createUser, profileUpdate } = useAuth();

    const { register, handleSubmit } = useForm();
    const { push } = useRouter();


    const onSubmit = (data) => {

        createUser(data.applicant_email, data.mobile_num)
            .then(result => {
                // console.log(result.user);

                profileUpdate({
                    displayName: data.applicant_name,
                    photoURL: data.applicant_photoURL,
                })
                    .then((result) => {
                        // push('/');
                        // console.log(result.user);
                        const applied_student_info = {
                            ...data,
                            student_type: 'admission candidate',
                            role: 'student'
                        }
                        axios.post(`http://localhost:5000/create-user/${data.applicant_email}`, applied_student_info)
                            .then(res => {
                                console.log('new user', res.data);
                                // redirect('/')
                                push('/');
                            })
                    })
                    .then(error => {
                        // console.log(error.message);
                    })
            })

            .catch(error => {
                // console.log(error.message);
            })

        /*  console.log(data.mobile_num, data.applicant_email);
 
         console.log(applied_student_info); */
    }


    const programs = [
        {
            id: 1,
            credit: 160,
            dept_name: 'B.Sc. Engineering in Computer Science and Engineering (CSE)',
        },
        {
            id: 2,
            credit: 161,
            dept_name: 'B.Sc. Engineering in Electrical and Electronic Engineering (EEE)',
        },
        {
            id: 3,
            credit: 160,
            dept_name: 'B.Sc. Engineering in Mechanical Engineering (ME)',
        },
        {
            id: 4,
            credit: 160,
            dept_name: 'B.Sc. Engineering in Industrial and Production Engineering (IPE)',
        },
        {
            id: 5,
            credit: 160,
            dept_name: 'B.Sc. Engineering in Civil Engineering (CE)',
        },
        {
            id: 6,
            credit: 160,
            dept_name: 'B.Sc. Engineering in Information and Communication Technology (ICT)',
        },
        {
            id: 7,
            credit: 132,
            dept_name: 'Bachelor of Business Administration (BBA)',
        },
        {
            id: 8,
            credit: 123,
            dept_name: 'BBA in Accounting & Information Systems (AIS)',
        },
        {
            id: 9,
            credit: 36,
            dept_name: 'MBA Regular (For BBA Graduate)',
        },
        {
            id: 10,
            credit: 48,
            dept_name: 'Executive MBA (EMBA)',
        },
        {
            id: 11,
            credit: 60,
            dept_name: 'MBA (For Other Graduate)',
        },
    ]


    return (
        <div className='mt-10 my-container px-5'>
            <h3 className='text-2xl font-semibold text-center '>Apply Online Form</h3>
            {/* form */}
            <form className='py-10' onSubmit={handleSubmit(onSubmit)}>

                {/* program Information */}
                <h3 className='text-white bg-[#9d2235] px-3 py-1 w-[620px] text-center font-semibold mx-auto '>Program Information</h3>
                <div className='border mt-3 px-5 py-5 flex justify-between gap-10'>
                    {/* personal info */}
                    <div className='border  flex-1 px-5 py-8 shadow-lg '>
                        <span>Mobile: *</span>
                        <input className='px-2 py-2 border w-full' type="number" name="mobile_num" id=""
                            {...register("mobile_num", { required: true })}
                        />
                        <small>Please Note This Mobile Number. This mobile number will be use as password for admitcard download</small>
                    </div>
                    {/* semester info */}
                    <div className='border flex-1 px-5 py-3 shadow-lg '>
                        <span>Semester: *</span>


                        <select className='block px-2 py-2 border w-full mt-1 mb-3' {...register("semester", { required: true })}>
                            <option
                                value={`Winter 2024`}>Winter 2024</option>
                        </select>


                        <span className=''>Program: *</span>

                        <select className='block px-2 py-2 border w-full mt-1' {...register("program", { required: true })}>
                            {
                                programs.map(program => <option
                                    key={program.id}
                                    value={program.dept_name}>{program.dept_name}</option>)
                            }

                        </select>


                    </div>


                </div>



                {/* Applicant Info */}
                <h3 className='text-white bg-[#9d2235] mt-10 px-3 py-1 w-[620px] text-center font-semibold mx-auto '>Applicant Info</h3>
                <div className='border mt-3 px-5 py-5 flex justify-between gap-10'>
                    {/* Applicant personal info */}
                    <div className='border  flex-1 px-5 py-5 shadow-lg '>
                        <span>Name: *</span>
                        <input className='px-2 py-2 border w-full mb-3' type="text" name="applicant_name" id=""
                            {...register("applicant_name", { required: true })}
                        />
                        <span className=''>email: *</span>
                        <input className='px-2 py-2 border w-full mb-3' type="email" name="applicant_email" id=""
                            {...register("applicant_email", { required: true })}
                        />
                        <span className=''>National ID: </span>
                        <input className='px-2 py-2 border w-full mb-3' type="text" name="applicant_nid" id=""
                            {...register("applicant_nid")}
                        />
                        <span className=''>Date of Birth: *</span>
                        <input className='px-2 py-2 border w-full mb-3' type="date" name="applicant_dob" id=""
                            {...register("applicant_dob", { required: true })}
                        />
                        <span className=''>Nationality : *</span>
                        <input className='px-2 py-2 border w-full mb-3' type="text" name="applicant_nationality" id=""
                            {...register("applicant_nationality", { required: true })}
                        />
                        <span className=''>PhotoURL : </span>
                        <input className='px-2 py-2 border w-full mb-3' type="text" name="applicant_photoURL" id=""
                            {...register("applicant_photoURL")}
                        />

                    </div>
                    {/* parents info */}
                    <div className='border flex-1 px-5 py-5 shadow-lg '>
                        {/* Father’s Information: */}
                        <div className='border px-5 py-3 shadow-lg'>
                            <span>Father’s Name : *</span>
                            <input className='px-2 py-2 border w-full mb-3' type="text" name="applicant_father_name" id=""
                                {...register("applicant_father_name", { required: true })}
                            />
                            <span>Father’s Occupation : *</span>
                            <input className='px-2 py-2 border w-full mb-3' type="text" name="applicant_father_occupation " id=""
                                {...register("applicant_father_occupation", { required: true })}
                            />
                            <span>Father’s Mobile No : *</span>
                            <input className='px-2 py-2 border w-full mb-3' type="text" name="applicant_father_mobile_no " id=""
                                {...register("applicant_father_mobile_no", { required: true })}
                            />
                        </div>
                        {/* Mother’s Information: */}
                        <div className='border px-5 py-3 shadow-lg mt-5'>
                            <span>Mother’s Name : *</span>
                            <input className='px-2 py-2 border w-full mb-3' type="text" name="applicant_mother_name" id=""
                                {...register("applicant_mother_name", { required: true })}
                            />
                            <span>Mother’s Occupation : *</span>
                            <input className='px-2 py-2 border w-full mb-3' type="text" name="applicant_mother_occupation " id=""
                                {...register("applicant_mother_occupation", { required: true })}
                            />
                            <span>Mother’s Mobile No : *</span>
                            <input className='px-2 py-2 border w-full mb-3' type="text" name="applicant_mother_mobile_no " id=""
                                {...register("applicant_mother_mobile_no", { required: true })}
                            />
                        </div>

                    </div>
                </div>

                {/* Academic Info  */}
                <h3 className='text-white bg-[#9d2235] mt-10 px-3 py-1 w-[620px] text-center font-semibold mx-auto '>Academic Info</h3>
                <div className='border mt-3 px-5 py-5 flex justify-between gap-10'>
                    {/* SSC info */}
                    <div className='border  flex-1 px-5 py-5 shadow-lg '>
                        <span>SSC School Name : *</span>
                        <input className='px-2 py-2 border w-full mb-3' type="text" name="applicant_ssc_school_name" id=""
                            {...register("applicant_ssc_school_name", { required: true })}
                        />
                        <span className=''>SSC Board : *</span>
                        <input className='px-2 py-2 border w-full mb-3' type="text" name="applicant_ssc_board" id=""
                            {...register("applicant_ssc_board", { required: true })}
                        />
                        <span className=''>SSC Equivalent Roll : </span>
                        <input className='px-2 py-2 border w-full mb-3' type="number" name="applicant_ssc_roll" id=""
                            {...register("applicant_ssc_roll", { required: true })}
                        />
                        <span className=''>SSC Passing Year : *</span>
                        <input className='px-2 py-2 border w-full mb-3' type="number" name="applicant_ssc_passing_year" id=""
                            {...register("applicant_ssc_passing_year", { required: true })}
                        />
                        <span className=''>SCC Equivalent Result : *</span>
                        <input className='px-2 py-2 border w-full mb-3' type="text" name="applicant_ssc_result" id=""
                            {...register("applicant_ssc_result", { required: true })}
                        />

                    </div>
                    {/* HSC info */}
                    <div className='border  flex-1 px-5 py-5 shadow-lg '>
                        <span>HSC College Name : *</span>
                        <input className='px-2 py-2 border w-full mb-3' type="text" name="applicant_hsc_school_name" id=""
                            {...register("applicant_hsc_school_name", { required: true })}
                        />
                        <span className=''>HSC Board : *</span>
                        <input className='px-2 py-2 border w-full mb-3' type="text" name="applicant_hsc_board" id=""
                            {...register("applicant_hsc_board", { required: true })}
                        />
                        <span className=''>HSC Equivalent Roll : </span>
                        <input className='px-2 py-2 border w-full mb-3' type="number" name="applicant_hsc_roll" id=""
                            {...register("applicant_hsc_roll", { required: true })}
                        />
                        <span className=''>HSC Passing Year : *</span>
                        <input className='px-2 py-2 border w-full mb-3' type="number" name="applicant_hsc_passing_year" id=""
                            {...register("applicant_hsc_passing_year", { required: true })}
                        />
                        <span className=''>SCC Equivalent Result : *</span>
                        <input className='px-2 py-2 border w-full mb-3' type="text" name="applicant_hsc_result" id=""
                            {...register("applicant_hsc_result", { required: true })}
                        />

                    </div>

                </div>

                {/* Payment Information  */}
                <h3 className='text-white bg-[#9d2235] mt-10 px-3 py-1 w-[620px] text-center font-semibold mx-auto '>Payment Information</h3>
                <div className='border mt-3 px-5 py-5'>
                    <span>Payment Method : (bKash)  *</span>
                    <input className='px-2 py-2 border w-full my-3' type="text" name="applicant_trx_id" id=""
                        {...register("applicant_trx_id", { required: true })}
                    />
                    <small>Admission Form Fee BDT. 750 with bKash Charge (12) = 762, Transfer to This bKash Number 017000000000 and Put Your TRX ID in the Box.</small>
                </div>
                <small className=''>Your phone number will be your password</small>
                {/* submit */}
                <input className=' cursor-pointer  mx-auto mt-10 bg-[#9d2235]  text-white font-bold px-8 py-3 flex gap-2 items-center justify-center hover:bg-black' type="submit" value="Submit" />
            </form>



        </div>

    );
};

export default OnlineFormPage;