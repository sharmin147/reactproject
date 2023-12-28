
import React from 'react';
import {
    BsFillBellFill,
    BsFillEnvelopeFill,
    BsPersonCircle,
    BsSearch,
    BsJustify
} from 'react-icons/bs';

function Header({Opensidebar}) {
    return (
        <header className='header'>
            <div className='menu-icon'>
                <BsJustify className='icon' onclick={Opensidebar}/>
            </div>
            <div className='header-left'>
                <BsSearch className='icon' />
            </div>
            <div className='header-right'>
                <BsFillBellFill className='icon' />
                <BsFillEnvelopeFill className='icon' />
                <BsPersonCircle className='icon' />
            </div>
        </header>
    );
}

export default Header;
