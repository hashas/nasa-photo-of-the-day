import React from "react";
import "./Header.css";

const Header = (props) => {
    return (
        <div>
            <h1>NASA Photo Of The Day</h1>
            <h2>{props.titleData}</h2>
            <p>
                Everday NASA publishes a photo of the universe
                from their Library with a brief explanation from an astronomer.
            </p>
        </div>
    )
};

export default Header;