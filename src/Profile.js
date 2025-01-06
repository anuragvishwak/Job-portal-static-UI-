import React from 'react'
import CommonNavbar from './CommonNavbar';
function Profile() {
  return (
    <div>
        <div className='flex items-center justify-center py-5'>
            <CommonNavbar/>
        </div>

        <div className='bg-gray-100 p-5 h-screen'>
            <div className='bg-white p-3 rounded-lg'>
               <div className='bg-gradient-to-r h-40 from-green-500 to-red-500'>
                
               </div>
             </div>
        </div>
    </div>
  )
}

export default Profile