import React, { useState } from 'react'
import homeHero from '../assets/bg0.gif' 
import {Dummydata} from '../Dummydata'
import Category from '../Category'
import CardProd from '../Components/CardProd';
function Home({query,addToCart}) {
  const [category,setCotegory]=useState(Dummydata);
  // console.log(query)
  // console.log(category);
  function filterProduct(cate){
    const updatCate=Dummydata.filter((item)=>item.category==cate)
    setCotegory(updatCate)
  }

  const updateQuery=Dummydata.filter((product)=>product.name.toLowerCase().includes(query))//use category  on place of DummyData
  
  const showProducts=query?updateQuery:category
  return (
    <div className='pt-14 md:pt-20'>

        <div className=' flex justify-center items-center left-2 right-2 py-1'>
            <img src={homeHero} alt="Home page"  className='rounded-md shadow-zinc-800'/>
        </div>

{/* show categorical data */}
        <div className='category-section flex flex-row py-5 justify-evenly items-center flex-wrap mt-10 gap-y-2'>
        {Category.slice(0,5).map((item)=>(
          <div key={item.name} className=' border-zinc-600 w-[8rem] h-[11rem] flex flex-col justify-center items-center hover:rounded-md hover:border-1 hover:border-zinc-500 hover:shadow-lg transition-all duration-300 p-2  rounded-md cursor-pointer' onClick={()=>{
            filterProduct(item.name)
          }}>
            <img src={item.image} alt="hello" className='mt-5'/>
            <span className='text-center font-bold py-1'>{item.name}</span><br />
            
          </div>
        ))}
        
        </div>

{/* products  show by filtered data*/}
<div className='w-full border-1 opacity-10 bg-zinc-500'></div>
          <div className='mt-10 '>
            <h2 className='text-center text-2xl font-bold'>Trending Products</h2>
            {showProducts.length>0?
             
              <div className='flex flex-wrap  mt-10 gap-10 mb-15 justify-center items-center'>
              {showProducts.map((item,index)=>(
                
                <CardProd key={index} item={item} addToCart={addToCart}/>
                
              ))}
              </div>
              
              :(
              <p className='text-center text-red-500 font-semibold mt-5 mb-6'>No products found</p>
              )}
            </div>
          

    </div>
  )
}

export default Home