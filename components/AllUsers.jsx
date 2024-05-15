"use client"
import Image from "next/image";
import axios from 'axios';
import { useState, useEffect } from "react";

const UsersUi = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/api/home');
        console.log(res.data);
        setUsers(res.data); // Update state with data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="">
      <div>
        {users && users.map((user) => {
          return <div key={user.id}>
            <div>
              <h1>{user.name}</h1>
            </div>
          </div>
        })}
      </div>
    </div>
  );
}

export default UsersUi;