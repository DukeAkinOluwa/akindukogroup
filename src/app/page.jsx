'use client'

import Image from "next/image";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import { useEffect, useState } from "react";
import Contact from "@/components/Contact";

export default function Home() {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
          const newIndex = (currentImageIndex + 1) % 3;
          setCurrentImageIndex(newIndex);
        }, 7000); // Change image every 8 seconds
      
        return () => clearInterval(intervalId); // Cleanup on unmount
    }, [currentImageIndex, 3]);

    const style = {
      backgroundImage: `url(/Images/LBImage${currentImageIndex}.png)`
    }

    return (
        <div className="page">
            <main className="main">
                <div className="landingPage">
                    <div className="landingBanner" style={style}>
                        <NavBar />
                        <div className="filter"></div>
                        <div className="centreText">
                            {currentImageIndex === 0 ? (
                                <>
                                    <div className="heading" style={{ opacity: `${currentImageIndex === 0 ? '1' : '0'}`}}>
                                        <div className="h"><h1>Empowering</h1><h1 className='highlight'>Minds</h1></div>
                                    </div>
                                    <div className="paragraph" style={{ opacity: `${currentImageIndex === 0 ? '1' : '0'}`}}>
                                        <p>Assisting college students in organizing their journey with our edTech app. Boosting academic performance, facilitating efficient time management, and promoting seamless collaboration between classmates. Achieve more, together.</p>
                                    </div>
                                </>
                            ) : (<></>)}
                            {currentImageIndex === 1 ? (
                                <>
                                    <div className="heading" style={{ opacity: `${currentImageIndex === 1 ? '1' : '0'}` }}>
                                        <div className="h"><h1>Sustaining</h1><h1 className='highlight'>Style</h1></div>
                                    </div>
                                    <div className="paragraph" style={{ opacity: `${currentImageIndex === 1 ? '1' : '0'}`}}>
                                        <p>LuxorGentleman caters to the discerning gentleman, specializing in impeccably crafted footwear that embodies "Uncompromising Excellence." Our shoes are designed to be comfortable, enduring, and exceed expectations.</p>
                                    </div>
                                </>
                            ) : (<></>)}
                            {currentImageIndex === 2 ? (
                                <>
                                    <div className="heading" style={{ opacity: `${currentImageIndex === 2 ? '1' : '0'}`}}>
                                        <div className="h"><h1>Redefining</h1><h1 className='highlight'>Engineering</h1></div>
                                    </div>
                                    <div className="paragraph" style={{ opacity: `${currentImageIndex === 2 ? '1' : '0'}`}}>
                                        <p>Pioneering solutions for a better future. Akinduko Group is committed to developing impactful technologies in the engineering space. Stay tuned to discover how we'll innovate and benefit society.</p>
                                    </div>
                                </>
                            ) : (<></>)}
                        </div>
                    </div>
                    <div className="whoAreWe" id="About">
                        <div className="sectionButton"><p>About</p></div>
                        <h1>Who Are We?</h1>
                        <p>Akinduko Group is a holding company focused on fostering innovation across key industries. We empower our subsidiaries to develop cutting-edge products and services that address critical needs and drive positive change</p>
                    </div>
                    <div className="corePillars">
                        <div className="sectionButton"><p>Services</p></div>
                        <Image src="/Images/DukesPantheraCrown.png" alt="Akinduko Group Crown" className="crown" width={1000} height={400} />
                        <h1>Our Strategic Pillars</h1>
                        <div className="content">
                            <div className="left">
                                <div className="pillar">
                                    <div className="highlightLine"></div>
                                    <div className="text">
                                        <h3>Education Technology</h3>
                                        <p className="limitedText">We are developing a revolutionary EdTech platform to simplify college life for Nigerian students. This platform will offer a comprehensive suite of features designed to enhance the educational experience, including assignment tracking, exam scheduling, localized content, and offline functionality.</p>
                                    </div>
                                </div>
                                <div className="pillar">
                                    <div className="highlightLine"></div>
                                    <div className="text">
                                        <h3>Fashion Coming Soon</h3>
                                        <p className="limitedText">LuxorGentleman caters to the discerning gentleman who thrives on exceeding expectations. Embracing the philosophy of "Uncompromising Excellence," LuxorGentleman offers impeccably crafted, high-quality garments that are both comfortable and enduring</p>
                                    </div>
                                </div>
                                <div className="pillar">
                                    <div className="highlightLine"></div>
                                    <div className="text">
                                        <h3>Engineering</h3>
                                        <p className="limitedText">We are actively seeking talented engineers to join our team as we develop new ventures in the engineering space. Our focus is on creating technologies that benefit society and its members.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <Image src="/Images/Pillars.png" alt="Pillars Image" width={800} height={800} />
                            </div>
                        </div>
                    </div>
                    <div className="innovationZone">
                        <div className="sectionButton"><p>Methods</p></div>
                        <Image src="/Images/DukesPantheraCrown.png" alt="Akinduko Group Crown" className="crown" width={1000} height={400} />
                        <div><h1>Empowering</h1><h1>Creative Solutions</h1></div>
                        <div className="content">
                            <div className="zone zone1">
                                <div className="text">
                                    <h2>Supportive Ecosystem</h2>
                                    <p>We nurture innovative ideas with mentorship, funding, and collaboration opportunities.</p>
                                </div>
                                <div className="image">
                                    <Image src="/Images/Mentorship.png" alt="Mentorship Image" width={500} height={500} />
                                </div>
                            </div>
                            <div className="zone zone2">
                                <div className="text">
                                    <h2>Agile Development</h2>
                                    <p>We iterate quickly, learning and evolving to meet market demands.</p>
                                </div>
                                <div className="image">
                                    <Image src="/Images/Agile.png" alt="Agile Image" width={500} height={500} />
                                </div>
                            </div>
                            <div className="zone zone3">
                                <div className="text">
                                    <h2>Cross-Disciplinary Collaboration</h2>
                                    <p>At Akinduko Group, we foster creativity through diverse team interactions, driving transformative solutions.</p>
                                </div>
                                <div className="image">
                                    <Image src="/Images/Collaboration.png" alt="Collab Image" width={500} height={500} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Contact />
                </div>
            </main>
        <Footer />
        </div>
    );
}