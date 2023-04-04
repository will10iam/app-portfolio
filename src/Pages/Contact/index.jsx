import styled from "styled-components";
import { Link } from "react-router-dom";
import img from "../../Assets/contactimg.png"
import React from "react";
import cvpdf from '../../Assets/WillCV.pdf'





export default function Contact() {

    return (

        <>
            <Ficha>
                <img src={img} alt="" />

                <h1>William Berbet</h1>
                <h2>Desenvolvedor Web & Mobile</h2>


                <div className="icons">
                    <a
                        href="https://www.instagram.com/willnasredes/"
                        target="_blank"
                        rel="noreferrer">
                        <ion-icon
                            name="logo-instagram">
                        </ion-icon>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/william-berbet/"
                        target="_blank"
                        rel="noreferrer">
                        <ion-icon name="logo-linkedin">
                        </ion-icon>
                    </a>
                </div>

                <br></br>
                <a href={cvpdf} target="_blank" rel="noreferrer" id="cv">DOWNLOAD CV </a>

            </Ficha>

        </>
    )
}


// ==================================== STYLES =============================== \\


const Ficha = styled.div`
text-align: center;
background-color: #AF053F;
display: flex;
flex-direction: column;
align-items: center;
margin-right: 1100px;
margin-top: -20px;
height: 700px;
width: 300px;
    
    
    & img {
        width: 205px;
        margin-top: 30px;
    }

    h1 {
        font-family: 'Qatar2022', sans-serif;
        color: #E8B298;
        text-align: center;
        font-size: 35px;
        margin-top: 50px;
        margin-bottom: -10px;
    }

    h2 {
        font-family: 'Cairo', sans-serif;
        color: #F6336C;
        text-align: center;
        font-weight: 100;
        font-size: 20px;
    }

    ion-icon {
        color: #E8B298;
        font-size: 35px;
        margin-top: 20px;
        cursor: pointer;
    }

    #cv {
        text-decoration: none;
        background-color: #E8B298;
        padding: 10px;
        border-radius: 15px;
        color: #AF053F;
        font-weight: 700;
        font-family: 'Qatar2022';
        font-size: 20px;
        align-items: center;
    }
`