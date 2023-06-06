import aboutme from "../../Assets/aboutme.jpeg";
import { motion } from "framer-motion";
import SocialIcons from "../SocialIcons/SocialIcons";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import resume from "../../Pages/About/wbresume.pdf";

const AboutMe = ({ name, email, location, availability, brand }) => {
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    const [downloading, setDownloading] = useState(false);

    useEffect(() => {
        setDownloading(false);
    }, [downloading]);


    const handleDownload = () => {
        setDownloading(true);
        const link = document.createElement("a");
        link.href = resume;
        link.download = "wbresume.pdf";
        link.onload = () => {
            link.remove();
            setDownloading(false);
        };
        document.body.appendChild(link);
        link.click();
    };


    return (
        <div className="aboutContainer container">
            <div className="row">
                <motion.div
                    className="personalImage col-12 col-lg-4"
                    ref={ref}
                    initial={{ x: "-10vw", opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                    <img src={aboutme} alt={name} />
                </motion.div>
                <motion.div
                    className="personalInfo col-12 col-lg-8"
                    ref={ref}
                    initial={{ x: "10vw", opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                    <div className="contentContainer">
                        <h4>e ai, tudo bem ?</h4>
                        <h5>Sou o William, 28 anos, localizado em Limeira - São Paulo.</h5>
                        <div className="contentDescription">
                            <p>{brand}</p>
                        </div>
                        <div className="infoContainer">
                            <div className="row">
                                <div className="col-12 col-md-6 info">
                                    <span>Name:</span>
                                    <p>William Berbet da Silva</p>
                                </div>
                                <div className="col-12 col-md-6 info">
                                    <span>Email:</span>
                                    <p>
                                        <a href={`mailto:${email}`}>{email}</a>
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-6 info">
                                    <span>Localização:</span>
                                    <p>{location}</p>
                                </div>
                                <div className="col-12 col-md-6 info">
                                    <span>Disponibilidade:</span>
                                    <p>{availability}</p>
                                </div>
                            </div>
                        </div>
                        <div className="buttonContainer">
                            <button className="btn downloadCV" onClick={handleDownload} disabled={downloading}>
                                {downloading ? "Downloading..." : "Baixar Curriculum"}
                            </button>{" "}
                            <SocialIcons />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default AboutMe;