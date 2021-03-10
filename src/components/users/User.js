import React, { useState , useEffect} from "react";
import{Link,useParams} from 'react-router-dom';
import axios from "axios";


const User = () => {
    const [user,setUser] = useState({

        name: "",
        email: "",
        phone: "",
        address: ""
    });
    const { id } = useParams();

    useEffect(() =>{
        loadUser();
    },[]);

    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(res.data);
    }

 return(
           <div className="container py-4">
            <Link className="btn btn-primary" to="/">Back to home</Link>
            <h1 className="display-4">User Id: {id}</h1>
            <hr />
            <ul class="list-group w-50">
            <li class="list-group-item">name:{user.name}</li>
            <li class="list-group-item">Email:{user.email}</li>
            <li class="list-group-item">phone:{user.phone}</li>
            {/* <li class="list-group-item">Address:{user.address}</li> */}
            </ul>
        </div>
            
     )
}
export default User;