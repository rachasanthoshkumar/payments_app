import React from 'react'


import Logout from './Logout'
const Appbar = () => {
  return (
    <div className="shadow h-14 flex justify-between">
        <div className="flex flex-col justify-center h-full ml-4">
            Payments App
        </div>
        <div className='flex items-center gap-2'>

        <div className="flex items-center">
            <div className="flex flex-col justify-center h-full mr-2">
                Hello
            </div>
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    U
                </div>
            </div>
        </div>
        <Logout/>
        </div>
    </div>
  )
}

export default Appbar