import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const AddUser = () => {
let history = useHistory();
    const [user,setUser] = useState({

        name: "",
        email: "",
        phone: "",
        address: {city:""}
    });
   console.log(user);
    const {name,email,phone,address} = user;


    const onInputChange = (e)=> {
      if(e.target.name === "address"){
        setUser({...user,[e.target.name]:{city: e.target.value}});
      } else{
      setUser({...user,[e.target.name]: e.target.value});
      } 
    };

    const onSubmit= async e => {
        e.preventDefault();
        await axios.post("http://localhost:3003/users",user);
        history.push("/")

    };

    return(
        <div className="container py-4">
            <div className="w-75 mx-auto shadow p-5" >
                <h2 className="text-center mb-4">Add A User</h2>
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
    type="email" 
    class="form-control form-control-lg" 
    placeholder="Enter your email Address"
    id="exampleInputEmail1" 
    aria-describedby="emailHelp"
    name="email"
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
    value ={address.city}
    onChange={e =>onInputChange(e)}
     />
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
            </div>
        </div>
    )
}

export default AddUser;