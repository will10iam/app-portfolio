import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import homeImage from '../../Assets/me.svg'
import SocialLinks from '../../Components/SocialIcons/SocialIcons';

const Home = ({ name }) => {
    const styles = {
        landing: {
            height: "calc(100% - 93px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },

        landingImage: {
            position: "absolute",
            bottom: "0",
            opacity: "0.3",
            mixBlendMode: "lighten",
            height: "80%",
        },

        textContainer: {
            display: "flex",
            flexDirection: "column",
            letterSpacing: "1px",
            textAlign: "center",
            zIndex: "1",
            color: "#fff",
            textShadow: "1px 1px 3px #000",
        },

        name: {
            color: "#fff",
            fontWeight: "700",
            marginTop: "130px",
            paddingBottom: "28px",
        },
    };



    return (
        <section className="landing" style={styles.landing}>

            <div className="textContainer" style={styles.textContainer}>
                <h1 className="name" style={styles.name}>{name}</h1>

                <div className="description">
                    <Typewriter
                        className="description"
                        onInit={(typewriter) => {
                            typewriter
                                .changeDelay(80)
                                .typeString("Desenvolvedor Front-End!")
                                .pauseFor(1500)
                                .deleteAll()
                                .typeString("Web ")
                                .pauseFor(500)
                                .typeString("&  ")
                                .pauseFor(500)
                                .typeString("Mobile.")

                                .start();
                        }}
                    />
                </div>
            </div>
            <div className="image-container">
                <motion.img
                    className="landingImage"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    style={styles.landingImage}
                    src={homeImage}
                    alt="William Berbet"
                />
            </div>
            <SocialLinks />
        </section>
    )
}

export default Home;


