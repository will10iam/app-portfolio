import styled from "styled-components";

import { Link } from "react-router-dom";

import About from "../../Components/About";
import Projects from "../../Components/Projects";
import Contact from "../../Components/Contact";
import Skills from "../../Components/Skills";


export function Home() {
    return (
        <SContainer>

            <SMain>
                <h1>Oi, eu sou o William!</h1>
                <h3>Desenvolvedor Web/Mobile Front End</h3>

                <div className="button">
                    <Link to="/about"><About /></Link>
                    <Link to="/projects"><Projects /></Link>
                    <Link to='/skills'><Skills /></Link>
                    <Link to='/contact'><Contact /></Link>
                </div>
            </SMain>



            {/* <div>
                <SAside2>
                    <a href="https://api.whatsapp.com/send?phone=5519996602839&text=Olá,%20tudo%20bem%20?" target="_blank" rel="noreferrer"><img src={Whats} alt='' /></a>
                    <a href="https://www.linkedin.com/in/william-berbet/" target="_blank" rel="noreferrer"><img src={Linkedin} alt='' /></a>
                    <a href="https://github.com/will10iam" target="_blank" rel="noreferrer"><img src={Github} alt='' /></a>
                    <a href="https://www.instagram.com/willnasredes/" target="_blank" rel="noreferrer"><img src={Instagram} alt='' /></a>
                    <a href="mailto:wiiliamb@hotmail.com" target="_blank" rel="noreferrer"><img src={Email} alt='' /></a>
                </SAside2>
            </div> */}
        </SContainer>
    )
}

export default Home;


// ==================================== STYLES ===============================

const SContainer = styled.div`
    background-size: cover;
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
        font-family: 'Qatar2022', sans-serif;
        
                                                

        @media (max-width: 705px) {
            font-size: 50px;
        }

        @media (max-width: 442px) {
            font-size: 30px;
        }
    }

    & h3 {
        color: #f6336c;
        margin-top: -0px;
        font-size: 25px;
        font-weight: 100;
        font-family: 'Qatar2022', sans-serif;
        margin-bottom: 15px;
                                                

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
        gap: 25px;
        
        & a {
            text-decoration: none;
        }
    }
`

/* const SAside = styled.div`
    
    & img {
        width: 50px;
    }

` */

/* const SAside2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: -277px;
    margin-bottom: 10px;
    padding: 0;

    & img {
        width: 50px;
        margin-left: 25px;
        opacity: 0.5;
    }

    img:hover{
        opacity: 0.8;
    }

    a {

        width: 100px;
    }
` */
