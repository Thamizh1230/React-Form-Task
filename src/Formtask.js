import React, { useState } from 'react'

const Formtask = () => {
    const [username, setuserName] = useState("");
    const [userdes, setuserDes] = useState("");
    const [iscomplete, checkisComplete] = useState ("");
    const [newarr, setnewArr] = useState([]);
    const [formsubmit, setformSubmit] = useState(false);

    const handlename =(e)=>{
        console.log(e.target.value);
        setuserName(e.target.value);
    }
    const handledes = (e)=>{
        console.log(e.target.value);
        setuserDes(e.target.value);

    }
    const handleiscomplete =(e)=>{
        console.log(e.target.checked);
        checkisComplete(e.target.checked ? "YES" : "NO");
    }
    const handlesubmit = (e) =>{
        e.preventDefault();
        setformSubmit(true);
        if(username === "" || userdes === ""){
            return
        }
        console.log(username, userdes, iscomplete);
        emptyarr();
        
    }
    const emptyarr = ()=>{
        setnewArr([...newarr,{name:username, des:userdes, complete:iscomplete}]);
        console.log(newarr);

    }
 
  return (
    <div>
         <form onSubmit={handlesubmit}>
        <input type="text" placeholder='Enter User_Name'  onChange={handlename} /><br />
        {username ==="" && formsubmit && <div style={{color:"red"}}>User_Name Required!!!</div> }
        <input type='text' placeholder='Enter User_des' onChange={handledes} /> <br />
        {userdes === "" && formsubmit && <div style={{color:"red"}}>User_Des Required!!!</div>}
       <label>Iscompleted</label> <input type='checkbox'  onChange={handleiscomplete} /> <br />
       <input type='submit' />
    </form>
        <h2>User_Details</h2>{newarr.map((item, index)=><ul key={index}><li><b>Name:</b>{item.name}{""} <b>Description:</b>{item.des}{""} <b>Iscomplete:</b>{item.complete}</li></ul>)}
    </div>
     )
}

export default Formtask