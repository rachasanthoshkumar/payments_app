import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast'
const Logout = () => {

    const notify=()=>{
        toast.success("Logged out successfully!")
    }
  return (
    <Link to={'/'} onClick={notify} className='hover:bg-black/80 cursor-pointer flex items-center  bg-black text-white px-4 py-2 rounded-md'>
        Logout
    </Link>
  )
}

export default Logout