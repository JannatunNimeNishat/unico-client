import React from 'react';
import offices from '../../../../../public/administration/offices.json'
import Link from 'next/link';
import Image from 'next/image';


const getData = (value) => {
    return offices.filter(item => item.category == value)
}

const SingleOffice = ({ params }) => {
    const data = getData(params.slug);
    console.log(data);
    return (
        <div className='mt-14 my-container px-8'>

            {
                data[0].category === 'vcs-office' ? <h3 className='text-4xl text-center font-bold uppercase'>Vice Chancellor's Office</h3> : ''
            }
            {
                data[0].category === 'pro-vcs-office' ? <h3 className='text-4xl text-center font-bold uppercase'>Pro-VC'S Office</h3> : ''
            }
            {
                data[0].category === 'office-of-the-treasurer' ? <h3 className='text-4xl text-center font-bold uppercase'>OFFICE OF THE TREASURER</h3> : ''
            }

            <div
                className='w-[380px] mt-8 mx-auto  shadow-xl border py-4 hover:shadow-2xl '>

                <figure className='h-[180px] w-[180px] flex items-center justify-center border-4 border-[#ae152d] rounded-full mx-auto '>
                    <Image className='rounded-full h-[150px] w-[150px] hover:h-[170px] hover:w-[170px]  hover:duration-700 mx-auto' height={150} width={150} src={data[0].img} alt='' />
                </figure>

                <div className='text-center mt-4 px-5'>
                    <p className='font-semibold text-xl'>{data[0].name}</p>
                    <small className='mt-1 block text-gray-500'>{data[0].designation}</small>
                    <small className='leading-3 text-gray-500'>{data[0].qualification}</small>

                    <Link className='bg-[#9d2235] w-2/3 mx-auto mt-3 mb-2  text-white font-bold px-4 py-2 flex gap-2 items-center justify-center hover:bg-black' href={`${data[0].category}/#`}>
                        view profile
                    </Link>

                </div>

            </div>

            <div className={`grid  mt-5 
            ${data.length <= 3 ? 'grid-cols-2 ': 'grid-cols-3'}
            `}>
                {
                    data.slice(1,5).map(singleData => <div
                    key={singleData.id}
                        className='w-[380px] mt-8 mx-auto  shadow-xl border py-4 hover:shadow-2xl '>
        
                        <figure className='h-[180px] w-[180px] flex items-center justify-center border-4 border-[#ae152d] rounded-full mx-auto '>
                            <Image className='rounded-full h-[150px] w-[150px] hover:h-[170px] hover:w-[170px]  hover:duration-700 mx-auto' height={150} width={150} src={singleData.img} alt='' />
                        </figure>
        
                        <div className='text-center mt-4 px-5'>
                            <p className='font-semibold text-xl'>{singleData.name}</p>
                            <small className='mt-1 block text-gray-500'>{singleData.designation}</small>
                            <small className='leading-3 text-gray-500'>{singleData.qualification}</small>
        
                            <Link className='bg-[#9d2235] w-2/3 mx-auto mt-3 mb-2  text-white font-bold px-4 py-2 flex gap-2 items-center justify-center hover:bg-black' href={`${data[0].category}/#`}>
                                view profile
                            </Link>
        
                        </div>
        
                    </div>)
                }
            </div>

        </div>
    );
};

export default SingleOffice;