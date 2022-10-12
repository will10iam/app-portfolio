import styled from "styled-components";

import Portfolio from '../../Assets/portfolio3.png'
import MeuPortfolio from '../../Assets/portfolio-teste.png'

import ToDo from '../../Assets/todoapp.png'

import Comedoria from '../../Assets/comedoria.png'
import MeuComedoria from '../../Assets/meu-comedoria.png'

import Gamelandia from '../../Assets/gamelandia.png'
import MeuGamelandia from '../../Assets/meu-gamelandia.png'

import PatchNinjas from '../../Assets/patch.png'
import MeuPatch from '../../Assets/meu-patch.png'

import Jokenpo from '../../Assets/jokenpo.png'
import MeuJokenpo from '../../Assets/meu-jokenpo.png'
//import { Link } from "react-router-dom";


export function Projects() {
    return (
        <SMain>
            <SHeader>
                <h1>Meus melhores projetos!</h1>
            </SHeader>

            <div className="main">
                <div className="container">
                    <div className="card card0">
                        <div className="border">
                            <h2>Ver Detalhes</h2>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="card card1">
                        <div className="border">
                            <h2>Ver Detalhes</h2>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="card card2">
                        <div className="border">
                            <h2>Ver Detalhes</h2>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="card card3">
                        <div className="border">
                            <h2>Ver Detalhes</h2>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="card card4">
                        <div className="border">
                            <h2>Ver Detalhes</h2>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="card card5">
                        <div className="border">
                            <h2>Ver Detalhes</h2>
                        </div>
                    </div>
                </div>
            </div>

            <footer>

            </footer>
        </SMain>
    )
}

export default Projects;

// ==================================== STYLES ===============================

const SHeader = styled.div`
    display: flex;
    justify-content: center;
    font-size: 30px;
    align-items: center;
    width: 1360px;
`

const SMain = styled.div`

    & .main{
        display: grid;
        grid-template-columns: auto auto auto auto;
        gap: 10px;
    }

    & .container {
        margin: 5px;
        padding-left: 15px;
    }

    & .card {
        height: 300px;
        width: 300px;
        //background-color: #808080;
        border-radius: 10px;
        transition: background 0.8s;
        overflow: hidden;
        background: #000;
        box-shadow: 0 70px 63px -60px #000;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        cursor: pointer;
    }
// ============================== CARDS ============================== \\

    .card0{
        background: url(${Portfolio}) center center no-repeat;
        background-size: 300px;
    }

    .card0:hover{
        background: url(${MeuPortfolio}) left center no-repeat;
        background-size: 600px;
    }

    .card0:hover h2{
        opacity: 1;
    }

    .card0:hover .g{
        opacity: 1;
    }
       // ------------------------------------------------------ \\

    .card1{
        background: url(${ToDo}) center center no-repeat;
        background-size: 300px;
    }

    .card1:hover{
        background: url(${ToDo}) left center no-repeat;
        background-size: 600px;
    }

    .card1:hover h2{
        opacity: 1;
    }

    .card1:hover .g{
        opacity: 1;
    }
       // ------------------------------------------------------ \\
    .card2{
        background: url(${Comedoria}) center center no-repeat;
        background-size: 300px;
    }

    .card2:hover{
        background: url(${MeuComedoria}) left center no-repeat;
        background-size: 600px;
    }

    .card2:hover h2{
        opacity: 1;
    }

    .card2:hover .g{
        opacity: 1;
    }
       // ------------------------------------------------------ \\
    .card3{
        background: url(${PatchNinjas}) center center no-repeat;
        background-size: 300px;
    }

    .card3:hover{
        background: url(${MeuPatch}) left center no-repeat;
        background-size: 600px;
    }

    .card3:hover h2{
        opacity: 1;
    }

    .card3:hover .g{
        opacity: 1;
    }
       // ------------------------------------------------------ \\
    .card4{
        background: url(${Gamelandia}) center center no-repeat;
        background-size: 300px;
    }

    .card4:hover{
        background: url(${MeuGamelandia}) left center no-repeat;
        background-size: 600px;
    }

    .card4:hover h2{
        opacity: 1;
    }

    .card4:hover .g{
        opacity: 1;
    }
       // ------------------------------------------------------ \\
    .card5{
        background: url(${Jokenpo}) center center no-repeat;
        background-size: 300px;
    }

    .card5:hover{
        background: url(${MeuJokenpo}) left center no-repeat;
        background-size: 600px;
    }

    .card5:hover h2{
        opacity: 1;
    }

    .card5:hover .g{
        opacity: 1;
    }
       // ------------------------------------------------------ \\

    & h2 {
        color: #fff;
        margin-left: 20px;
        opacity: 0;
        transition: opacity 1s;
        top: 136px;
        left: 60px;
        position: absolute;
    }
`