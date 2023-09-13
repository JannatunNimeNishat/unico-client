import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const StudentPage = () => {
    return (
        <div>
            {/* banner */}
            <div className="bg-[url('/students/students_bg_img.jpg')] h-[40vh] bg-cover bg-center">
                <div className='backdrop-brightness-50 w-full h-full flex flex-col  px-8 justify-center'>
                    <h3 className='text-5xl font-bold text-white '>Students</h3>
                    <div className='h-1 w-[200px]  bg-[#ae152d] mt-[12px] mb-[20px] ' />
                </div>

            </div>

            <div className='mt-20'>
                <h3 className='text-3xl font-bold text-center w-2/3 mx-auto leading-relaxed'>Resources, offices and services that support UniCamp students</h3>

                {/* academic resources and campus life */}
                <div className='flex gap-8 my-container mt-12'>
                    {/* 1st */}
                    <div className='flex-1'>
                        <Image className='h-[300px] w-[580px]' height={200} width={500} src={'/students/academic_resources.jpg'} alt='' />
                        <div className='mt-8 '>
                            <h3 className='text-3xl font-bold'>Academic Resources</h3>
                            <p className='mt-5  text-gray-500'>All of the information about resources available, and skills development <br /> options to help you while at UNICO.</p>
                            <ul className='list-disc mt-3 px-8 flex gap-24 text-gray-500'>
                                <div>
                                    <li className='py-2 hover:text-[#ae152d]'>
                                        <Link href={`#`}>Academic Calender</Link>
                                    </li>
                                    <li className='py-2 hover:text-[#ae152d]'>
                                        <Link href={`#`}>Exam Schedule</Link>
                                    </li>
                                    <li className='py-2 hover:text-[#ae152d]'>
                                        <Link href={`#`}>Exam Schedule</Link>
                                    </li>
                                    <li className='py-2 hover:text-[#ae152d]'>
                                        <Link href={`#`}>Academic Advising</Link>
                                    </li>
                                    <li className='py-2 hover:text-[#ae152d]'>
                                        <Link href={`#`}>Course Offering</Link>
                                    </li>
                                </div>
                                <div>
                                    <li className='py-2 hover:text-[#ae152d]'>
                                        <Link href={`#`}>Blackboard</Link>
                                    </li>
                                    <li className='py-2 hover:text-[#ae152d]'>
                                        <Link href={`#`}>Library</Link>
                                    </li>
                                    <li className='py-2 hover:text-[#ae152d]'>
                                        <Link href={`#`}>Career Services</Link>
                                    </li>
                                </div>
                            </ul>
                        </div>

                    </div>
                    {/* 2nd */}
                    <div className='flex-1'>
                        <Image className='h-[300px] w-[580px]' height={200} width={500} src={'/students/campus_life.jpg'} alt='' />
                        <div className='mt-8'>
                            <h3 className='text-3xl font-bold'>Campus Life</h3>
                            <p className='mt-5 text-gray-500'>Everything you need to know about term dates, transport, <br /> accommodation, as well as social activities.</p>
                            <ul className='list-disc mt-3 px-8 text-gray-500'>

                                <li className='py-2 hover:text-[#ae152d]'>
                                    <Link href={`#`}>Housing & Dining</Link>
                                </li>
                                <li className='py-2 hover:text-[#ae152d]'>
                                    <Link href={`#`}>Community</Link>
                                </li>
                                <li className='py-2 hover:text-[#ae152d]'>
                                    <Link href={`#`}>Student Group</Link>
                                </li>
                                <li className='py-2 hover:text-[#ae152d]'>
                                    <Link href={`#`}>Getting Around</Link>
                                </li>

                            </ul>
                        </div>

                    </div>

                </div>

                {/* Health & Well-Being and Financials */}
                <div className='flex gap-8 my-container mt-12'>
                    {/* 1st */}
                    <div className='flex-1'>
                        <Image className='h-[300px] w-[580px]' height={200} width={500} src={'/students/Health_&_Well_Being.jpg'} alt='' />
                        <div className='mt-8 '>
                            <h3 className='text-3xl font-bold'>Health & Well-Being</h3>
                            <p className='mt-5  text-gray-500'>These pages provide information to empower you to manage your health <br /> and wellbeing.</p>
                            <ul className='list-disc mt-3 px-8  text-gray-500'>

                                <li className='py-2 hover:text-[#ae152d]'>
                                    <Link href={`#`}>Emergency</Link>
                                </li>
                                <li className='py-2 hover:text-[#ae152d]'>
                                    <Link href={`#`}>Psychological Services</Link>
                                </li>
                                <li className='py-2 hover:text-[#ae152d]'>
                                    <Link href={`#`}>University Health Services</Link>
                                </li>
                                <li className='py-2 hover:text-[#ae152d]'>
                                    <Link href={`#`}>Health Insurance</Link>
                                </li>

                            </ul>
                        </div>

                    </div>
                    {/* 2nd */}
                    <div className='flex-1'>
                        <Image className='h-[300px] w-[580px]' height={200} width={500} src={'/students/financials.jpg'} alt='' />
                        <div className='mt-8'>
                            <h3 className='text-3xl font-bold'>Financials</h3>
                            <p className='mt-5 text-gray-500'>Information about student fees, funding opportunities, financial <br /> assistance, and student loans.</p>
                            <ul className='list-disc mt-3 px-8 text-gray-500'>

                                <li className='py-2 hover:text-[#ae152d]'>
                                    <Link href={`#`}>Tuition and Fees</Link>
                                </li>
                                <li className='py-2 hover:text-[#ae152d]'>
                                    <Link href={`#`}>Financial Aid Service</Link>
                                </li>
                                <li className='py-2 hover:text-[#ae152d]'>
                                    <Link href={`#`}>Fellowships, Opportunities, Grants, and Scholarship</Link>
                                </li>
                                <li className='py-2 hover:text-[#ae152d]'>
                                    <Link href={`#`}>Personal Finance</Link>
                                </li>

                            </ul>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default StudentPage;