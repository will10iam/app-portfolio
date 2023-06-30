import PageHeader from "../../Components/PageHeader/PageHeader";
import SocialIcons from "../../Components/SocialIcons/SocialIcons";
import Form from "../../Components/Form/Form";
import ContactInfo from "../../Components/ContactInfo/ContactInfo";


export default function Contact({ name, email, location }) {
    return (
        <section className="contact">
            <PageHeader title="Contato" description="Entre em contato" />
            <div className="contactWrap container">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <Form />
                    </div>
                    <div className="col-12 col-lg-6">
                        <ContactInfo name={name} location={location} email={email} />
                    </div>
                </div>
            </div>
            <SocialIcons />
        </section>
    )
}
