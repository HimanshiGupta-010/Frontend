import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const AddEmployee = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const[accountType, setAccountType] = useState('employee')

  const navigate = useNavigate();
  const { id } = useParams();

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();
    const employee = { name, email, address, phone };

    if (id) {
      // Update employee logic
    } else {
      // Create employee logic
    }
  };

  useEffect(() => {
    // Fetch employee details logic
  }, []);

  const title = () => {
    if (id) {
      return <h2 className="text-center">Update Employee</h2>;
    } else {
      return <h2 className="text-center">Add Employee</h2>;
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="max-w-md mx-auto bg-white p-8 border border-gray-300 shadow-md rounded-lg">
        {title()}
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email ID
            </label>
            <input
              type="email"
              placeholder="Enter Email Id"
              name="email"
              className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              placeholder="Enter Address"
              name="address"
              className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="text"
              placeholder="Enter Contact Number"
              name="phone"
              className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="flex justify-between">
            <button
              className="bg-green-500 text-white py-2 px-4 rounded-md"
              onClick={(e) => saveOrUpdateEmployee(e)}
            >
              Submit
            </button>
            <Link
              to="/employees"
              className="bg-red-500 text-white py-2 px-4 rounded-md"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  )}

  export default AddEmployee;


// import React, { useEffect } from 'react';
// import {useState} from 'react';
// import {Link} from 'react-router-dom';
// import {useNavigate} from 'react-router-dom';
// import { useParams } from "react-router-dom";
// //import EmployeeService from '../Services/EmployeeService';

// const AddEmployeeComponent = () => {

//     const[name, setName] = useState('')
//     const[email, setEmail] = useState('')
//     const[address, setAddress] = useState('')
//     const[phone, setPhone] = useState('')
//     const[accountType, setAccountType] = useState('employee')

//     const navigate = useNavigate();
//     const {id} = useParams();


    
//         const saveOrUpdateEmployee = (e) => {
//             e.preventDefault();
    
//             const employee = {name, email, address, phone, accountType}

//             if(id)
//             {
//         // EmployeeService.updateEmployee(id, employee).then((response) => {
//         //     navigate('/employees')
//         // }).catch(error => {
//         //     console.log(error);
//         // })
    
//     }
//     else
//     {
    
//             // // console.log(employee);
//             // EmployeeService.createEmployee(employee).then((response) => {
    
//             //     console.log(response.data)
//             //     navigate('/employees')
    
//             // }).catch(error => {
//             //     console.log(error)
//             // })
//         }
//     }
    

//     useEffect(() => {
//         // EmployeeService.getEmployeeById(id).then((response) => {
//         //     setName(response.data.name)
//         //     setEmail(response.data.email)
//         //     setAddress(response.data.address)
//         //     setPhone(response.data.phone)
//         // }).catch(error => {
//         //     console.log(error)
//         // })
//     }, [])

//   const title = () => {
//     if(id){
//         return <h2 className='text-center'>Update Employee</h2>
//     }
//     else{
//         return <h2 className='text-center'>Add Employee</h2>
//     }
//   }

//   return (
// <div>
// <br/>
// <br/>
//     <div className = 'container'>
//         <div className = 'row'>
//             <div className = 'card col-md-6 offset-md-3 offset-md-3'>
//                 {
//                     title()
//                 }
//                 <div className = 'card-body'>
//                     <form>
//                         <div className='form-group mb-2 '>
//                             <label className='form-label'> Name </label>
//                             <input
//                                 type='text'
//                                 placeholder="Enter Name"
//                                 name = "name"
//                                 className='form-control'
//                                 value={name}
//                                 onChange={(e) => setName(e.target.value)}
//                             >
//                             </input>
//                         </div>

//                         <br/>
                        

//                         <div className='form-group mb-2 '>
//                             <label className='form-label'> Email ID </label>
//                             <input
//                             required
//                                 type='email'
//                                 placeholder="Enter Email Id"
//                                 name = "email"
//                                 className='form-control'
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                             >
//                             </input>
//                         </div>

//                         <br/>
                
                        
//                         <div className='form-group mb-2 '>
//                             <label className='form-label'> Address </label>
//                             <input
//                                 type='text'
//                                 placeholder="Enter Address"
//                                 name = "address"
//                                 className='form-control'
//                                 value={address}
//                                 onChange={(e) => setAddress(e.target.value)}
//                             >
//                             </input>
//                         </div>

//                         <div className='form-group mb-2 '>
//                             <label className='form-label'> Phone </label>
//                             <input
//                                 type='text'
//                                 placeholder="Enter Contact Number"
//                                 name = "phone"
//                                 className='form-control'
//                                 value={phone}
//                                 onChange={(e) => setPhone(e.target.value)}
//                             >
//                             </input>
//                         </div>
                        
                        
//                         <br/>
                       

//                         <button className='btn btn-success' onClick={(e) => saveOrUpdateEmployee(e)}>Submit</button>
//                         <Link to='/employees' className='btn btn-danger'>Cancel</Link>

//                     </form>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
//   )
// }

// export default AddEmployeeComponent