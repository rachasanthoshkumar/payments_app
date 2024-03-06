import React, { useState } from "react";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Signin = () => {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const navigate= useNavigate()
  const notify = ()=>{
    toast.success("logged in")
  }
  return (
    <div className="bg-slate-500 h-screen flex justify-center items-center">
      <div className="flex flex-col items-center justify-center  ">
        <div className="bg-white w-80 text-center h-max rounded-lg px-4 py-2">
          <Heading label={"Sign In"}/>
          <SubHeading label={"Enter your credentials to access your account"}/>
          <InputBox onChange={(e)=>setUsername(e.target.value)} label={"Email"} placeholder={"johndoe@example.com"}/>
          <InputBox onChange={(e)=>setPassword(e.target.value)} label={"password"}/>
          <div className="pt-4"> 
          <Button label={"Sign In"} onClick={async ()=>{
            const response = await axios.post("http://localhost:3000/api/v1/user/signin",{
              username,
              password
            })
            const token = await response.data.token;
            localStorage.setItem("token",token)
            notify();
            navigate('/dashboard');
          }


          }/>
          </div>
          <BottomWarning label={"Don't have an account?"} buttonText={"Sign Up"} to={"/signup"}/>
        </div>
      </div>
    </div>
  );
};

export default Signin;
