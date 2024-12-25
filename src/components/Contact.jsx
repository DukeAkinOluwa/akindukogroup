import Image from "next/image";

export default function Contact() {
    return (
        <div className="contact" id="Contact">
                <div className="sectionButton"><p>Contact</p></div>
                <Image src="/Images/DukesPantheraCrown.png" alt="Akinduko Group Crown" className="crown" width={1000} height={500} />
                <div className="content">
                    <div className="left">
                        <h1>Join Us In Shaping the Future</h1>
                        <p>Akinduko Group seeks talented individuals passionate about fostering innovation and creating positive change to join our dynamic team.</p>
                        <div className="icons">
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                        </div>
                    </div>
                    <div className="form">
                        <form action="#" method="post">
                            <label htmlFor="fullName">
                                <span>Full Name</span>
                                <input type="text" name="fullName" id="fullName" />
                            </label>
                            <label htmlFor="email">
                                <span>E-mail Address</span>
                                <input type="email" name="email" id="email" />
                            </label>
                            <label htmlFor="message">
                                <span>Message</span>
                                <input type="text" name="message" id="message" />
                            </label>
                            <input type="submit" className="button1" value="Send" />
                        </form>
                    </div>
                </div>
            </div>
    )
}