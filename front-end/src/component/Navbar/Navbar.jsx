import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { MenuItem } from './MenuItem';
import './Navbar.css';
import { IconContext } from 'react-icons';
import {SidebarData2} from './SidebarData2';


function Navbar() {
  const [sidebar, setSidebar] = useState(false); //Trạng thái ban đầu , trạng thái sau khi thay đổi

  const showSidebar = () => setSidebar(!sidebar);//Kiểm tra trạng thái sidebar 

  return (
    <>
      <IconContext.Provider value={{ color: 'black' }}>
        <nav className='navbar'>
          <Link to='#' className='menu-bars'  /* Vùng của icon navbar */  >
            <FaIcons.FaBars onClick={showSidebar} />
            <div className="nav-icon">
            <img src="https://clipartart.com/images/traveloka-logo-clipart-4.png"/>
            </div>          
          </Link>    
          <ul className='nav-menu-horizontal-items'  /*Menu ngang */ >        
            {MenuItem.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
       
        <nav id='modal' className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle' /*Vùng tiêu đề của menu dọc*/>
              <Link to='#' className='menu-bars' /* Vùng của icon navbar */ >
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <hr/>
            {SidebarData2.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
