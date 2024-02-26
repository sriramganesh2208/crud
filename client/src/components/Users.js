import axios from "axios";
import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom";
 import "./User.css"


 

function Users() {
    const {id} = useParams()
     
      const [data, setData] = useState([])
    
      
      const [query,setQuery] =useState("")
      //important line
      console.log( data.filter(emp => emp.name.toLowerCase().includes(query)))
    const navigate = useNavigate()

  //
   
      useEffect(()=> {
        axios.get('/api/')
        .then(res => {
            console.log(res);
          setData(res.data);
        })
        .catch(err => console.log(err));
      }, [])
   
    const handleDelete = (id) => {
        axios.delete('/api/deleteuser/'+id)
        .then(res => {
            console.log(res)
            navigate('/')
        }).catch(err => console.log(err))
    }
  
 
  return (
    <div className="all">
      <div className="inside">
        <Link to="/create" className="btn btn-success btn-sm">
          Add +
        </Link>
    <div className="inside-1">
    <input type='text' placeholder="Enter Name" value={query} onChange={(e)=> setQuery(e.target.value)}/>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
                      data.filter((emp)=>emp.name.toLowerCase().includes(query)).map((user, index) => {
                    return <tr key={index}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                        <td>
                            <Link to={`/edit/${user._id}`} className="btn btn-sm btn-success me-2">Update</Link>
                           
                            <button onClick={() => handleDelete(user._id)} className="btn btn-sm btn-danger">Delete</button>
                        </td>
                    </tr>
                        })

               ): (
                <tr>
                    <td colSpan={7}>No Employees</td>
                </tr>
            )} 
                </tbody>
        </table>

       

    </div>
      
      </div>
    </div>
  );
}
 
export default Users;