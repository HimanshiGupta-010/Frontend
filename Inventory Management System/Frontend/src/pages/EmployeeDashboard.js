import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//import EmployeeService from '../services/EmployeeService';

const EmployeeDashboard = () => {
  // const { employeeId } = useParams();
  const [employee, setEmployee] = useState(null);

  // useEffect(() => {
  //   getEmployeeDetails();
  // }, []);

  // const getEmployeeDetails = () => {
  //   EmployeeService.getEmployeeById(employeeId)
  //     .then((response) => {
  //       setEmployee(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <div className="container mx-auto mt-5 text-richblack-500 text-center">
      <h2 className=" text-3xl mb-4 text-richblack-200">Employee Details</h2>
      <div className="bg-white p-6 rounded-lg shadow text flex flex-col items-center justify-center">
        {/* {employee ? ( */}
          <>
            <p className="mb-4">
              <strong>Employee ID :- </strong><strong>0801CA211026</strong>
              {/* {employee.id} */}
            </p>
            <p className="mb-4">
              <strong>First Name :- </strong><strong>Himanshi</strong>
              {/* {employee.firstName} */}
            </p>
            <p className="mb-4">
              <strong>Last Name :- </strong> <strong>Gupta</strong>
              {/* {employee.lastName} */}
            </p>
            <p className="mb-4">
              <strong>Email :- </strong> <strong>himanshi@nucleusteq.com</strong>
              {/* {employee.email} */}
            </p>
            <p className="mb-4">
              <strong>Phone Number :- </strong> <strong>9755115014</strong>
              {/* {employee.phoneNumber} */}
            </p>
            <p className="mb-4">
              <strong>Department :- </strong> <strong>IT</strong>
              {/* {employee.department} */}
            </p>
          </>
        {/* ) : (
          <p>Loading employee details...</p>
        )} */}
      </div>
    </div>
  );
};

export default EmployeeDashboard;