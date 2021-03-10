import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory,useParams } from "react-router-dom";


const EditUser = () => {
let history = useHistory();
const { id } = useParams();
    const [user,setUser] = useState({

        name: "",
        email: "",
        phone: "",
        address: ""
    });

    const {name,email,phone,address} = user;
    const onInputChange = (e)=> {
      setUser({...user,[e.target.name]: e.target.value});
    };
    useEffect(() =>{
        loadUser();
    },[]);

    const onSubmit= async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3003/users/${id}`,user);
        history.push("/")

    };

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data);
    }

    return(
        <div className="container py-4">
            <div className="w-75 mx-auto shadow p-5" >
                <h2 className="text-center mb-4">Edit A User</h2>
                <form onSubmit={e => onSubmit(e)}>
  <div class="mb-3">
    
    <input 
    type="text" 
    className="form-control form-control-lg"
    placeholder="Enter a name"
    name="name"
    value={name}
    onChange={e =>onInputChange(e)}
     />
    
  </div>
  <div class="mb-3">
    
  <input 
    type="text" 
    class="form-control form-control-lg" 
    placeholder="Enter your email Address"
    id="exampleInputEmail1" 
    aria-describedby="emailHelp"
    email="email"
    value={email}
    onChange={e =>onInputChange(e)}
     />
  </div>
  <div class="mb-3">
    
  <input 
    type="text" 
    class="form-control form-control-lg" 
    placeholder="Enter your mobile No"
    name="phone"
    value ={phone}
    onChange={e =>onInputChange(e)}
     />
  </div>
  <div class="mb-3">
  <input 
    type="text" 
    class="form-control form-control-lg" 
    placeholder="Enter your Address"
    name="address"
    value ={address}
    onChange={e =>onInputChange(e)}
     />
  </div>
  
  <button type="submit" class="btn btn-warning  btn-block">Update User</button>
</form>
            </div>
        </div>
    )
}

export default EditUser;