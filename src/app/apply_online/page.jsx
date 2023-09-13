import Button from '@/components/Button/Button';
import Link from 'next/link';
import React from 'react';

const ApplyOnlinePage = () => {
    return (
        <div className='mt-10 my-container px-5'>
            <h3 className='text-2xl font-semibold '>Apply Online</h3>

            <div className='mt-8'>
                <h3 className='text-xl font-semibold '>Engineering Programs- (CSE, EEE, ME, IPE, CE and ICT):</h3>
                <p className='text-gray-500 mt-2'>
                    Applicants who have passed HSC/ Alim or equivalent or A level or equivalent examinations are eligible to apply, if he/she fulfills the following conditions:
                </p>
                <ul className='list-disc px-5 text-gray-500 py-3 text-[15px]'>
                    <li>HSC/ Alim or equivalent examination in Science Group with Mathematics, Physics and Chemistry with minimum GPA 3.0 (with additional subject). The total GPA of SSC/Dakhil or equivalent and HSC/ Alim or equivalent should be at least7.0 (with additional subjects).</li>
                    <li className='py-3'>GCE applicants at A-Level with Physics, Mathematics, Chemistry and Functional English must have GPA 3.0. The total GPA of GCE O-Level and A-Level should beat least 7.0. However, the candidate must not have any F grade in any subject of the both levels.</li>
                </ul>

                <h3 className='text-xl font-semibold '>Non Engineering Programs- BBA, BBA in AIS:</h3>
                <p className='text-gray-500 mt-2'>
                    Applicants who have passed HSC/ Alim or equivalent or A level or equivalent examinations are eligible to apply, if he/she fulfills the following conditions:
                </p>
                <ul className='list-disc px-5 text-gray-500 py-3 text-[15px]'>
                    <li>HSC/ Alim or equivalent examination with minimum GPA of 3.0 (with additional subject). The total GPA of HSC/Alim or equivalent and SSC/ Dakhil or equivalent should be at least 6.0 (with additional subjects).</li>
                    <li className='py-3'>GCE O/A Level Examination: At least GPA 3.0 in both GCE O-Level and GCE A-Level. The total GPA in GCE A-Level and O-Level should be at least 6.0.The candidate must not have any F grade in any subject of the both levels.</li>
                </ul>


                <h3 className='text-xl font-semibold mt-3 '>At the time of admission the candidate must submit the following documents:</h3>

                <ol className='list-decimal text-gray-500 px-4 space-y-2 mb-5'>
                    <li className='mt-3'>Admit card of the admission test </li>
                    <li>Original copies of SSC Academic Transcript, Certificate and Testimonial</li>
                    <li>Original copies of HSC Academic Transcript, Certificate and Testimonial</li>
                    <li>Photocopies of SSC & HSC Academic Transcript 5. 8 copies of passport size photograph</li>
                    <li>Following medical reports from any reputed hospital/clinic /diagnostic center:   a) Blood group    b) Blood for CBC   c) HBs. Ag   d) Urine R/E</li>
                    <li>A copy of Guardians’ PP size photo</li>
                    <li> A copy of Guardian’s NID</li>
                    <li>A copy  of Student’s Birth Certificate and NID</li>
                    <li>If original certificate of HSC is not available, the provisional certificate/testimonial from the head of the institution must be shown.</li>
                </ol>


                {/* <Link href={`#`} className='bg-[#9d2235] text-white font-bold px-5 py-3 mt-10'>I Agree and Apply Now</Link> */}
                <div className='w-1/2 mx-auto '>
                    <Link href={`#`} className='border  mx-auto'>

                        <Button btn_text={'I Agree and Apply Now'} />
                    </Link>

                </div>

            </div>
        </div>
    );
};

export default ApplyOnlinePage;