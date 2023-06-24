import React, { useEffect } from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { useParams } from "react-router-dom";
import ItemService from '../services/ItemService';
import { toast } from 'react-hot-toast';

const AddItem = () => {

    const[name, setname] = useState('')
    const[status, setStatus] = useState(false)
    const navigate = useNavigate();
    const {id} = useParams();


    
    const saveOrUpdateItem = (e) => {
        e.preventDefault();
        
        if(id)
        {
            const item = {name, status}
            ItemService.updateItem(id, item).then((response) => {
                toast.success('Item Details Updated');
            navigate('/list-items')
            }).catch(error => {
                console.log(error);
            })
        }
        else
        {
            // console.log(employee);
            const status = false;
            const item = {name, status}
            ItemService.createItem(item).then((response) => {
                console.log(response.data)
                toast.success('Item Added');
                navigate('/list-items')
            }).catch(error => {
                console.log(error)
            })
        }
    }
    
    useEffect(() => {
        ItemService.getItemById(id).then((response) => {
            setname(response.data.name)
            setStatus(response.data.status)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {
        if(id){
            return <h2 className='text-center'>Update Item</h2>
        }
        else{
            return <h2 className='text-center'>Add Item</h2>
        }
    }

    return (
        <div className="bg-dark min-vh-100 py-4">
            <br/>
            <br/>
            <div className = 'container'>
                <div className = 'row'>
                    <div className = 'card col-md-6 offset-md-3 offset-md-3'>
                    {
                        title()
                    }
                        <div className = 'card-body'>
                            <form>
                                <div className='form-group mb-2 '>
                                    <label className='form-label'> Item Name </label>
                                    <input
                                    type='text'
                                    placeholder="Enter Item Name"
                                    name = "name"
                                    className='form-control'
                                    value={name}
                                    onChange={(e) => setname(e.target.value)}>
                                    </input>
                                </div>
                                <br/>
                                <br/>
                                <br/>
                                <button className='btn btn-success' onClick={(e) => saveOrUpdateItem(e)}>
                                    Submit
                                </button>
                                <Link to='/list-items' className='btn btn-danger' style={{ marginLeft: "10px" }}>
                                    Cancel
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddItem;