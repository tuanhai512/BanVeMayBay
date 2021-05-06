import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BsBookmarks from 'react-icons/bs';
import * as CgFileDocument from 'react-icons/cg';
import * as IoPersonCircleOutline from 'react-icons/io5';

export const MenuItem = [
  {
    title: 'Khuyến mãi',
    path: '/khuyenmai',
    icon: <AiIcons.AiOutlinePercentage style={{color:"red",fontSize:'20px'}}/>,
    cName: 'nav-text'
  },
  {
    title: 'Hợp tác với chúng tôi',
    path: '/hoptacvoichungtoi',
    icon: <FaIcons.FaRegHandshake style={{color:"skyblue",fontSize:'20px'}} />,
    cName: 'nav-text'
  },
  {
    title: 'Đã lưu',
    path: '/daluu',
    icon: <BsBookmarks.BsBookmarks style={{color:"blueviolet",fontSize:'20px'}} />,
    cName: 'nav-text'
  },
  {
    title: 'Đặt chỗ của tôi',
    path: '/datchocuatoi',
    icon: <CgFileDocument.CgFileDocument  style={{color:"blueviolet",fontSize:'20px'}} />,
    cName: 'nav-text'
  },
  {
    title: 'Đăng nhập',
    path: '/login',
    icon: <IoPersonCircleOutline.IoPersonCircleOutline  style={{color:"blueviolet",fontSize:'20px'}}/>,
    cName: 'nav-text'
  },
  {
    title: 'Đăng ký',
    path: '/dangky',
    icon: <IoIcons.IoMdHelpCircle  style={{color:"blueviolet",fontSize:'20px'}}/>,
    cName: 'nav-text'
  }
];
