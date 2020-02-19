import React from "react";
import "./Photo.css"

import styled from 'styled-components';

const PhotoDiv = styled.div`
    max-width: 1000px;
    margin: 0px auto;
    text-align: center;
`;

const Photo = (props) => {
    return (
        <PhotoDiv>
            <img className="Photo" src={props.imgData} alt="placeholder text" />
        </PhotoDiv>
    );
};

export default Photo;