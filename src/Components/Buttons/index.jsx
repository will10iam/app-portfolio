import React from "react";
import styled from "styled-components";

export function Buttons({ children }) {
    return (
        <SButton>
            {children}
        </SButton>
    )
}


export default Buttons;


// ==================================== STYLES ===============================

const SButton = styled.div`
    color:#fff;
    background-color: #AF053F;
    border-radius: 20px;
    padding: 8px 20px;
    font-size: 20px;
    margin: 10px;
    font-weight: 100;
    /* outline: 1px solid #F4F6FF;
    outline-offset: 2px;
 */
`