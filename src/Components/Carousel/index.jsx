import React from "react";
import './index.css'

import html from '../../Assets/html.svg'
import css from '../../Assets/css.svg'
import javas from '../../Assets/javas.svg'
import react from '../../Assets/react.svg'
import native from '../../Assets/reactnat.svg'
import node from '../../Assets/node.svg'


export default function Carousel() {
    return (
        <>
            <div className="conteudo">
                <div className="carrosel">
                    <div className="caixa__card cc__1"><img src={html} width="120px" alt='' /></div>
                    <div className="caixa__card cc__2"><img src={css} width="120px" alt='' /></div>
                    <div className="caixa__card cc__2"><img src={javas} width="120px" alt='' /></div>
                    <div className="caixa__card cc__4"><img src={react} width="120px" alt='' /></div>
                    <div className="caixa__card cc__5"><img src={native} width="120px" alt='' /></div>
                    <div className="caixa__card cc__6"><img src={node} width="120px" alt='' /></div>
                    <div className="caixa__card cc__7"><img src={html} width="120px" alt='' /></div>

                </div>
            </div>

        </>
    )
}