import styled from "styled-components";
import Portfolio from '../../Assets/portfolio.png'
import ToDo from '../../Assets/todoapp.png'
import Comedoria from '../../Assets/comedoria.png'
import Gamelandia from '../../Assets/gamelandia.png'
import PatchNinjas from '../../Assets/patchninjas.png'
import Jokenpo from '../../Assets/jokenpo.png'
//import { Link } from "react-router-dom";


export function Projects() {
    return (
        <>
            <SHeader>
                <h1>Meus melhores projetos!</h1>
            </SHeader>

            <SMain>
                <img src={Portfolio} alt='' className="image" />
                <img src={Comedoria} alt='' className="image" />
                <img src={ToDo} alt='' className="image" />
                <img src={PatchNinjas} alt='' className="image" />
                <img src={Gamelandia} alt='' className="image" />
                <img src={Jokenpo} alt='' className="image" />

            </SMain>

            <footer>

            </footer>
        </>
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
    display: grid ;
    grid-template-columns: auto auto auto auto;
    justify-content: start;

    & .image {
        opacity: 1;
        display: block;
        width: 340px;
        height: 215px;
        transition: .5s ease;
        backface-visibility: hidden;
    }
`