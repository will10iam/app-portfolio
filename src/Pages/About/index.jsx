import styled from "styled-components";
import { Link } from "react-router-dom";


import barber from '../../Assets/barber.svg'
import Carousel from "../../Components/Carousel";


export function About() {
    return (
        <SContainer>

            <SAside2>
                <Link to='/'><p>Home</p></Link>
                <Link to='/projects'><p>Meus Projetos</p></Link>
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
                    <p>Sou o William, 28 anos, localizado em Limeira, São Paulo.</p>
                    <p>Amante de frango frito, música e muai thay!</p>
                    <p>Eu crio sites responsivos que são rápidos, fáceis de usar e construídos com as melhores práticas.</p>
                    <p>A principal área de minha especialização é desenvolvimento front-end com HTML, CSS & JS na criação de aplicativos da Web.</p>
                    <p>Também tenho praticado a criação de aplicativos mobile Android e iOs através do React Native. </p>

                    <Link to='/contact'><p className="sobre1">Vamos produzir algo legal juntos!</p></Link>

                    <h2>Formações</h2>
                    <Card>
                        <div className="form">
                            <h1>ADMINISTRAÇÃO DE EMPRESAS</h1>
                            <h2>2017-2020 • UNIP</h2>
                        </div>

                        <div className="form">
                            <h1 id="dev">DESENVOLVIMENTO WEB FULL STACK</h1>
                            <h2>2022 • UNIP</h2>
                        </div>
                    </Card>

                </div>

                <div className="comp" >
                    <Carousel />
                </div>

                {/* <div className="carrossel">
                    <img src={barber} alt="" />
                </div> */}
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
    margin-left: 990px;
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
        margin-left: 30px;
        font-family: 'Qatar2022', sans-serif;
        margin-top: 40px;
                                                
    }

    & h3 {
        color: #f6336c;
        margin-bottom: -40px;
        margin-top: -30px;
        font-size: 25px;
        font-weight: 100;
        margin-left: 30px;
        font-family: 'Qatar2022', sans-serif;
                                                
    }

    & p {
        margin-left: 30px;
        font-size: 18px;
        width: 750px;
        font-family: 'Cairo', sans-serif;
        margin-top: 10px;
        font-weight: 100;
        line-height: 20px ;
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
        margin-top: 30px;
        color: #f6336c;
        cursor: pointer;
        font-style: italic;
        opacity: 0.8;
    }

    & .sobre1:hover {
        opacity: 1;
    }

    & a {
        text-decoration: none;
    }

    & h2 {
        margin-top: 40px;
        font-size: 25px;
        margin-left: 30px;
        font-family: 'Qatar2022', sans-serif;
    }

    & .form {
       border: 1px solid #f6336c;
       text-align: center;
       width: 250px;
       border-radius: 20px;
    }

    & .comp {
        margin-top: 290px;
        margin-right: 80px;
    }
`

const Card = styled.div`
    display: flex;

    & .form {
        border: 1px solid #f6336c;
        border-radius: 20px;
        height: 80px;
        width: 180px;
        margin-left: 50px;
        margin-top: 20px;

    }
    & h1 {
        width: 150px;
        margin-top: 10px;
        margin-left: 15px;
        font-size: 16px;
        text-align: center;
    }
    & h2 {
        margin-top: 2px;
        margin-left: -1px;
        font-size: 13px;
        font-family: 'Cairo';
        font-weight: 100;
    }

    & #dev {
        margin-left: 13px;
    }
`

