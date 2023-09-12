import NoticeComponent from '@/components/NoticeComponent/NoticeComponent';
import RelatedLinks from '@/components/RelatedLinks/RelatedLinks';
import React from 'react';

const AdmissionLayout = ({ children }) => {
    return (
        <div className='mt-10 my-container px-8  grid grid-cols-6 gap-10 '>

            <div className='col-span-4 border'>
                {children}
            </div>

            <div className='col-span-2 px-3 py-3'>
                <RelatedLinks />
                <div className='mt-16'>
                    <NoticeComponent />
                </div>
            </div>

        </div>
    );
};

export default AdmissionLayout;