
import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Balance = () => {

  const [balance,setBalance] = useState(0);
  const getBalance = async ()=>{
    const response = await axios.get("http://localhost:3000/api/v1/account/balance",{
      headers:{
        Authorization:"Bearer "+localStorage.getItem("token")
      }
    });
    const data = await response.data.balance;
    console.log(data)
    setBalance(data);
  }

  useEffect(()=>{
    getBalance();
  },[])

  return (
    <div className="flex">
        <div className="font-bold text-lg">
            Your Balance
        </div>
        <div className="font-semibold ml-4 text-lg">
           Rs {balance.toFixed(2)}
        </div>
    </div>
  )
}

export default Balance