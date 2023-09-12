import Link from 'next/link';
import React from 'react';

const NoticeComponent = () => {
    return (
        <div>
            <div className='flex justify-between items-center '>
                <h3 className='text-[#9d2235] text-2xl font-bold '>Notice</h3>
                <h3 className='text-[#9d2235]  font-bold '>View All</h3>
            </div>
            <div className='mt-2 flex w-2/3 justify-between items-center'>
                <Link className='hover:text-[#9d2235]' href={`#`}>Class/Exam</Link>
                <div className='h-[17px] w-[2px] bg-[#9d2235] '></div>
                <Link className='hover:text-[#9d2235]' href={`#`}>Job</Link >
                <div className='h-[17px] w-[2px] bg-[#9d2235] '></div>
                <Link className='hover:text-[#9d2235]' href={`#`}>Tender</Link>
            </div>
            <div className='mt-5'>

                <div className='border shadow-xl hover:shadow-2xl py-3 px-5 flex items-center gap-4 w-11/12'>
                    {/* date */}
                    <div className='w-[70px] h-[62px] text-white bg-green-500 rounded-md text-center py-2 leading-4'>
                        <h3 className='text-xl font-bold'>07</h3>
                        <p>Sep</p>
                    </div>
                    {/* notice title */}
                    <h3 className='text-xl font-semibold hover:text-[#9d2235]'>Notice text here</h3>
                </div>
                <div className='border shadow-xl hover:shadow-2xl py-3 px-5 flex items-center gap-4 w-11/12 mt-3'>
                    {/* date */}
                    <div className='w-[70px] h-[62px] text-white bg-green-500 rounded-md text-center py-2 leading-4'>
                        <h3 className='text-xl font-bold'>07</h3>
                        <p>Sep</p>
                    </div>
                    {/* notice title */}
                    <h3 className='text-xl font-semibold hover:text-[#9d2235]'>Notice text here</h3>
                </div>
                <div className='border shadow-xl hover:shadow-2xl py-3 px-5 flex items-center gap-4 w-11/12 mt-3'>
                    {/* date */}
                    <div className='w-[70px] h-[62px] text-white bg-green-500 rounded-md text-center py-2 leading-4'>
                        <h3 className='text-xl font-bold'>07</h3>
                        <p>Sep</p>
                    </div>
                    {/* notice title */}
                    <h3 className='text-xl font-semibold hover:text-[#9d2235]'>Notice text here</h3>
                </div>

            </div>
        </div>
    );
};

export default NoticeComponent;