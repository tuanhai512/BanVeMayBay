import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Trang chủ',
    path: '/trangchu',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Đặt chỗ của tôi',
    path: '/datchocuatoi',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Hộp thư của tôi',
    path: '/hopthucuatoi',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Đã lưu',
    path: '/daluu',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Liên hệ với chúng tôi',
    path: '/lienhevoichungtoi',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Hợp tác với chúng tôi',
    path: '/hoptacvoichungtoi',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Trợ giúp',
    path: '/trogiup',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Quốc gia và ngôn ngữ',
    path: '/quocgiavangonngu',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Ngoại tệ',
    path: '/ngoaite',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Tải ứng dụng',
    path: '/taiungdung',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
];
