import React from "react";
import './index.css'

export function Home(props) {
    return (
        <>
            <ul>
                <li>
                    <span className="icon"><ion-icon name="home-outline"></ion-icon></span>
                    <span className="title">{props.title}</span>
                </li>
            </ul>

        </>
    )
}

export default Home;

