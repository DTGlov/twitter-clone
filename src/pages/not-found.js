import React, { useEffect } from 'react'


const NotFound = () => {

    useEffect(() => {
        document.title = 'Not Found - Twitter'
    }, []);
    return (
        <div className="h-screen mx-auto max-w-screen-lg flex items-center justify-center">
            <p className="text-7xl text-center text-red-500 font-bold">Page Not Found</p>
        </div> 
     ); 
}
 
export default NotFound;