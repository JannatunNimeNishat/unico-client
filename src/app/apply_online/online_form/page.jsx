"use client"
import React from 'react';
import { useForm } from 'react-hook-form';

const OnlineFormPage = () => {
    const { register, handleSubmit} = useForm()

    const onSubmit = (data) => {
        const applied_student_info = {
            ...data,
            student_type:'admission candidate'
        }
        console.log(applied_student_info);
    }
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
                        <small>Please Note This Mobile Number. This mobile number will be use for admitcard download</small>
                    </div>
                    {/* semester info */}
                    <div className='border flex-1 px-5 py-3 shadow-lg '>
                        <span>Semester: *</span>
                        <input className='px-2 py-2 border w-full mb-3' placeholder='Ex. Winter 2024' type="text" name="semester" id=""
                            {...register("semester", { required: true })}
                        />
                        <span className=''>Program: *</span>
                        <input className='px-2 py-2 border w-full' placeholder='Ex. Engineering / Non Engineering' type="text" name="program" id=""
                            {...register("program", { required: true })}
                        />
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