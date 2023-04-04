import PropTypes from "prop-types"
import React from 'react';
import styled from "styled-components";

export default function Progress(props) {
    const { value, max, color, width } = props;
    return (
        <Container color={color} width={width}>
            <progress value={value} max={max} />
        </Container>
    )
}

const Container = styled.div`
    progress[value] {
        width: ${props => props.width};
        appearance: none;

        ::-webkit-progress-bar {
            height: 10px;
            border-radius: 20px;
            background-color: rgba(219,200,200, 10%);
            
        }

        ::-webkit-progress-value {
            height: 10px;
            border-radius: 20px;
            background-color: ${props => props.color};
        }

    }
`;

Progress.propTypes = {
    value: PropTypes.number.isRequired,
    max: PropTypes.number,
    color: PropTypes.string,
    width: PropTypes.string,
};

Progress.defaultProps = {
    max: 100,
    color: '#ff7979',
    width: '150px'
};

