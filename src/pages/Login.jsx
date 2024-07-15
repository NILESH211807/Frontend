import React, { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { serverUrl } from '../helper/helper';

const Login = () => {

   const phone = useRef('');
   const password = useRef('');
   const navigate = useNavigate();

   const submitForm = async (event) => {
      event.preventDefault();
      const inputValues = {
         phone: phone.current.value,
         password: password.current.value
      }

      try {
         const response = await fetch(`${serverUrl}/api/auth/login`, {
            method: "POST",
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputValues),
         });

         const result = await response.json();
         if (result.message === "login successful") {
            toast.success('Login Successfully');
            const token = result.token;
            navigate('/');
            localStorage.setItem('token', token);
         } else {
            toast.error(result.message);
         }
      } catch (error) {
         toast.error('internal server error');
      }
   }


   return (
      <>
         <div className="w-full bg-[#111423] h-screen text-white flex flex-col items-center pb-20 px-10">
            <div className="pt-40 md:pt-10 w-full md:w-96">
               <h1 className="text-lg md:text-xl text-center font-bold uppercase tracking-wider">Login Account</h1>
               <form method="POST" className="mt-10">
                  <input ref={phone} type="text" className="w-full h-16 outline-none border-none my-2 bg-[#0e101b] px-5 tracking-wider rounded-md" name="phone" id="phone" placeholder="Enter Phone" />
                  <input ref={password} type="password" className="w-full h-16 outline-none border-none my-2 bg-[#0e101b] px-5 tracking-wider rounded-md" name="password" id="password" placeholder="Enter Password" />
                  <button className="btn mb-10 btn-primary bg-[#db4c71] w-full h-16 uppercase font-bold mt-5 rounded-md" type="submit" onClick={submitForm}>Submit</button>
                  <div>
                     <NavLink className="uppercase text-sm font-bold tracking-wider" to='/register'>
                        <span>Create New Account</span>
                     </NavLink>
                  </div>
               </form>
            </div>
         </div>
      </>
   )
}

export default Login;