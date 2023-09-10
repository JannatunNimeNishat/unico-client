import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from '../Button/Button'

function WhyChooseUnico() {
    return (
        <div className='mt-[120px] my-container'>
            <div className='text-center'>
                <h3 className='text-4xl font-bold pt-8'>Why Choose UNICO</h3>
                <div className='h-1 w-[68px] bg-[#ae152d] mt-[30px] mb-[20px] mx-auto' />
                <p className='text-gray-500 '>We Are One of The Largest, Most Diverse Universities in The USA</p>
            </div>

            <div className='grid grid-cols-3 gap-8 mt-14'>

                {/* 1st */}
                <div className='text-center flex flex-col hover:shadow-xl py-5 '>
                    <div className={`bg-[url('/whyChooseUnico/university_1.png')] bg-cover bg-center w-[130px] h-[130px] flex items-center justify-center mx-auto`}>
                        <Image width={70} height={70} className='opacity-100 mt-12' src='/whyChooseUnico/graduated.png' alt='' />
                    </div>
                    <h3 className='text-2xl font-semibold mt-5'>Affordability</h3>
                    <p className='my-4 px-8 text-gray-500'>Our financial aid program makes UniCamp affordable for every family throughout the world.</p>

                    <Link href='/financial_aid' className=' mx-auto mt-3'>
                        <Button btn_text={'Read more'} btn_width={'200px'} isArrowImg={true} />
                    </Link>
                </div>

                {/* 2nd */}
                <div className='text-center flex flex-col  hover:shadow-xl py-5'>
                    <div className={`bg-[url('/whyChooseUnico/knowledge_1.png')] bg-cover bg-center w-[130px] h-[130px] flex items-center justify-center mx-auto`}>
                        <Image width={70} height={70} className='opacity-100 mt-12' src='/whyChooseUnico/learning.png' alt='' />
                    </div>
                    <h3 className='text-2xl font-semibold mt-5'>Academics</h3>
                    <p className='my-4 px-8 text-gray-500'>An education at UniCamp has limitless possibilities. Our courses are taught by esteemed faculty members.</p>
                    <Link href='/academics' className='mx-auto mt-3'>
                        <Button btn_text={'Read more'} btn_width={'200px'} isArrowImg={true} />
                    </Link>
                </div>

                {/* 3rd */}
                <div className='text-center flex flex-col  hover:shadow-xl py-5'>
                    <div className={`bg-[url('/whyChooseUnico/desk.png')] bg-cover bg-center w-[130px] h-[130px] flex items-center justify-center mx-auto`}>
                        <Image width={60} height={60} className='opacity-100 mt-12' src='/whyChooseUnico/closed_book.png' alt='' />
                    </div>
                    <h3 className='text-2xl font-semibold mt-5'>Inspiring Student Life</h3>
                    <p className='my-4 px-8 text-gray-500'>Our residential system creates more opportunities for learning with peers and professors from different backgrounds.</p>
                    <Link href='/' className='mx-auto mt-3'>
                        <Button btn_text={'Read more'} btn_width={'200px'} isArrowImg={true} />
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default WhyChooseUnico