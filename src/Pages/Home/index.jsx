import styled from "styled-components";
import Linkedin from '../../Assets/linkedin.png'
import Github from '../../Assets/github.png'
import Instagram from '../../Assets/instagram.png'



export function Home() {
    return (
        <>
            <SMain>
                <h1>Oi, eu sou o William!</h1>
                <h3>Desenvolvedor Web/Mobile Front End</h3>
            </SMain>

            <SAside>
                <p>wiiliamb@hotmail.com</p>
            </SAside>

            <SAside2>
                <a href="https://www.linkedin.com/in/william-berbet/" target="_blank" rel="noreferrer"><img src={Linkedin} alt='' /></a>
                <a href="https://github.com/will10iam" target="_blank" rel="noreferrer"><img src={Github} alt='' /></a>
                <a href="https://www.instagram.com/willnasredes/" target="_blank" rel="noreferrer"><img src={Instagram} alt='' /></a>
            </SAside2>
        </>
    )
}

export default Home;


// ==================================== STYLES ===============================

const SMain = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    

    & h1 {
        font-size: 80px;
    }

    & h3 {
        color: #f6336c;
        margin-top: -30px;
        font-size: 25px;
        font-weight: 100;
    }
`

const SAside = styled.div`
    display: flex;
    flex-direction: column;

    & p {
        transform: rotate(90deg);
        margin-left: 1330px;
        margin-top: -500px;
        opacity: 0.8;
        font-size: 20px;
    }
`
const SAside2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: -170px;

    & img {
        width: 40px;
        margin-left: 25px;
        opacity: 0.5;
    }
`
