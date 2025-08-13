import React, { useState } from "react";
import womenchild from "../assets/womenChild.avif";
import rklogo from "../assets/rklogo.jpg";
import CardProd from "../Components/CardProd";
import Category from "../Category";
import { Dummydata } from "../Dummydata";

function About() {
  const [category,setCategory]=useState(Dummydata)

  function filterProduct(cate){
    const updateCate=Dummydata.filter((item)=>item.category==cate)
    setCategory(updateCate);
  }

  return (
    <div className="px-11 pt-14 md:pt-20">
      <div className="top  flex flex-col md:flex-row flex-wrap md:h-[90vh]  gap-10 md:gap-0  justify-center mt-10 items-center">
        <div className="left w-[80%] md:w-[30%] h-full py-6  overflow-auto bg-zinc-100 order-3 md:order-1">
          <h2 className="opacity-40 pl-2 items-center">NEWSFEED</h2>
          <div className="w-[100%] bg-zinc-400 h-[1px] mb-10"></div>
          <ul className="flex flex-col gap-10">
            <li className="flex flex-col gap-[5px] px-2 ">
              <a href="">
                RK to launch fulfilment all needs centre in Uttar-Pradesh,Delhi
                and Mumbai
              </a>
              <br />
              <span> 6 Jul 2025</span>
            </li>
            <hr className="opacity-20" />
            <li className="flex flex-col gap-[5px] px-2 ">
              <a href="">
                RK India launches at-home diagnostics service across 5 cities
              </a>
              <br />
              <span> 4 Jul 2025</span>
            </li>
            <hr className="opacity-20" />
            <li className="flex flex-col gap-[5px] px-2 ">
              <a href="">RK shop provided job to cell products and delivers</a>
              <br />
              <span> 3 Jul 2025</span>
            </li>
            <hr className="opacity-20" />
            <li className="flex flex-col gap-[5px] px-2 ">
              <a href="">RK shop fulfilment 5 new centres in India</a>
              <br />
              <span> 1 Jul 2025</span>
            </li>
            <hr className="opacity-20" />
            <li className="flex flex-col gap-[5px] px-2 ">
              <a href="">
                Best Products provided likes Electronics, diagnostics ,cloths
                and so on.
              </a>
              <br />
              <span> 30 Jun 2025</span>
              <hr className="opacity-20" />
            </li>
          </ul>
        </div>
        {/* center */}
        <div className="center w-[80%] md:w-[40%] pb-4 h-full bg-zinc-200 order-1 md:order-2">
          <div  className="flex flex-col gap-5 ">
            <img src={rklogo} alt="" className="h-[50%] " />
            <h1 className="px-3 text-2xl font-semibold">RK Shop produce New veraity of Products and affortable using new technology and methodology</h1>
            <p className="px-3"> RK Shop Ecommerce based design of web application in which any one can visite this application easily and shop product at-home. </p>
            <a href="" className="px-3 text-blue-500">...Read more</a>
          </div>
        </div>
        {/* righ  */}
        <div className="right w-[80%] md:w-[30%] py-6  h-full bg-zinc-100 overflow-auto order-2 md:order-3">
          <h2 className="opacity-40 pl-2 items-center">TOP STORIES</h2>
          <div className="w-[100%] bg-zinc-400 h-[1px] mb-5"></div>
          <div>
            <ul className="flex flex-col gap-15 h-full">
              <li className="">
                <a href="">
                  <div className="flex flex-row gap-2 px-2  pb-3">
                    <img src={womenchild} alt="" className=" w-[50%] pr-1" />
                    <p>
                      
                      A Women walk in the morning with baby and saw the sun
                      rising
                    </p>
                  </div>
                </a>
              </li>
              <hr className="opacity-20" />
              <li className="">
                <a href="">
                  <div className="flex flex-row gap-2 px-2  pb-3">
                    <img src={womenchild} alt="" className=" w-[50%] pr-1" />
                    <p>
                      
                      A Women walk in the morning with baby and saw the sun
                      rising
                    </p>
                  </div>
                </a>
              </li>
              <hr className="opacity-20" />
              <li className="">
                <a href="">
                  <div className="flex flex-row gap-2 px-2  pb-3">
                    <img src={womenchild} alt="" className=" w-[50%] pr-1" />
                    <p>
                      
                      A Women walk in the morning with baby and saw the sun
                      rising
                    </p>
                  </div>
                </a>
              </li>
              <hr className="opacity-20" />
              <li className="">
                <a href="">
                  <div className="flex flex-row gap-2 px-2  pb-3">
                    <img src={womenchild} alt="" className=" w-[50%] pr-1" />
                    <p>
                      
                      A Women walk in the morning with baby and saw the sun
                      rising
                    </p>
                  </div>
                </a>
              </li>
              <hr className="opacity-20" />
              

            </ul>
            <a href="" className="px-3 text-blue-500">...Read more</a>
              <hr className="opacity-20" />
          </div>
        </div>
      </div>
      <div className="bottom py-15">
        
        <div className="flex gap-20 flex-row text-[14px] font-semibold" >
          <a href="./about" onClick={(item)=>{
            item.preventDefault();
            filterProduct("Trending");
          }}>Trending Now</a><br />
          
          <a href="./about" onClick={(item)=>{
            item.preventDefault();
            filterProduct("Meet");
          }}>Meet Us</a>
        </div>
       
        <div className="w-full h-0 bg-zinc-700  opacity-10 py-[1px] my-4"></div>
        
        <div className="flex flex-wrap gap-7 justify-center items-center">
          { category.map((item,index)=>(
            //  category?filterProduct(item.name):true
            category?<CardProd item={item} key={index}/>:"" //key is optional
          ))

          }

        </div>

      </div>
    </div>
  );
}

export default About;
