import Categories from "../../Components/Categories";
import { GiGamepad } from "react-icons/gi";
import { TbDeviceLaptop } from "react-icons/tb";
import { CiMobile1 } from "react-icons/ci";
import { RiPagesLine } from "react-icons/ri";

import { Link } from "react-router-dom";

import styled from "styled-components";



export default function Projects() {
    return (
        <Container>
            <Header>
                <h1>Meus projetos estão divididos em</h1>
                <h2>Dica: passe o mouse sobre o card!</h2>
            </Header>

            <div className="main">
                <Link to='/web'><Categories name="Aplicações Web" icon={<TbDeviceLaptop size={60} />} /></Link>
                <Categories name="Apps Mobile" icon={<CiMobile1 size={60} />} />
                <Link to='/landing'><Categories name="Landing Pages" icon={<RiPagesLine size={60} />} /></Link>
                <Categories name="Games Web" icon={<GiGamepad size={60} />} />
            </div>


            <SAside2>
                <Link to='/'><p>Home</p></Link>
                <Link to='/about'><p>Sobre Mim</p></Link>
                <Link to='/skills'><p>Habilidades</p></Link>
                <Link to='/contact'><p>Contato</p></Link>
            </SAside2>
        </Container>
    )
}


// ==================================== STYLES ===============================

const Header = styled.div`
    margin-top: -90px;
    margin-left: -130px;

    & h1 {
        text-align: center;
        font-family: 'Qatar2022', sans-serif;
        font-size: 60px;
        margin-bottom: -15px;
                                             
    }

    & h2 {
        text-align: center;
        font-family: 'Cairo', sans-serif;
        font-style: italic;
        font-weight: 100;
        font-size: 20px;
        margin-bottom: 100px;
        color:#f6336c;
    }
`

const Container = styled.div`
    & .main{
            display: grid;
            grid-template-columns: auto auto auto auto;
            gap: 10px;
            margin-left: -130px;
        }
`


const SAside2 = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 100px;
    margin-left: -130px;
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
        color:#f6336c;
    }
`