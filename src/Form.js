import React, { useState } from 'react'

const Form = () => {
    const [username, setName]= useState("");
    const[userdes, setDes] = useState("");
    const [formsubmit, setformSubmit] = useState(false);

    // const nameChange=(e)=>{
    //     console.log(e.target.value);
    //     setName(e.target.value);
    // }
    // const deschange=(e)=>
    // {
    //     console.log(e.target.value);
    //     setDes(e.target.value);
    // }

    const handleChange=(e)=>
    {
        console.log(e.target.value, e.target.name);
        if(e.target.name === 'name'){
            setName(e.target.value);
        }else
      
        setDes(e.target.value);
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        setformSubmit(true);
        if(username === ' ' || userdes === " "){
            return
        }
        console.log(username, userdes);

    }
  return (
    <div>
        <form  onSubmit={handleSubmit}>
            {/* <input onChange={nameChange}/>
            <input onChange={deschange}/> */}
            <input name="name" value={username} onChange={handleChange} placeholder="User_Name" />
            {username ==="" && formsubmit && <div>User_Name Required</div> }
            <input name="des" value={userdes} onChange={handleChange} placeholder="User_Des" />
            {userdes ==="" && formsubmit && <div>User_Des Required</div> }
            <input type={"submit"} />
            
        </form>
    </div>
  )
}

export default Form