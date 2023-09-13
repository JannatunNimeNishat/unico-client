"use client"
import useAuth from '@/hooks/useAuth';
import React from 'react';

const getData = (value) => {
    console.log(value);
    
}


const StudentDashboardPage = () => {

    const { user } = useAuth();
    console.log(user);
    const data = getData(user?.email);
    return (
        <div className='mt-10 px-8 grid grid-cols-6 gap-5'>
            <div className='col-span-2 border px-5 py-5'>

            </div>
            <div className='col-span-4 border px-5 py-5'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis at vitae fuga hic, dolorem esse cumque beatae dolore quisquam tempora necessitatibus, omnis ex error praesentium consequuntur iure ut laboriosam labore.
            </div>

        </div>
    );
};

export default StudentDashboardPage;