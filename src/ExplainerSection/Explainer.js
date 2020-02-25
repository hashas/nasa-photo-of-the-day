import React from "react";
import "./Explainer.css";

import styled from 'styled-components';

const WrapperDiv = styled.div`
    width: 700px;
    margin: 0px auto;
    padding-top: 30px;
`;

const Explainer = (props) => {
    return (
        <WrapperDiv>
            <p>{props.explainerData}</p>
        </WrapperDiv>
    );
};

export default Explainer;