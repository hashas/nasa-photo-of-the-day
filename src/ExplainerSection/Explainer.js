import React from "react";
import "./Explainer.css";

const Explainer = (props) => {
    return (
        <div>
            <p>{props.explainerData}</p>
        </div>
    );
};

export default Explainer;