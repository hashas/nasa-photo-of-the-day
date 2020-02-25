import React from "react";
import "./Header.css";
import styled from 'styled-components';

const WrapperDiv = styled.div`
    width: 700px;
    margin: 0px auto;
`;

const SubHeader = styled.h2`
    font-style: italic;
    padding: 20px 0px;
`;

const Header = (props) => {
    return (
        <WrapperDiv>
            <h1>NASA Photo Of The Day</h1>
            <SubHeader>{props.titleData}</SubHeader>
            <p>
                Everday NASA publishes a photo of the universe
                from their Library with a brief explanation from an astronomer.
            </p>
        </WrapperDiv>
    )
};

export default Header;