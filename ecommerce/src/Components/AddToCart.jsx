import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



function AddToCart({ cart1,setCart1 }) {
    
    function RemoveItem(removeIndex){
          const updateCart=cart1.filter((_,index)=>index !== removeIndex)
          setCart1(updateCart)
    }
    
//for Pay button
const navigate=useNavigate();
    
        
    

  return (
    <div className="px-13 pt-32 md:pt-28">
      <h2 className="text-2xl font-bold mb-4 text-center">Your Cart</h2>
      {cart1.length === 0 ? (
        <p className="text-red-500 justify-center py-20 items-center text-center text-3xl font-semibold h-[80vh]">Your cart is empty.</p>
      ) : (
        <div className='flex flex-col md:flex-row gap-6 pt-10 h-[90vh]'>
        <div className="grid gap-4 w-full md:w-[65%]  md:h-32">
          {cart1.map((item, index) => (
            <div key={index} className="flex flex-row gap-8 justify-between border py-6 px-8 mb-10">
              <img src={item.image} alt={item.name} className="h-32 w-36" />
              <div className='flex flex-col w-[50%] '>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <h4 className='text-[16px] font-thin'>{item.description}</h4>
              <p className="text-gray-600 font-bold">Price: ₹{item.price}</p>
              </div>
              <div className='flex flex-col pr-10 justify-between items-center'>
                   <button className='text-3xl font-bold cursor-pointer' onClick={()=>RemoveItem(index)}>&times;</button>
                   {/* <button className='cursor-pointer bg-green-500 text-white text-2xl px-3 py-1 rounded-md font-semibold'>Buy</button> */}
              </div>
            </div>
          ))}
        </div>

       <div className='md:w-[30%] w-full '>
            <div className='bg-zinc-200 flex flex-col p-10 rounded-md justify-center items-center py-6 px-5 mb-10'>
                <h1 className='text-center text-2xl font-semibold font-serif'>Total Amount Details</h1>

                <div className='flex flex-col gap-2'>
                    <p>Number of Products : {cart1.length}</p>
                    {cart1.map((item)=>(
                        <div>
                        
                        <p className='font-thin text-[12px]'>Name:{item.name}</p>
                        <p className='text-[14px]'>Price : {item.price}</p>
                        </div>
                    ))}
                  {/* for total price */}
          {(()=>{
              const totlaPrice=cart1.reduce((sum,item)=>sum+item.price,0)
              const discount=totlaPrice*0.1 //10%discount
              const gst=(totlaPrice-discount)*0.18 //18% GST
              const finalAmount=totlaPrice-discount +gst

              return(
                <>
                  <p>Discount : {discount.toFixed(2)}</p>  
                    <p>GST : {gst.toFixed(2)}</p>
                    <p>Total Amount : {finalAmount.toFixed(2)}</p>
                </>
              )

            })()}
            <button className='bg-green-500 cursor-pointer rounded-lg w-full mt-2 py-1 hover:text-white font-semibold'  onClick={() => {
    const totlaPrice = cart1.reduce((sum, item) => sum + item.price, 0);
    const discount = totlaPrice * 0.1; 
    const gst = (totlaPrice - discount) * 0.18;
    const finalAmount = totlaPrice - discount + gst;

    navigate("/payment", { state: { finalAmount } });
  }}>Pay Now</button>

                </div>
            </div>
       </div>
</div>
      )}
    </div>
    
  );
}

export default AddToCart;