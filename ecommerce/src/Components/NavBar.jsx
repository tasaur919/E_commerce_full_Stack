import React, { useEffect, useRef, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import LogReg from './LogReg';
import { Link, useNavigate } from 'react-router-dom';
// import { Dummydata } from '../Dummydata';

function NavBar({query,setQuery,cart}) {
    const [isMenuOpen,setIsMenuOpen]=useState(false);
    const [showForm,setShowForm]=useState(false);

    const navigate=useNavigate();

    function HandleMobMenu(path){
        setIsMenuOpen(false)
        navigate(path)
    }

    // const [openCart,setOpenCart]=useState(false)
    // for Search
    // console.log(query)
    
    // const updateQuery=Dummydata.filter((product)=>product.name.toLowerCase().includes(query))
    //  function searchData(){
    //     setQuery(updateQuery)
    //  }
    // console.log(updateQuery)

    const toggleMenu=()=>setIsMenuOpen(!isMenuOpen)
    const userId=()=>{
           setShowForm(!showForm)
    }

//click outside to close pop-up
const menuRef = useRef(null);
const formRef=useRef(null)
  useEffect(() => {
    function handleClickOutside(e) {
      // Mobile menu close
      if (menuRef.current && !menuRef.current.contains(e.target) && isMenuOpen) {
        setIsMenuOpen(false);
      }
      // LogReg close
      if (formRef.current && !formRef.current.contains(e.target) && showForm) {
        setShowForm(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen, showForm]);

  return (
    <>
    
    <div className='flex fixed top-0 left-0 w-full z-50 '>
        <div className='flex bg-linear-to-r from-cyan-500 to-blue-500 h-14 md:h-20 justify-evenly items-center text-orange-300 w-full px-6 rounded-tl-lg rounded-tr-lg'>
            {/* logo/ Home */}
            <div className="logo text-1xl md:text-2xl lg:text-3xl font-bold pr-2">
                 RK Ecommerce
            </div>
            {/* Menu */}
            <div className="menu hidden md:flex lg:flex text-white pl-2">
               <ul className='flex gap-5 justify-evenly '>
                <li className='hover:text-red-400'><Link to={'/'}>Home</Link></li>
                <li className='hover:text-red-400'><Link to={'/men'}>Men</Link></li>
                <li className='hover:text-red-400'><Link to={'/women'}>Women</Link></li>
                {/* <li className='hover:text-red-400'><Link to={'/baby'}>Baby's</Link></li> */}
                <li className='hover:text-red-400'><Link to={'/about'}>About</Link></li>
                <li className='hover:text-red-400'><Link to={'/blog'}>Blog</Link></li>
                <li className='hover:text-red-400'><Link to={'/contact'}>Contact</Link></li>
                </ul>
            </div>
{/* search */}
        <div className='flex justify-evenly items-center  gap-4 md:gap-1 lg:gap-1 pl-3'>
            <div className='flex relative'>
            <input type="text" className='search text-black bg-zinc-300 rounded-lg pl-2 cursor-pointer md:w-[190px] outline-none  w-[120px] '  placeholder='Search...' onChange={(e)=>setQuery(e.target.value.toLowerCase())}/>
            <button className=' flex absolute right-3 cursor-pointer hover:bg-zinc-600 hover:text-white rounded-full text-zinc-500'><SearchIcon/></button>
            </div>
            <button className='cursor-pointer' onClick={userId} ><PersonOutlineIcon/></button>
            <div className='relative cursor-pointer' >
           <Link to={'./cart'}> <button className='cursor-pointer'><ShoppingBagOutlinedIcon/></button></Link>
            
            <span className='absolute -top-2 -right-3  text-white text-xs w-5 h-5 items-center justify-center rounded-full'>{cart}</span>
            
            </div>
            <button className='flex md:hidden lg:hidden' onClick={toggleMenu}><MenuOutlinedIcon/></button>
        </div>

        </div>
    </div>

{/* Mobile menu */}
   {isMenuOpen && (
        <div ref={menuRef} className=' mt-14 md:pt-20 bg-blue-500 flex fixed z-50  text-white md:hidden text-center right-0 h-80 w-[110px] rounded-tl-lg rounded-bl-lg'>
            <ul className='font-semibold left-1 top-2 flex flex-col p-4 gap-3 justify-evenly'>
                <li className='hover:text-red-400' onClick={()=>HandleMobMenu("/")}>Home</li>
                <li className='hover:text-red-400' onClick={()=>HandleMobMenu("/men")}>Men</li>
                <li className='hover:text-red-400' onClick={()=>HandleMobMenu("/women")}>Women</li>
                {/* <li className='hover:text-red-400'><Link to={'/baby'}>Baby's</Link></li> */}
                <li className='hover:text-red-400' onClick={()=>HandleMobMenu("/about")}>About</li>
                <li className='hover:text-red-400' onClick={()=>HandleMobMenu("/blog")}>Blog</li>
                <li className='hover:text-red-400' onClick={()=>HandleMobMenu("/contact")}> Contact</li>
                </ul>
        </div>

   )}
   {showForm &&( 
   <div ref={formRef}>
     <LogReg/>
   </div>
   )}
    </>
  )
}

export default NavBar