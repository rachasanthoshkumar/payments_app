import React, { useState } from 'react'
import {useSearchParams} from 'react-router-dom'
import axios from 'axios';
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';

const SendMoney = () => {
const [searchParams] = useSearchParams();
const id = searchParams.get("id")
const name = searchParams.get('name')
const [amount,setAmount] = useState()
const navigate = useNavigate()
const notify = ()=>{
  toast.success('Transfer Successfull!', {
    position:"top-center",
    autoClose:2000
});
}
const errornotify = ()=>{
  toast.error('Transfer failed!', {
    position:"top-center",
    autoClose:2000
});
}

const insufficinetNotify = ()=>{
  toast.error('Insufficient balance!', {
    position:"top-center",
    autoClose:2000
});
}



  return (
    <div className='w-full h-screen bg-slate-400 flex items-center justify-center'>
      <div>
        <div className='p-4 bg-white w-96 shadow-lg rounded-lg h-72 flex flex-col gap-10'>
              <div className='font-bold text-center text-3xl text-black'>
                  Send Money
              </div>
              <div className='flex flex-col gap-2'>
                <div className='flex gap-2 items-center'>
                  <div className='bg-green-500 w-10 text-center h-10 p-2 rounded-full'><p>A</p></div>
                  <div className='flex items-center mb-1'>

                  <p className='text-xl text-black text-center font-semibold'>{name}</p>
                  </div>
                </div>
                <div >
                    <p>Amount (in Rs)</p>
                </div>
                <div className='flex w-full p-2 border-gray-400 border-[1px] rounded-md'>
                  <input onChange={(e)=>setAmount(e.target.value)} type="text" name="" id="" placeholder='Enter amount' className='' />
                </div>
                <div>
                  <button className='mt-1 rounded-md p-2 w-full bg-green-500 text-white'
                  onClick={async()=>{
                    try{
                      const response = await axios.post("http://localhost:3000/api/v1/account/transfer",{
                        to:id,
                        amount
                      },
                      {
                        headers:{
                          Authorization:"Bearer "+localStorage.getItem('token')
                        }
                      })
                      if(response.data.msg=="insufficient balance"){

                        insufficinetNotify()
                      }else{
                        notify()
                      }
                      navigate('/dashboard')
                    
                    }catch(error){
                        errornotify();
                        navigate('/signin')
                    }
                    
                      
                    
                  }}
                  >Initiate transfer</button>
                  
                </div>
              </div>
        </div>
      </div>

    </div>
  )
}

export default SendMoney