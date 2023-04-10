import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';


const Home = () => {

  
   const storage = JSON.parse(localStorage.getItem("newarray"));
   const [datas, setdatas] = useState(storage);
  //  console.log(datas)
  //  localStorage.removeItem("newarray");

  
  const removeElement = (id) => {
     setdatas(()=> datas.filter((val, i) => i!== id));
     console.log(datas);
      
  };
  localStorage.setItem("newarray",JSON.stringify(datas));




  const editElement = (info)=>{
    Nav(`/forms?name=${info.name}`)

  }
  
 const Nav = useNavigate();
 const gotoforms = ()=>{
  Nav("/forms")

    }
  return (
    <div>
       <table border="1"> 
       <caption style={{color:"black", fontSize:"25px"}}>User Details</caption>
        <thead>
          <tr>
            <th>ID</th>
           <th>UserName</th>
           <th>UserDescription</th>
           <th>IsCompleted</th>
           <th>Update</th> 
           <th>Delete</th>
           </tr>
    
        </thead>
        <tbody>
          {datas?.map((items,i)=>(<tr key={i}>
            <td>{i+1}</td>
            <td>{items.name}</td>
            <td>{items.description}</td>
            <td>{items.iscomplete}</td>
            <td><button onClick={()=>editElement(items)}>Edit</button></td>
            <td><button onClick={()=>removeElement(i)}>Delete</button></td>
          </tr>))}

        </tbody>
       </table>
        
       <div>
       <button onClick={()=>gotoforms()}>NavigateToForm</button>

       </div>
       
    </div>
  )
}

export default Home