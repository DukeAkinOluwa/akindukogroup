'use client'

import Link from "next/link";
import { useState } from "react";

export default function NavBar(){

    const [isSideNavOpen, setIsSideNavOpen] = useState(false);

    const handleScrollClick = (sectionId) => {
      // Optionally, use refs for direct access (explained later)
      // const sectionElement = sectionId === 'section-1' ? section1Ref.current : section2Ref.current;
      // if (sectionElement) {
      //   sectionElement.scrollIntoView({ behavior: 'smooth' });
      // }
  
      // Using window.scrollTo for broader compatibility
      window.scrollTo({
        behavior: 'smooth',
        top: document.getElementById(sectionId).offsetTop,
      });
    };
    function handleHamburgerClick() {
        setIsSideNavOpen(!isSideNavOpen);
    }
    
    return(
        <div className="navbar">
            <div className="left">
                <img src="./Images/Logo.png" alt="Akinduko Group Logo" />
            </div>
            <div className="right">
                <nav className="longNav">
                    <Link href={`/`} >Home</Link>
                    <Link href={`/About`} >About Us</Link>
                    <Link href={`/Contact`} >Contact</Link>
                    {/* <a href={`/`} >Home</a>
                    <a href={`/About`} >About Us</a>
                    <a href={`/Contact`} >Contact</a> */}
                </nav>
                <nav className="sideNav" style={{left: `${isSideNavOpen ? '0px' : '-100dvw'}`}}>
                    <Link href={`/`} >Home</Link>
                    <Link href={`/About`} >About Us</Link>
                    <Link href={`/Contact`} >Contact</Link>
                </nav>
            </div>
            <div className="hamburgerMenuIcon" onClick={handleHamburgerClick}>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
            </div>
        </div>
    )
}