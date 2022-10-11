import styled from "styled-components";
import Linkedin from '../../Assets/linkedin.png'
import Github from '../../Assets/github.png'
import Instagram from '../../Assets/instagram.png'
import Whats from '../../Assets/whats.png'
import Email from '../../Assets/mail.png'
import Button from "../../Components/Buttons";
import { Link } from "react-router-dom";


export function About() {
    return (
        <>
            <SMain>
                <h3>e ai, na paz de Cristo?!</h3>
                <h1>Muito Prazer!</h1>
                <p>Sou um Desenvolvedor Web que confia na paixão pelo aprendizado, atenção aos detalhes e
                    comunicação eficaz para entregar resultados excepcionais.
                    Minha missão é encontrar um cargo de desenvolvedor web júnior que maximize minhas oportunidades
                    de crescimento e desenvolvimento de habilidades através do trabalho em equipe!
                    Atualmente minha prática está em linguagens, como: Javascript, ReactJS, React Native, NodeJs,
                    Banco de Dados SQL e NoSQL.
                </p>

                <div className="button">
                    <Link to="/projects"><Button>Meus Projetos</Button></Link>
                    <Link to="/"><Button>Home</Button></Link>

                </div>
            </SMain>

            <SAside2>
                <a href="https://www.linkedin.com/in/william-berbet/" target="_blank" rel="noreferrer"><img src={Linkedin} alt='' /></a>
                <a href="https://github.com/will10iam" target="_blank" rel="noreferrer"><img src={Github} alt='' /></a>
                <a href="https://www.instagram.com/willnasredes/" target="_blank" rel="noreferrer"><img src={Instagram} alt='' /></a>
                <a href="https://api.whatsapp.com/send?phone=5519996602839&text=Olá,%20tudo%20bem%20?" target="_blank" rel="noreferrer"><img src={Whats} alt='' /></a>
                <a href="mailto:wiiliamb@hotmail.com" target="_blank" rel="noreferrer"><img src={Email} alt='' /></a>
            </SAside2>
        </>
    )
}

export default About;


// ==================================== STYLES =============================== \\

const SAside2 = styled.div`
    display: flex;
    //flex-direction: column;
    //stify-content: space-between;
    margin-top: 80px;
    align-items: center;

    & img {
        width: 40px;
        margin-left: 25px;
        opacity: 0.5;
    }
`

const SMain = styled.div`
    /* width: 100vw;
    height: 100vh; */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    

    & h1 {
        font-size: 80px;
        margin-left: 25px;
    }

    & h3 {
        color: #f6336c;
        margin-bottom: -40px;
        margin-top: 40px;
        font-size: 25px;
        font-weight: 100;
        margin-left: 25px;
    }

    & p {
        margin-left: 25px;
        font-size: 18px;
        width: 750px;
    }

    & .button {
        display: flex;
        margin-top: 30px;
        margin-left: 25px;

        & a {
            text-decoration: none;
        }
    }
`

