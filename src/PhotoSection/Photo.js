import React from "react";
import "./Photo.css"

const Photo = (props) => {
    return (
        <div>
            <img className="Photo" src={props.imgData} alt="placeholder text" />
        </div>
    );
};

export default Photo;