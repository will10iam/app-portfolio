
import Typewriter from 'typewriter-effect'
import SocialLinks from '../../Components/SocialIcons/SocialIcons';


export default function Home() {
    const styles = {
        landing: {
            height: "calc(100% - 93px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },

        /* landingImage: {
            position: "absolute",
            bottom: "0",
            opacity: "0.3",
            mixBlendMode: "lighten",
            height: "80%",
        }, */

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
            marginTop: "-100px",
            paddingBottom: "28px",
        },
    }



    return (
        <section className='landing' style={styles.landing}>

            <div className='textContainer' style={styles.textContainer}>
                <h1 className="name" style={styles.name}>Oi, eu sou o William!</h1>

                <div className="description">
                    <Typewriter
                        className="description"
                        onInit={(typewriter) => {
                            typewriter
                                .typeString('<strong style="color: #f6336c;">Desenvolvedor Web Front-End</strong>')
                                .pauseFor(1000)
                                .deleteChars(13)
                                .typeString('<strong style="color: #f6336c;">Mobile</strong>')
                                .pauseFor("1000")
                                .deleteAll()
                                .typeString('<strong style="color: #f6336c;">Web Designer</strong>')
                                .start();
                        }}
                    />
                </div>
            </div>
            <SocialLinks />
        </section>
    )
}


