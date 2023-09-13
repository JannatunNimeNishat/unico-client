
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from '../Button/Button';

const UpcomingEvents = () => {

    const events = [
        {
            id: 1,
            title: 'Roadmap to the Sustainable Development Goals',
            img: 'https://i.ibb.co/2ynnkTL/Sustainable-Development-Goals.jpg',
            data: 'SEP 21',
            time: '2:30 PM - 3:30 PM'
        },
        {
            id: 2,
            title: 'Research In Distance Education (RIDE)...',
            img: 'https://i.ibb.co/BtRWXTs/Research-In-Distance-Education.jpg',
            data: 'OCT 10',
            time: '3:30 PM - 4:30 PM'
        },
        {
            id: 3,
            title: 'The Role of Conflict in a Political Account of...',
            img: 'https://i.ibb.co/5GY37xn/The-Role-of-Conflict-in-a-Political.jpg',
            data: 'OCT 10',
            time: '3:30 PM - 4:30 PM'
        },
    ]


    return (
        <div className='pb-20 my-container'>
            <div className='text-center'>
                <h3 className='text-4xl font-bold pt-8'>Upcoming Events</h3>
                <div className='h-1 w-[78px] bg-[#ae152d] mt-[20px] mb-[20px] mx-auto' />
                <div className='mt-16 grid grid-cols-6 pb-12'>
                    {/* 1st */}
                    <div
                        style={{ '--image-url': `url(${events[0].img})` }}
                        className='bg-[image:var(--image-url)]  h-[355px] w-[600px] bg-cover bg-center col-span-3'
                    >
                        <div className='h-full w-full backdrop-brightness-50 text-white flex flex-col justify-center items-center'>
                            <p className='bg-[#ae152d] px-3 py-2 font-bold mt-12'>{events[0].data}</p>
                            <h3 className='text-3xl font-semibold px-16 mt-5  hover:text-[#ae152d] cursor-pointer'>{events[0].title}</h3>
                            <small className='mt-20'>{events[0].time}</small>
                        </div>
                    </div>
                    {/* 2nd */}
                    <div className='col-span-3 flex gap-8  justify-between '>
                        {
                            events.slice(1, 3).map(event => <div key={event.id}
                                className=' text-white relative border shadow-xl hover:shadow-2xl '
                            >
                                <Image className='w-full h-[220px] ' width={300} height={150} src={event.img} alt='' />
                                <p className='bg-[#ae152d] w-1/3 mx-auto px-2  py-1 font-bold absolute bottom-[120px] left-24'>{event.data}</p>
                                <div className='mt-8'>
                                    <h3 className='text-xl text-black hover:text-[#ae152d] cursor-pointer'>{event.title}</h3>
                                    <small className='text-black mt-5'>{event.time}</small>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
                <div className=' w-full flex justify-center'>
                <Link  href={`#`}>
                    <Button btn_text={'More UNICO Events'} isArrowImg={true}/>
                </Link>
                </div>
            </div>
        </div>
    );
};

export default UpcomingEvents;