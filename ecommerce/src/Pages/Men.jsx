import React, { useState } from 'react'
import { Dummydata } from '../Dummydata'
import CardProd from '../Components/CardProd';

function Men({query ,addToCart}) {
  // console.log('hello');
  
  const [fashion,setFashion]=useState(Dummydata);
  //  console.log("query",query)
  function filteMenProduct(cate){
           const updateProduct=Dummydata.filter((item)=>item.category==cate)
           setFashion(updateProduct);
  }
const updateQuery=Dummydata.filter((product)=>product.name.toLowerCase().includes(query))//use category  on place of DummyData
  // console.log(updateQuery);
  const showProducts=query?updateQuery:fashion

  return (
    <div>
      <div className="main flex flex-col mx-13 pt-14 md:pt-20">
        <h1 className='text-center text-3xl font-bold font-sans py-5'>Men's Collection</h1>
        <hr className='w-[100%] pt-5 pb-10 opacity-12'/>
        <div className='flex flex-row justify-center items-center gap-10 text-2xl font-semibold mb-3'>
          <a href="./men" onClick={(e)=>{
            e.preventDefault();
            setFashion(Dummydata);
          }}>All</a>
          
          <a href="./men"
          onClick={(e)=>{
            e.preventDefault()
            filteMenProduct("Men")
          }}
          >Mens</a>
          <a href="./women" onClick={(e)=>{
            e.preventDefault()
            filteMenProduct("Women")
          }}>Women</a>
          <a href="./baby" onClick={(e)=>{
            e.preventDefault()
            filteMenProduct("Baby")
          }}>Baby's</a>
        </div>
        <hr className='w-[100%] pb-10 opacity-10'/>
        {showProducts.length>0?(
        <div className='flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 py-10'>
          {showProducts.map((item,index)=>(
            <CardProd key={index} item={item} addToCart={addToCart}/>
          ))}
        </div>):(
              <p className='text-center text-red-500 font-semibold mt-5 mb-6'>No products found</p>
              )
}
      </div>

    </div>
  )
}

export default Men