import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

export default function NavBar(props) {
    return (
        <div className="Navigation" role="navigation">
            <Link to="/skintype/combination" className="nav-link" >Combination Skin</Link>
            <Link to="/skintype/oily" className="nav-link" >Oily Skin</Link>

            <Link to="/skintype/dry" className="nav-link">Dry Skin</Link>
            <Link to="/skintype/normal" className="nav-link">Normal Skin</Link>
           
            <Link to="/help" className="nav-link">Find my skin type?</Link>
            <Link to="/review" className="nav-link">Reviews</Link>
           
        </div>

    );
}