import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios';
//import {logIn} from '../services/UserService';
//import axios from 'axios';



const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState( {
        email:"", password:""
    })

    const [accountType, setAccountType] = useState("employee");

    const[showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {

        setFormData( (prevData) =>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ) )

    }

    function submitHandler(event) {
        event.preventDefault();

        //validate email field
        const allowedDomain = 'nucleusteq.com';
        const emailRegex = new RegExp(`^[A-Za-z0-9._%+-]+@${allowedDomain}$`);
        if (!emailRegex.test(formData.email)) {
            toast.error(`Please enter a valid email with the domain ${allowedDomain}`);
            return;
        }

        
        //validate password field
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[a-zA-Z\d!@#$%^&*()]{8,}$/;
        if (!passwordRegex.test(formData.password)) {
            toast.error("Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long");
            return;
        }
        
        const accountData = {
            ...formData
            };
            
            const finalData = {
                ...accountData,
                accountType
            }

            console.log(finalData)
        
        setIsLoggedIn(true);
        toast.success("Logged In");
        // console.log("Printing the formData ");
        // console.log(formData)
        // console.log(accountType)
        
        
         //call server api for sending data
        const param1 = encodeURIComponent(JSON.stringify(finalData.email));
        const param2 = encodeURIComponent(JSON.stringify(finalData.password));
        const param3 = encodeURIComponent(JSON.stringify(finalData.accountType));

        const res = fetch('http://localhost:9090/api/users/login?email=${param1}&password=${param2}&accountType=${param3}', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },        
        })
       .then((response) => response.json())
       .then((responseJson) => {
           console.log('success log');
       })
       .catch((error) => {
           console.error('error log');
       });

// axios.post(`http://localhost:9090/api/users/login?email=${param1}&password=${param2}&accountType=${param3}`, {}, {
//   headers: { 'Content-Type': 'application/json' },
// })
//   .then((response) => {
//     console.log('success log', response.data);
//   })
//   .catch((error) => {
//     console.error('error log', error);
//   });

// axios.post('http://localhost:9090/api/users/login', {
//     email: param1,
//     password: param2,
//     accountType: param3
// }, {
//     headers: {
//         'Content-Type': 'application/json'
//     }
// })
//     .then((response) => {
//         console.log('success log', response.data);
//     })
//     .catch((error) => {
//         console.error('error log', error);
//     });



        if(formData.password === "H#1Ga7i@")
        {
            navigate("/admindashboard");
        }
        else
        {
            navigate("/employeedashboard");
        }
        
    }

  return (
    <form onSubmit={submitHandler}
    className="flex flex-col w-full gap-y-4 mt-6">

    {/* employee-admin tab */}
    <div
        className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>

            <button
            className={`${accountType === "employee" 
            ?
              "bg-richblack-900 text-richblack-5"
              :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
              onClick={()=> setAccountType("employee")}>
                Employee
            </button>

            <button
            className={`${accountType === "admin" 
            ?
              "bg-richblack-900 text-richblack-5"
              :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
              onClick={() => setAccountType("admin")}>
                Admin
            </button>
        </div>

        <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Email Address<sup className='text-pink-200'>*</sup>
            </p>
            <input 
                required
                type="email"
                value = {formData.email}
                onChange={changeHandler}
                placeholder="Enter email address"
                name="email"
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
        </label>

        <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Password<sup className='text-pink-200'>*</sup>
            </p>
            <input 
                required
                type= {showPassword ? ("text") : ("password")}
                value = {formData.password}
                onChange={changeHandler}
                placeholder="Enter Password"
                name="password"
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />

            <span 
            className='absolute right-3 top-[38px] cursor-pointer'
            onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? 

                (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 

                (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
            </span>

        </label>

        <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
            Sign In
        </button>

    </form>
  )
}

export default LoginForm