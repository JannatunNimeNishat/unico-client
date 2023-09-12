import Link from 'next/link';
import React from 'react';

const AdmissionNoticePage = () => {
    return (
        <div className='px-5 py-5'>
            <h3 className='text-xl font-semibold '>Admission Notice List</h3>
          
            <div className='mt-8'>

                <div className='border shadow-xl hover:shadow-2xl py-3 px-5 flex flex-row-reverse justify-between items-center gap-4 w-11/12'>
                    {/* date */}
                    <div className='w-[70px] h-[62px] text-white bg-green-500 rounded-md text-center py-2 leading-4'>
                        <h3 className='text-xl font-bold'>07</h3>
                        <p>Sep</p>
                    </div>
                    {/* notice title */}
                    <Link href={`#`} className='text-xl font-semibold hover:text-[#9d2235]'>Notice text here</Link>
                </div>
                <div className='border shadow-xl hover:shadow-2xl py-3 px-5 flex flex-row-reverse justify-between items-center gap-4 w-11/12 mt-5'>
                    {/* date */}
                    <div className='w-[70px] h-[62px] text-white bg-green-500 rounded-md text-center py-2 leading-4'>
                        <h3 className='text-xl font-bold'>07</h3>
                        <p>Sep</p>
                    </div>
                    {/* notice title */}
                    <Link href={`#`} className='text-xl font-semibold hover:text-[#9d2235]'>Notice text here</Link>
                </div>
                <div className='border shadow-xl hover:shadow-2xl py-3 px-5 flex flex-row-reverse justify-between items-center gap-4 w-11/12 mt-5'>
                    {/* date */}
                    <div className='w-[70px] h-[62px] text-white bg-green-500 rounded-md text-center py-2 leading-4'>
                        <h3 className='text-xl font-bold'>07</h3>
                        <p>Sep</p>
                    </div>
                    {/* notice title */}
                    <Link href={`#`} className='text-xl font-semibold hover:text-[#9d2235]'>Notice text here</Link>
                </div>
                <div className='border shadow-xl hover:shadow-2xl py-3 px-5 flex flex-row-reverse justify-between items-center gap-4 w-11/12 mt-5'>
                    {/* date */}
                    <div className='w-[70px] h-[62px] text-white bg-green-500 rounded-md text-center py-2 leading-4'>
                        <h3 className='text-xl font-bold'>07</h3>
                        <p>Sep</p>
                    </div>
                    {/* notice title */}
                    <Link href={`#`} className='text-xl font-semibold hover:text-[#9d2235]'>Notice text here</Link>
                </div>
                <div className='border shadow-xl hover:shadow-2xl py-3 px-5 flex flex-row-reverse justify-between items-center gap-4 w-11/12 mt-5'>
                    {/* date */}
                    <div className='w-[70px] h-[62px] text-white bg-green-500 rounded-md text-center py-2 leading-4'>
                        <h3 className='text-xl font-bold'>07</h3>
                        <p>Sep</p>
                    </div>
                    {/* notice title */}
                    <Link href={`#`} className='text-xl font-semibold hover:text-[#9d2235]'>Notice text here</Link>
                </div>
                <div className='border shadow-xl hover:shadow-2xl py-3 px-5 flex flex-row-reverse justify-between items-center gap-4 w-11/12 mt-5'>
                    {/* date */}
                    <div className='w-[70px] h-[62px] text-white bg-green-500 rounded-md text-center py-2 leading-4'>
                        <h3 className='text-xl font-bold'>07</h3>
                        <p>Sep</p>
                    </div>
                    {/* notice title */}
                    <Link href={`#`} className='text-xl font-semibold hover:text-[#9d2235]'>Notice text here</Link>
                </div>

            </div>
        
        </div>
    );
};

export default AdmissionNoticePage;