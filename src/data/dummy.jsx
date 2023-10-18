import React from 'react';
import { AiOutlineHome} from 'react-icons/ai';
import { FiPieChart, FiCreditCard} from 'react-icons/fi';
import {  BsCurrencyDollar, BsDatabaseUp, BsShield } from 'react-icons/bs';
import {  TbListDetails} from 'react-icons/tb'
import avatar from './avatar.jpg';
import avatar2 from './avatar2.jpg';
import avatar3 from './avatar3.jpg';
import avatar4 from './avatar4.jpg';
import { MdPeopleAlt } from 'react-icons/md';



export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'homepage',
        icon: <AiOutlineHome />,
      },
           {
        name: 'Grading',
        icon: <TbListDetails />,
      },
    
      {
        name: 'DataBase',
        icon: <BsDatabaseUp />,
      },
     
    ],
  },
     
  
  {
    title: 'Charts',
    links: [
     
      {
        name: 'graph',
        icon: <FiPieChart />,
      },
    
    ],
  },
];



export const chatData = [
  {
    image:
      avatar2,
    message: 'Fredrick Omwamba',
    desc: 'so easy to to check matching school ',
    time: '9:08 AM',
  },
  {
    image:
      avatar3,
    message: 'Joan Mwangi',
    desc: 'Thenkie so much Grade system team',
    time: '11:56 AM',
  },
  {
    image:
      avatar4,
    message: 'Stephen Scotte',
    desc: 'Can one apply school here still?',
    time: '4:39 AM',
  },
  {
    image:
      avatar,
    message: 'Jolly Kim',
    desc: 'I just spent 20 sec to get a school,,thenkie',
    time: '1:12 AM',
  },
];




export const themeColors = [
  {
    name: 'blue-theme',
    color: '#32a852',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#fcba03',
  },
  {
    name: 'red-theme',
    color: '#d742f5',
  },
  {
    name: 'indigo-theme',
    color: '#fc0398',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <BsShield />,
    title: 'My Inbox',
    desc: 'Messages & Emails',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
  },
  {
    icon: <FiCreditCard />,
    title: 'Updates',
    desc: 'No Update available now',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
  },
];
