import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BsBookmarks from 'react-icons/bs';
import * as CgFileDocument from 'react-icons/cg';
import * as IoPersonCircleOutline from 'react-icons/io5';

export const SidebarData2 = [
  {
    title: 'Khuyến mãi',
    path: '/khuyenmai',
    icon: <AiIcons.AiOutlinePercentage/>,
    cName: 'nav-text'
  },
  {
    title: 'Vé máy bay',
    path: '/vemaybay',
    icon: <FaIcons.FaHandshake />,
    cName: 'nav-text'
  },
  {
    title: 'Khách sạn',
    path: '/khachsan',
    icon: <BsBookmarks.BsBookmarks />,
    cName: 'nav-text'
  },
  {
    title: 'Combo tiết kiệm',
    path: '/combotietkiem',
    icon: <CgFileDocument.CgFileDocument />,
    cName: 'nav-text'
  },
  {
    title: 'Đưa đón sân bay',
    path: '/duadonsanbay',
    icon: <IoPersonCircleOutline.IoPersonCircleOutline />,
    cName: 'nav-text'
  },
  {
    title: 'Xperience',
    path: '/xperience',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Cho thuê xe',
    path: '/chothuexe',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  {
    title: 'JR Pass',
    path: '/jrpass',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
];
