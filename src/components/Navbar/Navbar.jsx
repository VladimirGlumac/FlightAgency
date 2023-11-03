import React, { useState } from 'react'
import { SiConsul } from "react-icons/si"
import { BsPhoneVibrate } from "react-icons/bs"
import { AiOutlineGlobal } from "react-icons/ai"
import { CgMenuGridO } from "react-icons/cg"

import logo from "../../assets/images/logo.png"

const Navbar = () => {

    const [active, setActive] = useState('navBarMenu')
    const showNavBar = () => {
        setActive('navBarMenu showNavBar')
    }
    const removeNavBar = () => {
        setActive('navBarMenu')
    }

    // add color to second Nav

    const [noBg, addBg] = useState('navBarTwo')
    const addBgColor = () => {
        if (window.scrollY >= 10) {
            addBg('navBarTwo navWithBg')
        } else {
            addBg('navBarTwo')
        }
    }
    window.addEventListener('scroll', addBgColor)




    return (
        <div className='navBar flex'>
            <div className="navBarOne flex">
                <div>
                    <SiConsul />
                </div>
                <div className="none flex">
                    <li className='nav-li flex'> <BsPhoneVibrate /> Support</li>
                    <li className='nav-li flex'><AiOutlineGlobal />Languages</li>
                </div>
                <div className="atb flex">
                    <span>Sign In</span>
                    <span>Sign Out</span>
                </div>
            </div>
            <div className={noBg}>
                <div className="logoDiv">
                    <img src={logo} className='logo' />
                </div>
                <div className={active}>
                    <ul className="menu flex">
                        <li onClick={removeNavBar} className="listItem"><a className="listItem" href="">Home</a></li>
                        <li onClick={removeNavBar} className="listItem"> <a className="listItem" href="#about">About</a></li>
                        <li onClick={removeNavBar} className="listItem"> <a className="listItem" href="#seats">Seats</a></li>
                        <li onClick={removeNavBar} className="listItem"> <a className="listItem" href="#customers">Customers</a></li>
                        <li onClick={removeNavBar} className="listItem"> <a className="listItem" href="#support">Support</a></li>
                    </ul>
                    <button className='btn flex btnOne'>Contact</button>
                </div>
                <button className='btn flex btnTwo'>Contact</button>
                <div className="toggleIcon" onClick={showNavBar}>
                    <CgMenuGridO className='icon' color='black' />
                </div>
            </div>
        </div>
    )
}

export default Navbar
