import AboutMe from "../../Components/AbouteMe/AboutMe";
import PageHeader from "../../Components/PageHeader/PageHeader"

export function About({ name, location, brand, email, availability }) {
    return (

        <section className="about">
            <PageHeader title="Muito Prazer!" description="Deixe eu me apresentar" />
            <AboutMe name={name} location={location} brand={brand} email={email} availability={availability} />

        </section>
    )
}

export default About;
