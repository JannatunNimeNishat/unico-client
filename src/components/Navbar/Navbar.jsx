"use client"
import useAuth from '@/hooks/useAuth';
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";
import { useRouter } from 'next/navigation';
import useCheckRole from '@/hooks/useCheckRole';
const Navbar = () => {

    const [navOptions, setNavOptions] = useState(0);

    const [isHovered, setIsHovered] = useState(false);

    const [subOptions, setSubOptions] = useState(0);

    const [isHoveredSubOption, setIsHoveredSubOption] = useState(false);

    const { push } = useRouter();

    // auth
    const { user, logout } = useAuth();
    const { uid, displayName, photoURL, email } = user || {};

    // check user role
    const [role, roleLoading] = useCheckRole();
    // console.log(role, roleLoading);



    // console.log(user);
    const handleLogout = async () => {
        await logout();
        toast.success("Successfully logout")
        push('/')
    }





    const regulatoryBodies = [
        {
            id: 1,
            href: '/administration/board_of_trustees',
            text: 'Board of Trustees'
        },
        {
            id: 2,
            href: '/administration/syndicate_members',
            text: 'Syndicate Members'
        },
        {
            id: 3,
            href: '/administration/academic_council',
            text: 'Academic Council'
        },
        /* {
            id: 4,
            href: '/administration/finance_committee',
            text: 'Finance Committee'
        },
        {
            id: 5,
            href: '/administration/discipline_committee',
            text: 'Discipline Committee'
        }, */
    ]

    const offices = [
        {
            id: 1,
            href: '/administration/offices/vcs-office',
            text: "VC'S Office",
        },
        {
            id: 2,
            href: '/administration/offices/pro-vcs-office',
            text: "PRO-VC'S Office",
        },
        {
            id: 3,
            href: '/administration/offices/office-of-the-treasurer',
            text: "Office of the Treasurer",
        },
        {
            id: 4,
            // href: '/office-of-the-registrar',
            href: '#',
            text: "Office of the Registrar",
        },
        {
            id: 5,
            // href: '/controller-of-examination',
            href: '#',
            text: "Controller of Examination",
        },
    ]

    const fece = [
        {
            id: 1,
            href: '/departments/cse',
            text: 'Computer Science and Engineering (CSE)'
        },
        {
            id: 2,
            href: '/departments/ict',
            text: 'Information and Communication Technology (ICT)'
        },
        {
            id: 3,
            href: '/departments/eee',
            text: 'Electrical and Electronic Engineering (EEE)'
        },
    ]

    const fme = [
        {
            id: 1,
            href: '/departments/me',
            text: 'Department of Mechanical Engineering (ME)'
        },
        {
            id: 2,
            href: '/departments/ipe',
            text: 'Industrial and Production Engineering (IPE)'
        }
    ]

    const fce = [
        {
            id: 1,
            href: '/departments/ce',
            text: 'Department of Civil Engineering (CE)'
        },

    ]
    const fbs = [
        {
            id: 1,
            href: '/departments/dba',
            text: 'Department of Business Administration (DBA)'
        },
        {
            id: 2,
            href: '/departments/ais',
            text: 'Department of Accounting and Information Systems (AIS)'
        },
        {
            id: 3,
            href: '/departments/mba',
            text: 'Department of Business Administration (MBA)'
        },

    ]

    const admission = [
        {
            id: 1,
            href: '/admission/apply_online_instruction',
            text: 'Apply Online Instruction',
        },
        {
            id: 2,
            href: '/admission/admission_notice',
            text: 'Admission Notice',
        },
        {
            id: 3,
            href: '/admission/program_offering',
            text: 'Offered Program',
        },
        {
            id: 4,
            href: '/admission/admission_requirment',
            text: 'Admission Requirments',
        },
        {
            id: 5,
            href: '#',
            // href: '/admission/admission_procedure',
            text: 'admission Procedure',
        },
        {
            id: 6,
            href: '#',
            // href: '/admission/semester_fees',
            text: 'Semester Fees',
        },
        {
            id: 7,
            href: '#',
            // href: '/admission/admission_cancel_policy',
            text: 'Admission Cancel Policy',
        },
    ]

    const research = [
        {
            id: 1,
            href: '/research/publications',
            text: 'publications'
        },
        {
            id: 2,
            href: '/research/projects',
            text: 'projects'
        }
    ]

    const handleMouseEnter = (value) => {
        setIsHovered(true);
        setTimeout(() => {
            setNavOptions(value);
        }, 200);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setNavOptions(0);
    };

    const handleSubOptionsMouseEnter = (value) => {
        setIsHoveredSubOption(true);
        setTimeout(() => {
            setSubOptions(value);
        }, 300);
    }

    const handleSubOptionsMouseLeave = () => {
        setIsHoveredSubOption(false);
        setSubOptions(0);
    };

    return (

        <>
            {/* top nav */}
            <div className='my-container h-[123px]  hidden lg:flex items-center justify-between  '>

                <div className='flex gap-5'>
                    <Link href='/student' className=' font-semibold  text-gray-500 hover:text-[#9d2235] uppercase'>students</Link>
                    <Link href='/staff' className=' font-semibold  text-gray-500 hover:text-[#9d2235] uppercase'>staffs</Link>
                    <Link href='/alumni' className=' font-semibold  text-gray-500 hover:text-[#9d2235] uppercase'>alumni</Link>
                    <Link href='/visit' className=' font-semibold  text-gray-500 hover:text-[#9d2235] uppercase'>visit</Link>
                    <Link href='/media' className=' font-semibold  text-gray-500 hover:text-[#9d2235] uppercase'>media</Link>
                </div>

                <div className='flex items-center gap-3 -ml-20'>
                    <Link href='/'>
                        <Image width={70} height={70} src='/navbar/unico_logo.png' alt='uni logo' />
                    </Link>
                    <div className='leading-6'>
                        <h1 className='uppercase items-center text-[25px] font-semibold  '>unico</h1>
                        <p className='text-gray-500'>Since 1980</p>
                    </div>
                </div>

                <div className='flex gap-5'>
                    {
                        role === 'student' &&
                        <Link
                            href={`/dashboard/studentDashboard`} className=' font-semibold  text-gray-500 hover:text-[#9d2235] uppercase'>{email}</Link>
                    }
                    {
                        role === 'admin' &&
                        <Link
                            href={`/dashboard/adminDashboard`} className=' font-semibold  text-gray-500 hover:text-[#9d2235] uppercase'>{email}</Link>
                    }
                    {
                        user ?
                            <>
                                <p onClick={handleLogout} className=' cursor-pointer font-semibold  text-gray-500 hover:text-[#9d2235] uppercase'>logout</p>


                            </>
                            :
                            <Link href=' /login' className=' font-semibold  text-gray-500 hover:text-[#9d2235] uppercase'>login</Link>
                    }

                    <Link href='/apply_online' className=' font-semibold  text-gray-500 hover:text-[#9d2235] uppercase'>apply Online</Link>
                </div>

            </div >

            {/* bottom navbar */}
            < div className='my-bg-color text-white h-[60px] mt-[10px] flex gap-12 items-center justify-center' >
                <div>
                    <Link className='' href='/'>Home</Link>
                </div>

                {/* Administration */}
                <div className='  relative '
                    onMouseEnter={() => handleMouseEnter(1)}
                    onMouseLeave={handleMouseLeave}
                >
                    <button className='flex items-center gap-1  transition-opacity duration-300'
                    >
                        <h2>Administration</h2>
                        <AiOutlineDown className='' />
                    </button>

                    <ul className={`absolute bg-white text-black w-48 px-2 py-2 mx-auto  rounded-lg shadow-xl
                    ${navOptions === 1 ? 'block opacity-100 z-10' : 'hidden opacity-0'}   
                    transition-opacity duration-300 ease-in-out
                    `}
                    >
                        <div className='arrow-up '></div>
                        {/* Regulatory Bodies */}
                        <li className="flex w-full items-center py-2  text-sm cursor-pointer hover:text-[#9d2235]"
                            onMouseEnter={() => handleSubOptionsMouseEnter(1)}
                            onMouseLeave={handleSubOptionsMouseLeave}
                        >
                            {/* sub menu */}
                            <button className='w-full flex justify-between items-center'>
                                <span>Regulatory Bodies</span>
                                <AiOutlineRight />
                            </button>
                            {/*  */}

                            {/* regulatoryBodies sub category menus */}
                            <ul className={`${isHoveredSubOption && subOptions === 1 ? 'flex flex-col' : 'hidden'}
                            absolute -right-[180px] top-3  bg-white  text-black w-48 px-2 py-2 mx-auto  rounded-lg shadow-xl
                            `}>
                                {
                                    regulatoryBodies.map(item => <Link
                                        className='py-2 hover:text-[#9d2235]'
                                        key={item.id}
                                        href={item.href}
                                    >{item.text}</Link>)
                                }
                                {/* <li>Board of Trustees</li> */}
                            </ul>

                        </li>

                        {/* office */}
                        <li className="flex w-full items-center py-2  text-sm cursor-pointer hover:text-[#9d2235]"
                            onMouseEnter={() => handleSubOptionsMouseEnter(2)}
                            onMouseLeave={handleSubOptionsMouseLeave}

                        >
                            <button className='w-full flex justify-between items-center'>
                                <span>Offices</span>
                                <AiOutlineRight />
                            </button>

                            <ul className={`${isHoveredSubOption && subOptions === 2 ? 'flex flex-col' : 'hidden'}
                            absolute -right-[180px] top-14 border bg-white text-black w-48 px-2 py-2 mx-auto  rounded-lg shadow-xl
                            `}>
                                {
                                    offices.map(item => <Link
                                        className='py-2 hover:text-[#9d2235]'
                                        key={item.id}
                                        href={item.href}
                                    >{item.text}</Link>)
                                }
                            </ul>


                        </li>

                        {/* Offices & Staff state */}
                        <li className="w-full flex items-center  py-2 text-sm cursor-pointer hover:text-[#9d2235]">
                            <Link href={'/administration/officers_&_staff'} className='w-full flex justify-between items-center'>
                                <span>Offices & Staff state</span>
                            </Link >
                        </li>

                    </ul>

                </div>

                {/* Academic */}
                <div className='  relative '
                    onMouseEnter={() => handleMouseEnter(2)}
                    onMouseLeave={handleMouseLeave}
                >
                    <button className='flex items-center gap-1  transition-opacity duration-300'
                    >
                        <h2>Academics</h2>
                        <AiOutlineDown className='' />
                    </button>

                    <ul
                        className={`absolute bg-white text-black  w-96 py-2  rounded-lg shadow-xl
                    ${isHovered && navOptions === 2 ? 'block opacity-100 z-10' : 'hidden opacity-0'}   
                    transition-opacity duration-300 ease-in-out
                    `}
                    >
                        <div className='arrow-up '></div>
                        {/* Faculty of Electrical and Computer Engineering (FECE) */}
                        <li className="flex w-full items-center px-2  py-2 text-sm cursor-pointer hover:text-[#9d2235]"
                            onMouseEnter={() => handleSubOptionsMouseEnter(3)}
                            onMouseLeave={handleSubOptionsMouseLeave}

                        >

                            {/* sub menu */}
                            <button className='w-full flex justify-between items-center'>
                                <span>Faculty of Electrical and Computer Engineering (FECE)</span>
                                <AiOutlineRight />
                            </button>
                            {/*  */}

                            <ul className={`${isHoveredSubOption && subOptions === 3 ? 'flex flex-col' : 'hidden'}
                            absolute -right-[200px] top-5 border bg-white text-black w-52 px-4 py-2 mx-auto  rounded-lg shadow-xl
                            `}>
                                {
                                    fece.map(item => <Link
                                        className='py-2 hover:text-[#9d2235]'
                                        key={item.id}
                                        href={item.href}
                                    >{item.text}</Link>)
                                }
                            </ul>


                        </li>
                        {/* Faculty  Mechanical Engineering (FME) */}
                        <li className="flex w-full items-center px-3 py-2 text-sm cursor-pointer hover:text-[#9d2235]"
                            onMouseEnter={() => handleSubOptionsMouseEnter(4)}
                            onMouseLeave={handleSubOptionsMouseLeave}
                        >
                            {/* sub menu */}
                            <button className='w-full flex justify-between items-center'>
                                <span>Faculty  Mechanical Engineering (FME)</span>
                                <AiOutlineRight />
                            </button>

                            {/*  */}
                            <ul className={`${isHoveredSubOption && subOptions === 4 ? 'flex flex-col' : 'hidden'}
                            absolute -right-[200px] top-20 border bg-white text-black w-52 px-4 py-2 mx-auto  rounded-lg shadow-xl
                            `}>
                                {
                                    fme.map(item => <Link
                                        className='py-2 hover:text-[#9d2235]'
                                        key={item.id}
                                        href={item.href}
                                    >{item.text}</Link>)
                                }
                            </ul>


                        </li>

                        {/* Faculty of Civil Engineering (FCE) */}
                        <li className="flex w-full items-center px-3 py-2 text-sm cursor-pointer hover:text-[#9d2235]"
                            onMouseEnter={() => handleSubOptionsMouseEnter(5)}
                            onMouseLeave={handleSubOptionsMouseLeave}
                        >
                            {/* sub menu */}
                            <button className='w-full flex justify-between items-center'>
                                <span>Faculty of Civil Engineering (FCE)</span>
                                <AiOutlineRight />
                            </button>

                            {/*  */}
                            <ul className={`${isHoveredSubOption && subOptions === 5 ? 'flex flex-col' : 'hidden'}
                            absolute -right-[200px] top-28 border bg-white text-black w-52 px-4 py-2 mx-auto  rounded-lg shadow-xl
                            `}>
                                {
                                    fce.map(item => <Link
                                        className='py-2 hover:text-[#9d2235]'
                                        key={item.id}
                                        href={item.href}
                                    >{item.text}</Link>)
                                }
                            </ul>

                        </li>

                        {/* Faculty of Business Studies (FBC) */}
                        <li className="flex w-full items-center px-3 py-2 text-sm cursor-pointer hover:text-[#9d2235]"
                            onMouseEnter={() => handleSubOptionsMouseEnter(6)}
                            onMouseLeave={handleSubOptionsMouseLeave}
                        >
                            {/* sub menu */}
                            <button className='w-full flex justify-between items-center'>
                                <span>Faculty of Business Studies (FBC)</span>
                                <AiOutlineRight />
                            </button>

                            {/*  */}
                            <ul className={`${isHoveredSubOption && subOptions === 6 ? 'flex flex-col' : 'hidden'}
                            absolute -right-[200px] top-36 border bg-white text-black w-52 px-4 py-2 mx-auto  rounded-lg shadow-xl
                            `}>
                                {
                                    fbs.map(item => <Link
                                        className='py-2 hover:text-[#9d2235]'
                                        key={item.id}
                                        href={item.href}
                                    >{item.text}</Link>)
                                }
                            </ul>

                        </li>



                    </ul>
                </div>

                {/* admissions */}
                <div className='  relative '
                    onMouseEnter={() => handleMouseEnter(3)}
                    onMouseLeave={handleMouseLeave}
                >
                    <button className='flex items-center gap-1  transition-opacity duration-300'

                    >
                        <h2>Admissions</h2>
                        <AiOutlineDown className='' />
                    </button>

                    <ul
                        className={`absolute bg-white  text-black  w-60 py-2  rounded-lg shadow-xl
                    ${isHovered && navOptions === 3 ? 'block opacity-100 z-10' : 'hidden opacity-0'}   
                    transition-opacity duration-300 ease-in-out
                    `}
                    >
                        <div className='arrow-up '></div>
                        {
                            admission.map(item => <Link
                                key={item.id}
                                href={item.href}
                                className="flex w-full items-center px-3 py-2 text-sm cursor-pointer hover:text-[#9d2235]">

                                {item.text}

                            </Link>)
                        }

                    </ul>
                </div>

                {/* Research */}
                <div className='  relative '
                    onMouseEnter={() => handleMouseEnter(4)}
                    onMouseLeave={handleMouseLeave}
                >
                    <button className='flex items-center gap-1  transition-opacity duration-300'

                    >
                        <h2>Research</h2>
                        <AiOutlineDown className='' />
                    </button>

                    <ul
                        className={`absolute bg-white  text-black  w-60 py-2  rounded-lg shadow-xl
                    ${isHovered && navOptions === 4 ? 'block opacity-100 z-10' : 'hidden opacity-0'}   
                    transition-opacity duration-300 ease-in-out
                    `}
                    >
                        <div className='arrow-up '></div>
                        {
                            research.map(item => <Link
                                key={item.id}
                                href={item.href}
                                className="flex w-full items-center px-3 py-2 text-sm cursor-pointer hover:text-[#9d2235]">

                                {item.text}

                            </Link>)
                        }

                    </ul>
                </div>

                {/* contact */}
                <div>
                    <Link className='' href='/contact'>Contact</Link>
                </div>

            </div >



        </>


    )
}

export default Navbar