import React, { Component } from 'react';
import { Link } from "react-router-dom";
import poultry from "../poultry.jpg";
import feed from "../feed.jpg";
import frozenfood from "../frozenfood.jpg";
import grains from "../grains.jpg";
import tubers from "../tubers.jpg";



export default class Home extends Component {
    render() {
        return (
            <div className="container imgContainer">
                <Link to="/poultry">
                    <img src={poultry} alt="chicken" />
                    Poultry
                </Link>

                <Link to="/feed">
                    <img src={feed} alt="animal feed" />
                    Animal feed
                </Link>

                <Link to="/frozenfood">
                    <img src={frozenfood} alt="Frozen food"/>
                    Frozen food
                </Link>

                <Link to="/grains">
                    <img src={grains} alt="Grains" />
                    Grains
                </Link>

                <Link to="/tubers">
                    <img src={tubers} alt="Tubers" /><br/>
                    Tubers
                </Link>

            </div>
        )
    }
}
