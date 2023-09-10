import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from '../Button/Button'

// import main_img from '../../../public'

function WelcomeToUnico() {
  return (
    <div className='mt-[100px] flex gap-5 items-center '>

      <div className='flex-1 pl-20 '>
        <h3 className='text-4xl font-bold '>Welcome to UNICO</h3>
        <p className='text-justify mt-[45px] text-gray-500 leading-8 text-[20px] mb-[50px]'>Our community is being called to reimagine <br /> the future. As the only university where a <br /> renowned design school comes together <br /> with premier colleges, we are making <br /> learning more relevant and <br /> transformational.
          <br /> <br />
          We are united in our mission to solve real- <br /> world problems for a better tomorrow.</p>

        <Link href='/'>
          <Button btn_text={'Read more'} btn_width={'200px'} isArrowImg={true} />
        </Link>
      </div>

      <div className='flex-1 '>
        <Image width={700} height={300} className='w-[700px] h-[600px]' src='/welcomeToUnico/main_img.jpg' alt='' />
      </div>

    </div>
  )
}

export default WelcomeToUnico