import React, { memo } from 'react';
import { Link } from 'react-router-dom';
const NavButton =memo( ({ title, path, icon }) => {
    return (
        <div>
            <div className='bg-black group cursor-pointer transition-colors rounded-xl m-2 p-4
             dark:bg-gray-800  dark:border dark:border-gray-300 dark:text-white dark:m-2 group-hover:bg-red-950 dark:group-hover:bg-red-200 '>
                <Link to={path} className="no-underline text-white p-4 transition-colors dark:text-white duration-300 group-hover:text-red-600 flex justify-between">
                    {title} {icon}
                </Link>
            </div>
        </div>
    );
})

export default NavButton;
