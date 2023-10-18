import React, { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import {  Chat, Notification ,UserProfile} from '.';
import { useStateContext } from '../contexts/ContextProvider';
import { Avatar } from '@mui/material';


const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  
);

const Navbar = () => {
  const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();
  

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className="flex justify-between items-center  md:ml-2 md:mr-2 shadow-xl p-4 relative">

      <NavButton title="Menu" customFunc={handleActiveMenu} color={currentColor} icon={<AiOutlineMenu />} />
      <p className='text-blue-700 none text-sm'>welcome to <span className='text-gray-600'>Grade Management System</span></p>
      <p className='none'>
        <input className='w-400 bg-gray-200 h-8 p-4 rounded-2xl' placeholder='Search Here....'/>
      </p>
       <select className='p-2 none'>
        <option>English</option>
        <option>Kiswahili</option>
       </select>
      <div className="flex">
        <NavButton title="Login" customFunc={() => handleClick('Login')} color={currentColor}/>
 
        <NavButton title="Chat" dotColor="#03C9D7" customFunc={() => handleClick('chat')} color={currentColor} icon={<BsChatLeft />} />
        <NavButton title="Notification" dotColor="rgb(254, 201, 15)" customFunc={() => handleClick('notification')} color={currentColor} icon={<RiNotification3Line />} />
        <div >
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick('userProfile')}
          >
            <Avatar
            style={{background:currentColor}}
               src=''
              alt="profile"
            ></Avatar>
            <p>
              <span className="text-gray-400 text-14"></span>{' '}
              <span className="text-gray-400 font-bold ml-1 text-14">
                Profile
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </div>

        {isClicked.Login && (<Login />)}
        {isClicked.chat && (<Chat />)}
        {isClicked.notification && (<Notification />)}
        {isClicked.userProfile && (<UserProfile />)}
      </div>
    </div>
  );
};

export default Navbar;
