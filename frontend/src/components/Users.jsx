import React, { useEffect, useState } from "react";
import axios from "axios";

import User from "./User";
const Users = () => {

    const [users,setUsers] = useState([])
    const [filter,setFilter] = useState([])
    const getData = async()=>{

      const response =await axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`);
      const data = await response.data.user;
      setUsers(data)
    }
    useEffect(()=>{
      
      getData();
    },[filter])
  return (
    <>
      <div className="font-bold mt-6 text-lg">Users</div>
      <div className="my-2">
        <input
        onChange={(e)=>setFilter(e.target.value)}
          type="text"
          placeholder="Search users..."
          className="w-full px-2 py-1 border rounded border-slate-200 focus:outline-none"
        ></input>
      </div>
      <div>
        {users.map((user) => (
          <User user={user} />
        ))}
      </div>
    </>
  );
};



export default Users;
