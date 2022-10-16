import styled from "styled-components";
import Linkedin from '../../Assets/linkedin.png'
import Github from '../../Assets/github.png'
import Instagram from '../../Assets/instagram.png'
import Button from "../../Components/Buttons";
import Whats from '../../Assets/whats.png'
import Email from '../../Assets/mail.png'


import { Link } from "react-router-dom";


export function Home() {
    return (
        <SContainer>
            <div>
                <SAside>
                    <a
                        href="https://api.whatsapp.com/send?phone=5519996602839&text=Olá,%20tudo%20bem%20?"
                        target="_blank"
                        rel="noreferrer">
                        <img src={Whats} alt='' />
                    </a>
                    <a
                        href="mailto:wiiliamb@hotmail.com"
                        target="_blank"
                        rel="noreferrer">
                        <img src={Email} alt='' />
                    </a>
                </SAside>
            </div>

            <SMain>

                <h1>Oi, eu sou o William!</h1>
                <h3>Desenvolvedor Web/Mobile Front End</h3>

                <div className="button">
                    <Link to="/about"><Button>Sobre Mim</Button></Link>
                    <Link to="/projects"><Button>Meus Projetos</Button></Link>
                </div>
            </SMain>



            <div>
                <SAside2>
                    <a href="https://www.linkedin.com/in/william-berbet/" target="_blank" rel="noreferrer"><img src={Linkedin} alt='' /></a>
                    <a href="https://github.com/will10iam" target="_blank" rel="noreferrer"><img src={Github} alt='' /></a>
                    <a href="https://www.instagram.com/willnasredes/" target="_blank" rel="noreferrer"><img src={Instagram} alt='' /></a>
                </SAside2>
            </div>
        </SContainer>
    )
}

export default Home;


// ==================================== STYLES ===============================

const SContainer = styled.div`
    
`


const SMain = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    

    & h1 {
        font-size: 80px;

        @media (max-width: 705px) {
            font-size: 50px;
        }

        @media (max-width: 442px) {
            font-size: 30px;
        }
    }

    & h3 {
        color: #f6336c;
        margin-top: -30px;
        font-size: 25px;
        font-weight: 100;

        @media (max-width: 705px) {
            font-size: 20px;
        }

        @media (max-width: 442px) {
            font-size: 15px;
            margin-top: -10px;
        }

    }

    & .button {
        display: flex;
        margin-top: 30px;

        & a {
            text-decoration: none;
        }
    }
`

const SAside = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: -120px;
    margin-top: 18px;

    & img {
        margin-left: 1300px;
        opacity: 0.5;
        width: 40px;
    }

    img:hover{
        opacity: 0.8;
    }
`
const SAside2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: -140px;
    padding: 0;

    & img {
        width: 40px;
        margin-left: 25px;
        opacity: 0.5;
    }

    img:hover{
        opacity: 0.8;
    }
`
