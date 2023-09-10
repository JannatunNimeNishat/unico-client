import Button from '@/components/Button/Button'
import React from 'react'

function Financial_aid() {
    return (
        <div className='my-container px-8 py-10'>

            <h3 className='text-4xl font-bold mb-5'>Tell us about yourself</h3>

            <p className='text-[20px] font-bold py-5'>What's your highest level of education?</p>
            <input className='border w-full px-3 py-3' type="text" placeholder='Education' name="" id="" />

            <p className='text-[20px] font-bold py-5'>What's your annual income?</p>
            <div className='flex items-center'>
                <input className='border w-3/4 px-3 py-3' type="text" placeholder='Enter annual income' name="" id="" />
                <input className='border w-1/4 px-3 py-3' type="text" placeholder='Country' name="" id="" />
            </div>

            <p className='text-[20px] font-bold py-5'>What's your employment status?</p>
            <input className='border w-full px-3 py-3' type="text" placeholder='Enter employment status' name="" id="" />


            <p className='text-[20px] font-bold py-5'>Why are you applying for financial aid?</p>
            <textarea className='border w-full px-3 py-3 mb-8' placeholder='Enter your response' name="" id="" cols="30" rows="10"></textarea>

            <input type="submit" value="Submit" className={`w-full cursor-pointer  bg-[#9d2235]  text-white font-bold px-4 py-3 flex gap-2 items-center justify-center hover:bg-black `} />

        </div>
    )
}

export default Financial_aid