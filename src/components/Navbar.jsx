import Link from "next/link";

export default function NavBar(){
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
    return(
        <div className="navbar">
            <div className="left">
                <img src="./Images/Logo.png" alt="Akinduko Group Logo" />
            </div>
            <div className="right">
                <nav>
                    <Link href={`/`} >Home</Link>
                    <Link href={`/About`} /*onClick={() => handleScrollClick('About')}*/ >About Us</Link>
                    <Link href={`/#Contact`} >Contact</Link>
                    {/* <a href={`/`} >Home</a>
                    <a href={`/About`} >About Us</a>
                    <a href={`/Contact`} >Contact</a> */}
                </nav>
            </div>
        </div>
    )
}