import React from "react";

const Card = (props) => {
    return(
        <div className="card">
            <div className="card--left">
                <img src={props.img} alt='card--img'></img>
            </div>
        </div>

    )

}

export default Card