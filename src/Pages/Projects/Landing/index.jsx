import React, { useState, Children } from 'react';
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import './index.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// maximo de cards que serão vistos na tela
const VISIBILIDADE_MAXIMA = 3;

// conteudo dos cartões
const CONTEUDO_CARTOES = [
    {
        titulo: "Imersão em Conteúdo",
        conteudo: "Landing Page para um curso/mentoria!",
        button: "Código do Projeto",
        botão: "Site do Projeto",
        code: "https://github.com/will10iam/landing-page1",
        site: "https://landing-pageone.netlify.app/",
        tech: "ReactJs, Styled Components",
    },
    {
        titulo: "Manhã com O RH",
        conteudo: "Landing Page de coletar dados pra uma lista de espera de uma palestra .",
        button: "Código do Projeto",
        botão: "Site do Projeto",
        code: "https://github.com/will10iam/landing-page2",
        site: "https://landing-pagetwo.netlify.app/",
        tech: "ReactJs, Styled Components",
    },
    {
        titulo: "Intercâmbio Gratuito pela Europa",
        conteudo: "Landing Page que coleta dados em troca de um ebook enviado no email.",
        button: "Código do Projeto",
        botão: "Site do Projeto",
        code: "https://github.com/will10iam/landing-page3",
        site: "hhttps://landing-pagethree.netlify.app/",
        tech: "ReactJs, Styled Components",
    },
];

// layout do cartão
const Cartao = ({ titulo, conteudo, button, botão, code, site, tech }) => (
    <div className='cartao'>
        <h2>{titulo}</h2>
        <p>{conteudo}</p>
        <h3>Tecnologias Usadas</h3>
        <h4>{tech}</h4>
        <a href={code} target='_blank' rel='noreferrer' className='btn1'>{button}</a>
        <a href={site} target='_blank' rel='noreferrer' className='btn2'>{botão}</a>
    </div>
);

//animação do carrosel
const Carrossel = ({ children }) => {
    const [atualAtivo, setAtualAtivo] = useState(0);
    const TOTAL_DE_CARDS = CONTEUDO_CARTOES.length;


    //renderização na tela
    return (
        <div className='carrosel-geral'>
            {atualAtivo > 0 && (
                <button
                    className='navegacao esquerda'
                    onClick={() => setAtualAtivo((i) => i - 1)}
                >
                    <TiChevronLeftOutline />
                </button>
            )}
            {Children.map(children, (elementoFilho, i) => (
                <div
                    className='conteudo-geral'
                    key={i}
                    style={{
                        "--atualAtivo": i === atualAtivo ? 1 : 0,
                        "--compensacao": (atualAtivo - i) / 3,
                        "--direcao": Math.sign(atualAtivo - i),
                        "--abs-compensacao": Math.abs(atualAtivo - i) / 3,
                        pointerEvents: atualAtivo === i ? "auto" : "none",
                        opacity: Math.abs(atualAtivo - i) >= VISIBILIDADE_MAXIMA ? "0" : "1",
                        display: Math.abs(atualAtivo - i) >= VISIBILIDADE_MAXIMA ? "none" : "block",

                    }}
                >
                    {elementoFilho}
                </div>
            ))}
            {atualAtivo < TOTAL_DE_CARDS - 1 && (
                <button
                    className='navegacao direita'
                    onClick={() => setAtualAtivo((i) => i + 1)}
                >
                    <TiChevronRightOutline />
                </button>
            )}
        </div>
    );
};



function App() {
    return (
        <>

            <Header>
                <Link to='/projects'><h2>Voltar para Categorias</h2></Link>
            </Header>

            <Container>
                <Carrossel>
                    {CONTEUDO_CARTOES.map((_, i) => (
                        <Cartao
                            key={i}
                            titulo={CONTEUDO_CARTOES[i].titulo}
                            conteudo={CONTEUDO_CARTOES[i].conteudo}
                            button={CONTEUDO_CARTOES[i].button}
                            botão={CONTEUDO_CARTOES[i].botão}
                            code={CONTEUDO_CARTOES[i].code}
                            site={CONTEUDO_CARTOES[i].site}
                            tech={CONTEUDO_CARTOES[i].tech}
                        />
                    ))}
                </Carrossel>
            </Container>
        </>
    );
}

export default App;


// ==================================== STYLES =============================== \\

const Container = styled.div`
    margin-left: -130px;

`

const Header = styled.div`
    margin-top:-200px;
    margin-left: -130px;

    & h2 {
        font-size: 25px;
        margin-bottom: 40px;
        text-align: center;
        color: #F6336C;
        font-family: 'Cairo', sans-serif;
        font-weight: 100;
    }

    & a {
        text-decoration: none;
    }
`


