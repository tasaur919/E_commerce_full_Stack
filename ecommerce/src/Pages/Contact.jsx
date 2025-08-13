import React from 'react'

function Contact() {
  return (
    <div className='pt-14 md:pt-20'>
       <div className='flex flex-col md:flex-row gap-5 md:gap-0 w-[100%] justify-center items-center px-11 :h-[100vh]  md:h-[100vh] overflow-scroll pb-10 pt-3'>
        {/* left */}
        <div className="left  order-1 px-10 py-10 h-full justify-center items-center overflow-scroll pt-15 md:pt-36  w-full md:w-[50%] bg-zinc-200  ">
           <div className="topc flex flex-col leading-8 gap-5">
            <h1 className='font-bold text-2xl'>Contact Us</h1>
            <p className='flex-wrap text-[18px] leading-7'>Email,Call or Complete the form to learn how Snappy can solve your messaging problem.</p>
            <p>tasaur919@gmail.com</p>
            <p className='mb-5'>+91-7800492254</p>
           </div>
           <a href="#" className='py-10 pt-5'>Customer Support</a>
           <div className="bottomc flex flex-col md:flex-row justify-evenly gap-2 py-10">
            <div className='order-1'>
              <h2 className='font-semibold text-[18px] flex-wrap pb-2'>Customer Support</h2>
              <p className='opacity-50 text-[14px]'>Our support team is available around the clock to address any concerns or queries you may have.</p>
            </div>
            <div className='order-2'>
              <h2 className='font-semibold text-[18px] flex-wrap pb-2'>Feedback and Suggestions</h2>
              <p className='opacity-50 text-[14px]'>We value your feedback and are continuously working to improve Snappy. Your input is crucial in shaping the future of Snappy.</p>
            </div>
            <div className='order-3 '>
              <h2 className='font-semibold text-[18px] flex-wrap pb-2'>Media Inquiries</h2>
              <p className='opacity-50 text-[14px]'>For media-related queries , please contact us  at tasaur919@gmail.com.</p>
            </div>
           </div>
        </div>
{/* right Login page */}
        <div className="right  order-2 bg-gradient-to-b  from-cyan-300 to-blue-500 md:h-full w-full overflow-scroll lg:overflow-hidden overflow-x-hidden md:w-[50%] pb-10 md:pt-20  py-10 pr-15 pl-3 md:px-15">
          <form action="" className=' bg-zinc-300 rounded-md w-[110%] justify-center items-center md:w-full p-10 '>
                 <div className='flex flex-col gap-1 mb-10'>
                  <h1 className='text-2xl font-bold'>Get In Touch</h1>
                  <p className='text-[16px] '>You can reach us anytime</p>
                 </div>
                 <div className='flex flex-col md:flex-row w-full gap-5 md:w-[110%] md:pr-15 '>
                  <input type="text" placeholder='FirstName' className='bg-zinc-200 pl-5 rounded-lg text-2xl md:w-[50%]'/>
                  <input type="text" placeholder='LastName' className='bg-zinc-200 pl-5 rounded-lg text-2xl  md:w-[50%]'/>
                 </div>
                 <input type="email" placeholder=' email@gmail...' className='bg-zinc-200 pl-5 w-full rounded-lg text-2xl md:w-full mt-5 '/>  
                 <input type="text" placeholder='Phone No...' className='bg-zinc-200 pl-5 rounded-lg text-2xl w-full md:w-full mt-5 '/>
                 <textarea name="" id="" placeholder='How can I help you ? ....' className='text-[17px]  bg-zinc-200 pl-5 rounded-md w-full md:w-full mt-5' rows={4}></textarea>
                 <button className='bg-green-500 p-2 rounded-md text-2xl w-full md:w-full mt-5'>Submit</button>
            <p className='mt-4'>By contacting us,You agree to our <span className='font-bold'>Terms & Services</span> and <span className='font-bold'>Privacy Policy</span></p>
          </form>
          
          
        </div>
       </div>

    </div>
  )
}

export default Contact