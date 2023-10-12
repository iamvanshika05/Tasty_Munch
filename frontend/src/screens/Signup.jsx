import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar';

function Signup() {

    const [credentials,setcredentials ]= useState({
        name:"",
        email:"",
        password:"",
        geolocation:"" 
    });

    let  navigate = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault();    //synthetic event
        const response =await fetch("http://localhost:8000/api/createuser",{
            method :'POST',
            headers :{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location: credentials.geolocation 
            }) //yh vale naam mongodb ki field s match krne chhciy

        });
        const json = await response.json()
        console.log(json);
        
        if(!json.success){           //agr iski value false hoti h
            alert("Enter Valid Credentials");
        }else{
            alert("Successfully submitted details")
            navigate("/");
        }

    }
    const onChange = (event)=>{
        setcredentials({...credentials,[event.target.name]:event.target.value})
    }

  return (
    <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize: 'cover',height: '100vh' }}>
    <div>
    <Navbar />
    </div>

      <div className='container' >
        <form className='w-50 m-auto mt-5 border bg-dark border-success rounded' onSubmit={handleSubmit}>
          <div className="m-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} aria-describedby="emailHelp" />
          </div>
          <div className="m-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
          </div>
          <div className="m-3">
    <label htmlFor="address" className="form-label">Address</label>
    <input type="text" className="form-control" name='geolocation'  value ={credentials.geolocation} onChange={onChange}/>
</div>
          <div className="m-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" value={credentials.password} onChange={onChange} name='password' />
          </div>
          <button type="submit" className="m-3 btn btn-success">Submit</button>
          <Link to="/login" className="m-3 mx-1 btn btn-danger">Already a user</Link>
        </form>
      </div>
    </div>
  )
}

export default Signup