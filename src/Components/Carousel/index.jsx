import React from "react";
import './index.css'

import html from '../../Assets/html.svg'
import css from '../../Assets/css.svg'
import javas from '../../Assets/javas.svg'
import react from '../../Assets/react.svg'
import node from '../../Assets/node.svg'
import types from '../../Assets/types.svg'
import styles from '../../Assets/styles.svg'
import sass from '../../Assets/sass.svg'


export default function Carousel() {
    return (
        <>
            <div className="conteudo">
                <div className="carrosel">
                    <div className="caixa__card cc__1"><img src={html} width="120px" alt='' /></div>
                    <div className="caixa__card cc__2"><img src={css} width="120px" alt='' /></div>
                    <div className="caixa__card cc__3"><img src={javas} width="120px" alt='' /></div>
                    <div className="caixa__card cc__4"><img src={react} width="120px" alt='' /></div>
                    <div className="caixa__card cc__5"><img src={styles} width="120px" alt='' /></div>
                    <div className="caixa__card cc__6"><img src={node} width="120px" alt='' /></div>
                    <div className="caixa__card cc__7"><img src={types} width="120px" alt='' /></div>
                    <div className="caixa__card cc__8">
                        <img src={sass} alt='' width="90px" />
                    </div>
                </div>
            </div>

        </>
    )
}