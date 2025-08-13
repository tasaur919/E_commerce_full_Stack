import React from "react";
import blogImg from "../assets/blogImg.jpg";
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import womenChild from '../assets/womenChild.avif'
function Blog() {
  return (
    <div className="pt-14 md:pt-20">
      <div className="main right h-[100vh]  overflow-scroll mb-10">
        <div className="profile">
          <div className="right flex flex-col w-full overflow-scroll h-full ">
            <div className=" bg-gradient-to-r from-blue-300 to-blue-600  h-28"></div>
            {/* profiles */}
            <div className="flex flex-col md:flex-row -mt-10 md:ml-10  gap-4 md:px-40 justify-center items-center">
              
              <img
                src={blogImg}
                alt=""
                className=" w-[180px] h-[180px] rounded-full object-cover"
              />
              
              
              <p className=" flex-wrap mt-6 mx-10 md:mt-10 justify-center items-center">
                Hi, I'm Tasauvar Ansari,the founder and CEO of RK Shop. I'm a
                younger man of multiple ,Design,Developer, maintain and
                optimizing web man who has a zillion hobbies and curious
                about... just about everythhing! my mission from beginning has
                been become a software engineer
              </p>
            </div>
            {/* social media icons */}
            <div className="iconb md:px-44  md:mt-5 mt-10 flex flex-row gap-5 md:gap-8 justify-center items-center" >
            <a href="https://www.youtube.com/@TasauvarAnsari300"><span><YouTubeIcon/></span></a>
            <a href="https://www.instagram.com/funny15700?igsh=eTZsZ3MyMDNvMWN3" ><span><InstagramIcon/></span></a>
            <a href="t.me/tasauvar1" ><span><TwitterIcon/></span></a>
            <a href="https://github.com/tasaur919/" ><span><GitHubIcon/></span></a>
            </div>
            <div className="px-16 flex flex-col pt-10 justify-center items-center">
              <h1 className="text-2xl font-bold mt-5">Posts By Tasauvar Aansari</h1>
              <div className="flex flex-col md:flex-row gap-5 py-10 justify-center items-center">
                <img src={womenChild} alt=""  className="w-[100px] h-[110px]"/>
                <img src={womenChild} alt="" className="w-[100px] h-[110px]"/>
                <img src={womenChild} alt="" className="w-[100px] h-[110px]"/>
                <img src={womenChild} alt="" className="w-[100px] h-[110px]"/>
              </div>
              <p className="justify-center items-center flex ">Tasauvar & Co is a destination site for all things creative. Whether you’re trying to learn about MERN stack or how to cell product at home design business, Tasauvar & Co is the place for that information. In addition to the educational side, it’s also a clean site that’s easy to navigate. It's website design over to their blog, which is helmed by the founder,Tasauvar Ansari . The blog maintains a simple grid layout that labels each post with a clear, relevant tag and title, and it relies on vivid imagery to help draw the reader in.</p>
            </div>
          </div>
        </div>
        <div className="linksImage"></div>
      </div>
    </div>
  );
}

export default Blog;
