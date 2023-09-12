import Link from 'next/link';
import React from 'react';


const undergraduatePrograms = [
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
    }
]
const graduatePrograms = [
    {
        id: 1,
        credit: 36,
        dept_name: 'MBA Regular (For BBA Graduate)',
    },
    {
        id: 2,
        credit: 48,
        dept_name: 'Executive MBA (EMBA)',
    },
    {
        id: 3,
        credit: 60,
        dept_name: 'MBA (For Other Graduate)',
    },
]


const program_offeringPage = () => {
    return (
        <div className='px-5 py-5'>
            <h3 className='text-xl font-semibold '>Programs offering</h3>

            {/* <h3 className='font-semibold mt-3'>UNICO is offering the following degrees: </h3> */}

            <p className='mt-10'>Undergraduate Programs:</p>
            <div className="flex flex-col mt-2">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-light">
                                <thead className="border-b font-medium dark:border-neutral-500">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">#</th>
                                        <th scope="col" className="px-6 py-4">Programs</th>
                                        <th scope="col" className="px-6 py-4">Credit</th>
                                        {/* <th scope="col" className="px-6 py-4">Handle</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        undergraduatePrograms.map((item, index) => <tr key={item.id} className="border-b dark:border-neutral-500">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{item.dept_name}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{item.credit}</td>

                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


            <p className='mt-10'>Graduate Programs:</p>
            <div className="flex flex-col mt-2">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-light">
                                <thead className="border-b font-medium dark:border-neutral-500">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">#</th>
                                        <th scope="col" className="px-6 py-4">Programs</th>
                                        <th scope="col" className="px-6 py-4">Credit</th>
                                       
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        graduatePrograms.map((item, index) => <tr key={item.id} className="border-b dark:border-neutral-500">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{item.dept_name}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{item.credit}</td>

                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-8'>
                <p className='font-semibold'>The duration of all the programs is 4 years consisting 8 semesters. The admission process is very competitive. Each Department currently accepts only 100 students* in each semester.</p>
                <p className='mt-4'>Online Application Form is here: <Link href={`#`} className='text-[#9d2235] font-bold'> Apply online</Link></p>                        
            </div>
        </div>
    );
};

export default program_offeringPage;