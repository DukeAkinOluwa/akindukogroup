import Image from "next/image"

import Footer from "@/components/Footer"
import NavBar from "@/components/Navbar"

export default function About() {
    return(
        <div className="aboutPage">
            <NavBar />
            <div className="content">
                <div className="title">
                    <h1>Leadership</h1>
                </div>
                <Image src="/Images/DukesPantheraCrown.png" alt="Akinduko Group Crown" className="crown" width={1000} height={400} />
                <div className="person">
                    <div className="left">
                        <Image src="/Images/AkindukoAkinOluwa.jpg" alt="Leadership" width={1000} height={1000} />
                        <h2>Akinduko AkinOluwa IreOluwa</h2>
                        <p>Chairman &amp; CEO</p>
                    </div>
                    <div className="right">
                        <p><strong>Akinduko AkinOluwa IreOluwa</strong>, proprietor of Akinduko Group, envisions a future driven by innovation and excellence. With a foundation in engineering and entrepreneurial expertise, he pioneers solutions that enhance productivity, redefine fashion, and revolutionize engineering through cutting-edge initiatives.</p>
                        <p>As the visionary behind Edvantage, LuxorGentleman, and an engineering firm, <strong>AkinOluwa</strong> integrates technology, creativity, and discipline. His brands exemplify quality, student empowerment, and transformative design, fostering collaboration and community impact across diverse sectors, including education and advanced engineering solutions.</p>
                        <p><strong>AkinOluwa&apos;s</strong> leadership and passion fuel Akinduko Group&apos;s mission to inspire change, embrace innovation, and deliver excellence. His dedication to empowering individuals and industries underscores his commitment to creating impactful, sustainable, and innovative solutions worldwide.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}