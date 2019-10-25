import React from "react";

import './SkinTypeFind.css';


class SkinTypeFind extends React.Component {
    constructor() {
        super();
        this.state = {
            types: []

        };
    }

    componentDidMount() {
        fetch("https://glacial-meadow-87719.herokuapp.com/skintype", {
            method: "GET"
        })
            .then(res => res.json())
            .then(res =>
                this.setState({
                    types: res
                })
            );


    }
    render() {

        return (

            <div className="skintypefind" aria-live="polite">
                <p className="skintypestep"><strong>Step 1: </strong>Remove your makeup and Face your wash completely before going to bed at night.
          Make sure you do not apply any product.</p>
                <p className="skintypestep"><strong>Step 2: </strong>Examine the pictures to determine your skin type</p>

                <ul className="skintypebox">

                    {this.state.types.map((product, index) => (
                        <li className="skintype-item-box" key={index}>
                            <img  className="item-box-img" alt="products" src={`/skintypeimages/${product.image}`} />
                            <h1>{product.skintype}</h1>
                            <p>{product.details}</p>
                        </li>
                    ))}
                </ul>

            </div>
        );
    }
}

export default SkinTypeFind;