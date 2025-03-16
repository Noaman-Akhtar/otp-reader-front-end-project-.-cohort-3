import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [otp, setOp] = useState(new Array(6).fill(''));
  const [isComplete, setIsComplete] = useState(false);
  const inputRefs = useRef([]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOp(newOtp);

    if (element.value !== '' && index < 5) {
      inputRefs.current[index + 1].focus();
    }
    setIsComplete(newOtp.every(slot => slot !== ''));
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerify = () => {
    if (isComplete) {
      alert('OTP verified');
      setOp(new Array(6).fill(''));
      setIsComplete(false);
      inputRefs.current[0].focus();
    }
  }

  return (
    <>
      <div className=' h-screen  bg-[#002b5a]'>
        <div className='flex flex-col justify-center items-center h-screen'>
          <div className='flex'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
            </svg>
            <h1 className='flex text-[#39cec4] mb-16'>
              Webinar <span className='text-white'>.gg</span>
            </h1>          </div>
          <h1 className='text-xl text-white font-semibold '>Check Your Email For A Code</h1>
          <h3 className='text-[#a5b1c2] mt-12 mb-8'>Please enter the verification code sent to your email id akhtarnoaman@gmail.com</h3>
          <div className='flex space-x-2 mb-8'>
            {otp.map((data, index) => (
              <input key={index} type="text" maxLength='1' className="w-12 h-13 text-center text-white bg-[#4F7CAC]  border border-white rounded-2xl focus:outline-none focus:ring-2  focus:ring-blue-500 "
                value={data}
                onChange={e => handleChange(e.target, index)}
                onKeyDown={e => handleKeyDown(e, index)}
                ref={el => inputRefs.current[index] = el}
              />
            ))}
          </div>
          <button className={`w-32 py-2 text-xl text-white rounded-md ${isComplete ? 'bg-green-500 hover:bg-green-700' : 'bg-[#7f95ac] hover:bg-blue-200'
            }`}
            onClick={handleVerify}
            disabled={!isComplete}>Verify </button>

        </div>
      </div>
    </>)
}

export default App;
// import React,{useState} from "react";
// function App(){
//   const [name,setName] = useState("guest");
//   function handleNameChange(event){
//     setName(event.target.value);
//   }
//   return(<div>
//     <input defaultValue="new" onChange={handleNameChange}/>
//     <p>Name:{name}</p>
//   </div>);
// }
// export default App;