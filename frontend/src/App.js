import './App.css';
import AdminDashboard from './components/AdminDashboard';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import ListEmployee from './components/ListEmployee';
import Assign from './components/Assign';
import AddEmployee from './components/AddEmployee';
import ListItem from './components/ListItems';
import AddItem from './components/AddItem';
import ListAssignedItems from './components/ListAssignedItems';
import ListUnassignedItems from './components/ListUnassignedItems';

function App() {
  return (
    <div className="App bg-dark min-vh-100 py-4">
   
        <Routes>
          <Route path='/' element={<AdminDashboard/>}/>
          <Route path="/assign-unassign-item" element={<ListEmployee/>}/>
          <Route path= '/add-employee' element = {<AddEmployee/>} />
          <Route path="/assign/:id" element={<Assign/>}/>
          <Route path= '/edit-employee/:id' element = {<AddEmployee/>} />
          <Route path='/list-items' element = {<ListItem/>}/>
          <Route path='/add-item' element= {<AddItem/>}/>
          <Route path= '/edit-item/:id' element = {<AddItem/>} />
          <Route path= '/assigned-items' element = {<ListAssignedItems/>}/>
          <Route path= "/unassigned-items" element = {<ListUnassignedItems/>}/>
        </Routes>
    
    </div>
  );
}

export default App;
