import React from "react";
import "./App.css";

export default function (props) {
    return (<section className="card">
        {props.openSpots===0 &&<div className="card--badge">SOLD OUT</div>}
        <img src={props.img} className="card--image"></img>
        <div className="card--stats">
            <span>⭐{props.rating}</span> <span>({props.reviewCount}) • </span>
            <span>{props.country}</span>
        </div>

        <p className="card--title">{props.title}</p>
        <h2 className="card--price">From ${props.price} <span>/person</span></h2>
    </section>
    )
}