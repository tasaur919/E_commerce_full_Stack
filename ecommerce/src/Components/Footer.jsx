import React from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
function Footer() {
  return (
    <div className='pt-12'>
        <div className='bg-black text-white flex flex-col justify-center items-center p-8 rounded-bl-lg rounded-br-lg bottom-0'>
      <p>
        Thanks For visiting my Website  &copy;  Rk Shop <br />The founder of RK shop is TASAUVAR ANSARI
      </p>
        <br />
          <div className="iconb md:px-44  md:mt-5 mt-10 flex flex-row gap-5 md:gap-8 justify-center items-center" >
            <a href="https://www.youtube.com/@TasauvarAnsari300"><span><YouTubeIcon/></span></a>
            <a href="https://www.instagram.com/funny15700?igsh=eTZsZ3MyMDNvMWN3" ><span><InstagramIcon/></span></a>
            <a href="t.me/tasauvar1" ><span><TwitterIcon/></span></a>
            <a href="https://github.com/tasaur919/" ><span><GitHubIcon/></span></a>
            </div>
        </div>
    </div>
  )
}

export default Footer