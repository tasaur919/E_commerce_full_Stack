import React, { useState } from 'react'
// import {useNavigate} from 'react-router-dom'

function LogReg() {
    const [userLog,setUserLog]=useState(false);
    const [showForm,setShowForm]=useState(true);
   

    const cross=()=>{
        setShowForm(!showForm);
    }

    const toggle=()=>{
        setUserLog(!userLog)
    }

    function submitRes(e){
      e.preventDefault();
      const formData={
        name:e.target[0].value,
        email:e.target[1].value,
        password:e.target[2].value

      }

      fetch('http://localhost:5000/register',{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(formData)
      }).then(res=>res.json()).then(data=>
      {
         alert("Register Successful",data)
        // console.log(data)
        setUserLog(false)
      }
      );
        
    }

    function submitLog(e){
      e.preventDefault()
      const formData={
        email:e.target[0].value,
        password:e.target[1].value
      };

      fetch('http://localhost:5000/login',{
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(formData)
      }).then(res=>res.json()).then(data=>{
        if(data.token){
          localStorage.setItem("token",data.token);
          alert("Login successfully")
          setShowForm(false)
          
        }
        else{
          alert(data.message)
        }
      });

    }


  return (
    <>
    {showForm && (
    <div className="pt-14 md:pt-20 slice index flex relative flex-col bg-blue-400 w-80 h-[100vh] md:w-96 md:right-0">
        
        <p id="hidden" onClick={cross} className=' absolute text-5xl cursor-pointer right-5' >&times;</p>
        {!userLog?
         <form action="#" onSubmit={submitLog} className=' absolute top-40 left-2 right-2 bg-zinc-400 px-6 rounded-lg '>
        <div id="form" className="form1">
          <h1 className='text-3xl mt-5 mb-8 text-center font-bold'>Login</h1>
          <input type="text" placeholder="Enter your Email" className='bg-zinc-200 w-full rounded-md px-3 text-2xl cursor-pointer' required /><br />
          <input type="password" className='bg-zinc-200 w-full rounded-md px-3 text-2xl mt-6 cursor-pointer' placeholder="Enter password" required /><br />
          <button id="login1" className='bg-green-500 w-full mt-6 text-2xl font-semibold cursor-pointer rounded-md'>Login</button>
          <p className='text-[18px] mb-10 mt-5'>
            Have you not account?<span onClick={toggle} className='text-blue-600 cursor-pointer'>Create an Account</span>
          </p>
        </div>
      </form>
      :
      <form onSubmit={(e)=>{
          
          submitRes(e)
         }} 
         className='absolute top-40 left-2 right-2 bg-zinc-400 px-6 rounded-lg'
         >
      <div className="slice2 ">
        {/* <p id="hidden2" className=' absolute text-5xl cursor-pointer right-5'>&times;</p> */}
        <div id="reg" className="form1">
          <h1 className='text-3xl mt-5 mb-8 text-center font-bold'>Register</h1>
          <input type="text" placeholder="Enter Full name" className='bg-zinc-200 w-full rounded-md px-3 text-2xl cursor-pointer' required /><br />
          <input type="text" placeholder="Enter Email" className='bg-zinc-200 w-full rounded-md px-3 text-2xl cursor-pointer mt-5' required /><br />
          <input type="password" placeholder="Enter password" className='bg-zinc-200 w-full rounded-md px-3 text-2xl cursor-pointer mt-5' required /><br />
          <button id="login1" className='bg-green-500 w-full mt-6 text-2xl font-semibold cursor-pointer rounded-md'>Register</button>
          <p className='text-[18px] mb-10 mt-5'>
            Have you an account?<span onClick={toggle}  className='text-blue-600     cursor-pointer'>Click here to Login</span>
          </p>
        </div>
      </div>
    </form>
}
    </div>
    )}
    </>
    
  )
}

export default LogReg