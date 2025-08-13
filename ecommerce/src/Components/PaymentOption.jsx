import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
// import QRcode from "../assets/QRCode.jpg"
import { QRCodeCanvas } from "qrcode.react";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AddCardIcon from '@mui/icons-material/AddCard';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';

function PaymentOption() {
    const [QrCode ,setQrCode]=useState(false)
    
    
  
     //for carry final amount from AddToCart.jsx to this page through location.state
    const location=useLocation()
    const {finalAmount}=location.state ||{ finalAmount:0}
const upiLink = `upi://pay?pa=indiancoder8081-1@okhdfcbank&pn=${encodeURIComponent(
    "Tasauvar Ansari"
  )}&am=${finalAmount.toFixed(2)}&cu=INR`;


  return (
    <div className='right pt-30 md:pt-25 px-13 h-[90vh] overflow-scroll flex flex-col my-20 justify-center items-center'>
        <div className='border py-10 px-6 rounded-md w-full md:w-[80%]'>
            <h1 className='text-center font-bold mb-6'>Payment Methods</h1>
          <h1 className='font-semibold'>Total Amount To Pay : {finalAmount.toFixed(2)}</h1>



          <div className='mt-5'>
          <button onClick={()=>setQrCode(true)} className="border flex flex-row gap-8 justify-center items-center border-zinc-500 p-2 w-full mb-2 hover:bg-gray-200"><SensorOccupiedIcon/> UPI</button>
          <button onClick={()=>setQrCode(true)} className="border flex flex-row gap-2 justify-center items-center border-zinc-500 p-2 w-full mb-2 hover:bg-gray-200"><AccountBalanceIcon/> Net Banking</button>
          <button onClick={()=>setQrCode(true)} className="border flex flex-row gap-8 justify-center items-center border-zinc-500 p-2 w-full mb-2  hover:bg-gray-200"><AddCardIcon/> Cards</button>
          </div>
        </div>
       
       {QrCode && (
        <div className="mt-4 p-6 border rounded bg-white w-full md:w-[80%] shadow overflow-hidden flex flex-col justify-center items-center ">
          <p className="mb-2 font-semibold">Scan this QR to pay:</p>
          {/* <p className='text-center '>Amount: {finalAmount.toFixed(0)}</p> */}
          <a href={upiLink} className='text-center my-5 mb-10'>
            <QRCodeCanvas value={upiLink} size={200} className=' py-5'/>
          </a>
        </div>
       )}

    </div>
  )
}

export default PaymentOption