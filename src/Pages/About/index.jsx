import styled from "styled-components";
import { Link } from "react-router-dom";

import barber from '../../Assets/barber.svg'


export function About() {
    return (
        <SContainer>

            <SAside2>
                <Link to='/'><p>Home</p></Link>
                <Link to='/projects'><p>Meus Projetos</p></Link>
                <Link to='/skills'><p>Habilidades</p></Link>
                <Link to='/contact'><p>Contato</p></Link>
            </SAside2>


            {/* <SAside2>
                <a href="https://www.linkedin.com/in/william-berbet/" target="_blank" rel="noreferrer"><img src={Linkedin} alt='' /></a>
                <a href="https://github.com/will10iam" target="_blank" rel="noreferrer"><img src={Github} alt='' /></a>
                <a href="https://www.instagram.com/willnasredes/" target="_blank" rel="noreferrer"><img src={Instagram} alt='' /></a>
                <a href="https://api.whatsapp.com/send?phone=5519996602839&text=Olá,%20tudo%20bem%20?" target="_blank" rel="noreferrer"><img src={Whats} alt='' /></a>
                <a href="mailto:wiiliamb@hotmail.com" target="_blank" rel="noreferrer"><img src={Email} alt='' /></a>
            </SAside2> */}


            <SMain>

                <div className="sobre">
                    <h3>e ai, na paz de Cristo?!</h3>
                    <h1>Muito Prazer!</h1>
                    <p>Sou um Desenvolvedor Front-End localizado no Brasil. Amante de frango frito, música, esportes e praticante de Muay Thai!
                        Pessoa organizada, solucionadora de problemas e que confia na paixão pelo aprendizado, atenção aos detalhes e
                        comunicação eficaz para entregar resultados excepcionais.
                    </p>
                    <p>Interessado em todo o universo Front-End, Web & Mobile e trabalhar com pessoas positivas e em projetos ambiciosos.</p>
                    <Link to='/contact'><p className="sobre1">Vamos produzir algo legal juntos!</p></Link>
                </div>

                <div className="carrossel">
                    <img src={barber} alt="" />
                </div>
            </SMain>





        </SContainer>
    )
}

export default About;


// ==================================== STYLES =============================== \\

const SContainer = styled.div`
    background-image: url('../src/Assets/bg1.png');
`

const SAside2 = styled.div`
    display: flex;
    margin-left: 890px;
    margin-top: -20px;

    & a {
        text-decoration: none;
    }
    

    & p {
        font-size: 20px;
        margin-left: 15px;
        opacity: 0.5;
        cursor: pointer;
    }
    
    p:hover{
        opacity: 0.8;
    }
`

const SMain = styled.div`
    width: 100vw;
    height: 100vh; 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    

    & h1 {
        font-size: 80px;
        margin-left: 25px;
        font-family: 'Qatar2022', sans-serif;
        margin-top: 40px;
                                                
    }

    & h3 {
        color: #f6336c;
        margin-bottom: -40px;
        margin-top: -10px;
        font-size: 25px;
        font-weight: 100;
        margin-left: 25px;
        font-family: 'Qatar2022', sans-serif;
                                                
    }

    & p {
        margin-left: 25px;
        font-size: 20px;
        width: 800px;
        font-family: 'Cairo', sans-serif;
        margin-top: 10px;
        font-weight: 100;
        line-height: 40px ;
    }

    & .carrossel {
        margin-top: 50px;
        margin-right: 80px;

        & img {
            width: 500px;
        }
    }

    & .sobre {
        margin-top: 10px;
        margin-left: -50px;
    }

    & .sobre1 {
        margin-top: 50px;
        color: #f6336c;
        cursor: pointer;
        font-style: italic;
    }

    & a {
        text-decoration: none;
    }
`

