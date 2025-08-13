import React from "react";

function CardProd({item, index,addToCart}) {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* {query? <CardProd item={item.name}/>: */}
      <div className="relative w-[360px] h-[430px] md:w-[200px] md:h-[300px] border-1 rounded-md cursor-pointer ">
       
        <img
          src={item.image}
          alt=""
          className="absolute top-0 h-[55%] w-full p-2"
        />
        <div className="flex flex-col absolute bottom-2 px-5 text-3xl md:text-[16px]">
          <span className="font-semibold pt-5">{item.name}</span>
          <span className='text-start font-thin'> {item.description}</span>
          <br />
          <div className="flex flex-row justify-between  items-center">
          <span className="font-bold mb-2">₹ {item.price}</span>
          <span className="font-semibold bg-green-500 p-1 rounded-lg px-2 text-white mb-2 cursor-pointer" onClick={()=>addToCart(item)}><button>+Add</button></span>
          </div>
        </div>
        
      </div>
      {/* } */}
    </div>
  );
}

export default CardProd;
