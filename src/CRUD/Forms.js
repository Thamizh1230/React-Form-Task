import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import Form from './Form.css'

const Forms= () => {
    const [params] = useSearchParams();
    console.log(params.get("name"));
    const [username, setuserName] = useState("");
    const [userdes, setuserDes] = useState("");
    const [iscomplete, checkisComplete] = useState ("");
    const [newarr, setnewArr] = useState(JSON.parse(localStorage.getItem("newarray"))||[]);
    const [formsubmit, setformSubmit] = useState(false);

    useEffect(()=>{
        if(params.get("name")!= null){
            const ele = JSON.parse(localStorage.getItem("newarray"));
            console.log(ele);
            const obj = ele.find((element)=>element.name === params.get("name"));
            console.log(obj);
            setuserName(obj.name);
            setuserDes(obj.description);
            console.log(obj.description);
            checkisComplete(obj.iscomplete);

        }},[params])
    
   
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
        // console.log(username, userdes, iscomplete);
        // emptyarr();
        // console.log(newarr);



        if(params.get("name") == null){
            const newobj = {name:username, description:userdes, iscomplete:iscomplete}
            console.log(newobj);
            setnewArr([...newarr, newobj]);
            //  console.log("hllo",newobj);
            // localStorage.setItem("newarray", JSON.stringify([...newarr, newobj]))
        }else{
            const newvalue = newarr.map(el=>{
                if(el.name ===  params.get("name")){
                    return{name:username, description:userdes, iscomplete:iscomplete};
                }
                    return el;
                
                
            });
            console.log(newvalue);
            setnewArr(newvalue);
            
        }
        



    }
    localStorage.setItem("newarray", JSON.stringify(newarr));

        
        // const data = JSON.parse(localStorage.getItem("newarray"));
        // if(data === null || undefined){   
        //     localStorage.setItem("newarray",JSON.stringify (newarr));
        // }else{
        //     const temp =[...data, { id:Math.floor(Math.random()*10), name:username, description:userdes, iscomplete:iscomplete}]
        //     localStorage.setItem("newarray", JSON.stringify(temp));
        // }




       

         
        

    // const emptyarr = ()=>{
    //     setnewArr([...newarr,{
    //         id:Math.floor(Math.random()*10),
    //         name:username,
    //              description:userdes,
    //               iscomplete:iscomplete}]);
    //     }
        

    // useEffect(()=>{
    //     localStorage.setItem("newarr", JSON.stringify(newarr));
    //     console.log("string");
    //     // localStorage.setItem("Description", JSON.stringify(userdes));
    //     // localStorage.setItem("Iscomplete", JSON.stringify(iscomplete));
    // },[newarr]);

    // localStorage.setItem("newarray", JSON.stringify(newarr));

  

    const Navigate=useNavigate();
     const gotohome =()=>{
        Navigate("/home");
    }
 
  return (
    <div><h2>Form Page</h2>
        <div className='main'>
        <form onSubmit={handlesubmit}>
        <label>Enter User_Name : </label>  <input type="text" onChange={handlename} value={username}/><br />
        {username ==="" && formsubmit && <div style={{color:"red"}}>User_Name Required!!!</div> }
        <label>Enter User_Description : </label> <input type='text' onChange={handledes} value={userdes}/> <br />
        {userdes === "" && formsubmit && <div style={{color:"red"}}>User_Des Required!!!</div>}
       <label>Iscompleted</label> <input type='checkbox'  onChange={handleiscomplete} checked={iscomplete}/> <br />
        <input type='submit' /> 
       
    </form>
    <button onClick={()=>gotohome()}>Navigate To Home</button>
    

        </div>

    </div>
     )
}
export default Forms