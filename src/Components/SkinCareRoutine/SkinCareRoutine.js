import React from "react";
import Rating from "../Rating/Rating";
import "./SkinCareRoutine.css";

export default function SkinCareRoutine(props) {
    let skintype = props.match.params.skintype;
    if (skintype === "combination") {
        skintype = "Combination Skin";
    }
    if (skintype === "oily") {
        skintype = "Oily Skin";
    }
    if (skintype === "normal") {
        skintype = "Normal Skin";
    }
    if (skintype === "dry") {
        skintype = "Dry Skin";
    }
    let step1 = props.products
        .filter(product => product.category === "Cleanse")
        .sort((a, b) => a.originalprice - b.originalprice);
    let step2 = props.products
        .filter(product => product.category === "Treat")
        .sort((a, b) => a.originalprice - b.originalprice);
    let step3 = props.products
        .filter(product => product.category === "Tone")
        .sort((a, b) => a.originalprice - b.originalprice);
    let step4 = props.products
        .filter(product => product.category === "Nourish")
        .sort((a, b) => a.originalprice - b.originalprice);
    let step5 = props.products
        .filter(product => product.category === "Hydrate")
        .sort((a, b) => a.originalprice - b.originalprice);
    return (

        <main className="skinCareRoutine">
            <div className="SelectBar">
                <select aria-label="Select" onChange={e => props.onRating(e.currentTarget.value)}>
                    <option value="0">Rating:</option>
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                </select>
                <select aria-label="Select" onChange={e => props.onRange(e.currentTarget.value)}>
                    <option value="">Range:</option>
                    <option value="$$$">$$$</option>
                    <option value="$$">$$</option>
                    <option value="$">$</option>
                </select>
            </div>
            <button className="step1box btn" onClick={() => props.display1()}>Step 1: Cleanse</button>
            {props.show1 ?
                <ul className="box">
                    {step1
                        .filter(
                            product =>
                                (product.rating >= props.rating) &
                                (product.skintype === skintype) &
                                (props.range === "" ? true : props.range === product.range)
                        )
                        .map((product, index) => (
                            <li className="item-box step1item" key={index}>
                                <img className="item-box-img"
                                    alt="products"

                                    src={
                                        product.image.includes("http") ||
                                            product.image.includes("https")
                                            ? product.image
                                            : `/images/${product.image}`
                                    }
                                />
                                <h1 className="name">{product.name}</h1>
                                <p className="content">{product.content}</p>
                                <Rating value={product.rating} />
                                <p className="price">
                                    {new Intl.NumberFormat("en-US", {
                                        style: "currency",
                                        currency: "USD"
                                    }).format(product.originalprice)}{" "}
                                </p>
                                <p className="detailshead">Details:</p>
                                <p className="details">{product.details}</p>

                            </li>
                        ))}
                </ul>
                : null}
            <button className="step2box btn" onClick={() => props.display2()}>Step 2: Treat</button>
            {props.show2 ?
                <ul className="box">
                    {step2
                        .filter(
                            product =>
                                (product.rating >= props.rating) &
                                (product.skintype === skintype) &
                                (props.range === "" ? true : props.range === product.range)
                        )
                        .map((product, index) => (
                            <li className="item-box step2item" key={index}>
                                <img className="item-box-img"
                                    alt="products"
                                    src={
                                        product.image.includes("http") ||
                                            product.image.includes("https")
                                            ? product.image
                                            : `/images/${product.image}`
                                    }
                                />
                                <h1 className="name">{product.name}</h1>
                                <p className="content">{product.content}</p>
                                <Rating value={product.rating} />
                                <p className="price">
                                    {new Intl.NumberFormat("en-US", {
                                        style: "currency",
                                        currency: "USD"
                                    }).format(product.originalprice)}{" "}
                                </p>
                                <p className="detailshead">Details:</p>
                                <p className="details">{product.details}</p>
                            </li>
                        ))}
                </ul>
                : null}
            <button className="step3box btn" onClick={() => props.display3()}>Step 3: Tone</button>
            {props.show3 ?
                <ul className="box">
                    {step3
                        .filter(
                            product =>
                                (product.rating >= props.rating) &
                                (product.skintype === skintype) &
                                (props.range === "" ? true : props.range === product.range)
                        )
                        .map((product, index) => (
                            <li className="item-box step3item" key={index}>
                                <img className="item-box-img"
                                    alt="products"
                                    src={
                                        product.image.includes("http") ||
                                            product.image.includes("https")
                                            ? product.image
                                            : `/images/${product.image}`
                                    }
                                />
                                <h1 className="name">{product.name}</h1>
                                <p className="content">{product.content}</p>
                                <Rating value={product.rating} />
                                <p className="price">
                                    {new Intl.NumberFormat("en-US", {
                                        style: "currency",
                                        currency: "USD"
                                    }).format(product.originalprice)}{" "}
                                </p>
                                <p className="detailshead">Details:</p>
                                <p className="details">{product.details}</p>
                            </li>
                        ))}
                </ul>
                : null}
            <button className="step4box btn" onClick={() => props.display4()}>Step 4: Nourish</button>
            {props.show4 ?
                <ul className="box">
                    {step4
                        .filter(
                            product =>
                                (product.rating >= props.rating) &
                                (product.skintype === skintype) &
                                (props.range === "" ? true : props.range === product.range)
                        )
                        .map((product, index) => (
                            <li className="item-box step4item" key={index}>
                                <img
                                    alt="products"
                                    src={
                                        product.image.includes("http") ||
                                            product.image.includes("https")
                                            ? product.image
                                            : `/images/${product.image}`
                                    }
                                />
                                <h1 className="name">{product.name}</h1>
                                <p className="content">{product.content}</p>
                                <Rating value={product.rating} />
                                <p className="price">
                                    {new Intl.NumberFormat("en-US", {
                                        style: "currency",
                                        currency: "USD"
                                    }).format(product.originalprice)}{" "}
                                </p>
                                <p className="detailshead">Details:</p>
                                <p className="details">{product.details}</p>
                            </li>
                        ))}
                </ul>
                : null}
            <button className="step5box btn" onClick={() => props.display5()}>Step 5: Hydrate</button>
            {props.show5 ?
                <ul className="box">
                    {step5
                        .filter(
                            product =>
                                (product.rating >= props.rating) &
                                (product.skintype === skintype) &
                                (props.range === "" ? true : props.range === product.range)
                        )
                        .map((product, index) => (
                            <li className="item-box step5item" key={index}>
                                <img className="item-box-img"
                                    alt="products"
                                    src={
                                        product.image.includes("http") ||
                                            product.image.includes("https")
                                            ? product.image
                                            : `/images/${product.image}`
                                    }
                                />
                                <h1 className="name">{product.name}</h1>
                                <p className="content">{product.content}</p>
                                <Rating value={product.rating} />
                                <p className="price">
                                    {new Intl.NumberFormat("en-US", {
                                        style: "currency",
                                        currency: "USD"
                                    }).format(product.originalprice)}{" "}
                                </p>
                                <p className="detailshead">Details:</p>
                                <p className="details">{product.details}</p>
                            </li>
                        ))}
                </ul>
                : null}
        </main>
    );
}
