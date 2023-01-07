import React from "react";
import location from './assets/location (2).png'

const Card = (props) => {
    return(
        <div className="card">
            <div className="card--left">
                <img src={props.img} alt='card--img'></img>
            </div>
            <div className="card--right">
                <div className="card--location">
                    <img src={location} alt='card-loc'></img>
                    <h3>{props.location}</h3>
                    <a href={props.link}>View on Google Maps</a>
                </div>
                <h2 className="card--title">{props.title}</h2>
                <h5 className="card-date">{props.startDate} - {props.endDate}</h5>
                <p className="card-text">{props.text}</p>
                
            </div>
        </div>

    )

}

export default Card