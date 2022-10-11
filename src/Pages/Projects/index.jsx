import styled from "styled-components";
//import { Link } from "react-router-dom";


export function Projects() {
    return (
        <>
            <SMain>
                <h1>Esses são meus melhores projetos!</h1>
            </SMain>

        </>
    )
}

export default Projects;

// ==================================== STYLES ===============================

const SMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    

    & h1 {
        font-size: 50px;
        width: 950px;
        margin-left: 25px;
    }
    
`