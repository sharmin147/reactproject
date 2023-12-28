import React from 'react'
import {BsBookshelf,BsBookmarks,BsLaptop,BsFillLightningFill,BsClipboard,BsFillMenuButtonWideFill,BsFillGearFill }
 from 'react-icons/bs'


function Sidebar({openSidebarToggle,OpenSidebar}) {
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
            <div className="sidebar-title">
                <div className='icon_brand'>
                    <BsBookshelf className='icon_header' /> EDUCATION
                </div>
             <span className='icon close_icon' onclick={OpenSidebar}>X</span>
            </div>

            <ul className='sidebar-list'> 
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsLaptop className='icon' />Dashboard
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        < BsBookmarks className='icon' />Teacher
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsFillLightningFill className='icon' />Course
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsClipboard className='icon' />Blog
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsFillMenuButtonWideFill className='icon' />Reports
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsFillGearFill className='icon' />Setting
                    </a>
                </li>

            </ul>
        </aside>

    )
}
export default Sidebar