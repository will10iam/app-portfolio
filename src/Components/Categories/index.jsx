import React from "react";
import './index.css'




export default function Categories(props) {

    return (
        <>
            <div class="card__giratorio">
                <div class="card__giratorio-conteudo">
                    <div class="card__giratorio-conteudo--frente">
                        <div>{props.icon}</div>
                        <h1>{props.name}</h1>
                    </div>
                    <div class="card__giratorio-conteudo--traseira">
                        <div>{props.icon}</div>
                        <h1>Ver Projetos</h1>
                    </div>
                </div>
            </div>

        </>
    )
}