import React from 'react';

const AdmissionLayout = ({ children }) => {
    return (
        <div className='mt-10 my-container  grid grid-cols-6 gap-5 '>
            
            <div className='col-span-4 border'>
                {children}
            </div>
          
            <div className='col-span-2 border'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ullam veniam officia sunt! Hic a reiciendis fuga, amet ducimus magnam nulla dolorum, velit quas quis asperiores at vel illo nesciunt!
            </div>

        </div>
    );
};

export default AdmissionLayout;