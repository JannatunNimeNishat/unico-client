import Link from 'next/link';
import React from 'react';
import { VscThreeBars } from "react-icons/vsc";
const RelatedLinks = () => {
    return (
        <div className=' '>
            <h3 className='text-[#9d2235] text-2xl font-bold '>Related Links</h3>
            <div className='mt-3'>
                <div>-----------------------------------------------</div>
                <Link href={`#`} className='flex items-center gap-2 hover:text-[#9d2235]'>
                    <VscThreeBars />
                    Admission Form
                </Link>
                <div>-----------------------------------------------</div>
                <Link href={`#`} className='flex items-center gap-2 hover:text-[#9d2235]'>
                    <VscThreeBars />
                    Admission Procedure
                </Link>
                <div>-----------------------------------------------</div>
                <Link href={`#`} className='flex items-center gap-2 hover:text-[#9d2235]'>
                    <VscThreeBars />
                    Waiver And Financial Aid
                </Link>
                <div>-----------------------------------------------</div>
                <Link href={`#`} className='flex items-center gap-2 hover:text-[#9d2235]'>
                    <VscThreeBars />
                    Admission Requirements
                </Link>
                <div>-----------------------------------------------</div>
                <Link href={`#`} className='flex items-center gap-2 hover:text-[#9d2235]'>
                    <VscThreeBars />
                    Program Offering
                </Link>
                <div>-----------------------------------------------</div>

            </div>
        </div>
    );
};

export default RelatedLinks;