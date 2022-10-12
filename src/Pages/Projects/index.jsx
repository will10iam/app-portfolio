import styled from "styled-components";
import Portfolio from '../../Assets/portfolio3.png'
import ToDo from '../../Assets/todoapp.png'
import Comedoria from '../../Assets/comedoria.png'
import Gamelandia from '../../Assets/gamelandia.png'
import PatchNinjas from '../../Assets/patchninjas.png'
import Jokenpo from '../../Assets/jokenpo.png'
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
                            <h2>Nome do Projeto</h2>
                            <div className="texto">
                                <span className="g">Ver mais</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="card card1">
                        <div className="border">
                            <h2>Nome do Projeto</h2>
                            <div className="texto">
                                <span className="g">Ver mais</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="card card2">
                        <div className="border">
                            <h2>Nome do Projeto</h2>
                            <div className="texto">
                                <span className="g">Ver mais</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="card card3">
                        <div className="border">
                            <h2>Nome do Projeto</h2>
                            <div className="texto">
                                <span className="g">Ver mais</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <img src={Portfolio} alt='' className="image" /> */}
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
    /* display: grid ;
    grid-template-columns: auto auto auto auto;
    justify-content: start;
    gap: 3px; */

   /*  & .image {
        opacity: 1;
        display: block;
        width: 339px;
        height: 215px;
        transition: .5s ease;
        backface-visibility: hidden;

        &:hover {
        opacity: 0.5;
    }
    } */

    & .main{
        display: flex;
    }

    & .container {
        display: grid;
        grid-template-columns: auto auto auto auto;
        justify-content: space-around;
        align-items: center;
        margin-left: 30px;
    }

    /* & .border {
        height: 298px;
        width: 300px;
        background: transparent;
        border-radius: 10px;
        transition: border 1s;
        position: relative;
    } */

    /* & .border:hover{
        border: 1px solid #fff;
    } */

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
        background: url(${Portfolio}) left center no-repeat;
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
        background: url(${Comedoria}) left center no-repeat;
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
        background: url(${Gamelandia}) center center no-repeat;
        background-size: 300px;
    }

    .card3:hover{
        background: url(${Gamelandia}) left center no-repeat;
        background-size: 600px;
    }

    .card3:hover h2{
        opacity: 1;
    }

    .card3:hover .g{
        opacity: 1;
    }
       // ------------------------------------------------------ \\

    & h2 {
        color: #fff;
        margin-left: 20px;
        opacity: 0;
        transition: opacity 1s;
        top: 116px;
        left: 50px;
        position: absolute;
    }

    & .g {
        opacity: 0;
        transition: opacity 1s;
    }

    & .texto{
        position: absolute;
        margin-left: 10px;
        color: #fff;
        height: 130px;
        top: 156px;
        left: 100px;
        align-items: center;
        justify-content: space-around;
    }
`