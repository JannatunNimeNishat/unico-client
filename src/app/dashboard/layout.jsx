import React from 'react';

const DashBoardLayout = ({children}) => {
    return (
        <div>
            {/* DashBoardLayout */}
            <div>
                sidebar
            </div>
            <div>
                navbar
            </div>
            {children}

        </div>
    );
};

export default DashBoardLayout;