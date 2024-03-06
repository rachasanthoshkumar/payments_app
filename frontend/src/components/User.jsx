import React from 'react'
import Button from './Button'
import {useNavigate} from 'react-router-dom'
const User = ({user}) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div className="rounded-full h-10 w-10 bg-slate-200 flex items-center justify-center mt-1 mr-2">
          <div className=" text-center text-xl">
            {user.firstName[0]}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center h-ful">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center h-full mt-1">
        <Button label={"Send Money"} onClick={()=>navigate("/send?id="+user._id+"&name="+user.firstName)} />
      </div>
    </div>
  )
}

export default User