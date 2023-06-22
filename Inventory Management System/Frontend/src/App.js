import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import ContactForm from "./components/ContactForm"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import AdminDashboard from "./pages/AdminDashboard"
import { useState } from 'react'
import PrivateRoute from "./components/PrivateRoute";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import ProductHome from "./pages/ProductHome";
import ListEmployee from "./components/ListEmployee";
import AddEmployee from "./components/AddEmployee";



function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
 

  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>

        {/* Product Routes
        <Route path='/' element={<ProductHome />}></Route>
        <Route path='/addProduct' element={<AddProduct />}></Route>
        <Route path='/editProduct/:id' element={<EditProduct />}></Route> */}

        <Route path="/" element= {<Home isLoggedIn={isLoggedIn}/>} />
        <Route path="/about" element= {<About isLoggedIn={isLoggedIn}/>} />
        <Route path="/contact" element= {<ContactForm isLoggedIn={isLoggedIn}/>} />

        <Route path="/login" element = {<Login  setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup  setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/admindashboard" element = {
          <PrivateRoute isLoggedIn={isLoggedIn}>
              <AdminDashboard/>
          </PrivateRoute>
        } />
        <Route path="/employeedashboard" element = {
          <PrivateRoute isLoggedIn={isLoggedIn}>
              <EmployeeDashboard/>
          </PrivateRoute>
        } /> 
        <Route path="/manage-items" element = {
          <PrivateRoute isLoggedIn={isLoggedIn}>
              <ProductHome/>
          </PrivateRoute>
        } /> 

        <Route path="/manage-employees" element = {
          <PrivateRoute isLoggedIn={isLoggedIn}>
              <ListEmployee/>
          </PrivateRoute>
        } /> 

        <Route path="/manage-employees" element = {
          <PrivateRoute isLoggedIn={isLoggedIn}>
              <AddEmployee/>
          </PrivateRoute>
        } /> 

                    <Route exact path = '/' element = {<Login/>} /> 
                    <Route path = '/home' element = {<ListEmployee/>} />
                    <Route path = '/employees' element = {<ListEmployee/>} /> 
                    <Route path = '/add-employee' element = {<AddEmployee/>} />
                    <Route path = '/edit-employee/:id' element = {<AddEmployee/>} />

        

      </Routes> 
    </div>
  )
}

export default App;