import Link from 'next/link';
import React from 'react';

const AdmissionRequirmentPage = () => {
    return (
        <div className='px-5 py-5'>
            <h3 className='text-2xl font-semibold '>Programs offering</h3>

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

                <p className='mt-4'>Online Application Form is here: <Link href={`#`} className='text-[#9d2235] font-bold'> Apply online</Link></p>

            </div>
        </div>
    );
};

export default AdmissionRequirmentPage;