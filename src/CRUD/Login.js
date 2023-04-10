import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import Fetchdata from './Fetchdata.json';
import Log from './Log.css';

const Login = () => {
    const [usrname, setUserName] = useState("");
    const [userpassword, setUserPassword] = useState("");
    const [showerror, setError] = useState("");
    const userData = require("./Fetchdata.json");
    //  console.log(userData);


    // const handleName=(event)=>{
    //    console.log(event.target.value);
    //    setUserName(event.target.value);
    // }

    // const handlepassword=(event)=>{
    //     console.log(event.target.value);
    //     setUserPassword(event.target.value);
    //  }
    const Navigate=useNavigate();
    const gotohome =()=>{
     Navigate("/home");
    }


    const handlesubmit=(event)=>{
        event.preventDefault();
        // setError(true)

    const useritem = userData.find((user)=>user.usrname === usrname);
    if(usrname === "" || userpassword === ""){
        setError("Pls Fill all fileds!!!");
    }
    else if(!useritem){
           setError("Input Not Matched!!!")
    }else if(useritem.userpassword !== userpassword){
            setError("Invalid Password!!!");
    }else{
            gotohome();
        }

    };
  return (
    <div>
        <h2>Login Page</h2>
    <div className='logmain'>
    <form onSubmit={handlesubmit}>
        <input type='text' onChange={(event)=>{setUserName(event.target.value)}}  placeholder='Enter User_Name'></input><br />
        {/* {usrname === '' && showerror && <p style={{color:"red"}}>User_Name Required!!!</p>} */}
        <input type='password' onChange={(event)=>{setUserPassword(event.target.value)}}  placeholder='Enter password'></input><br />
        {/* {userpassword === '' && showerror && <p style={{color:"red"}}>Password Required!!!</p>} */}
        {/* <button onClick={()=>gotohome()}>Submit</button> */}
        {/* {!useritem && showerror && <p style={{color:"red"}}> !!Fields Not Matched</p>} */}
        <input type='submit' />
        {showerror && <p style={{color:"red"}}>{showerror}</p>}
    </form>

    </div>


    </div>

  )
}

export default Login