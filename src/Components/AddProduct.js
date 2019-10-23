import React from "react";
import "./Rating/Rating";

export default function addProduct(props) {
    return (
        <div className="form-div">
            <form onSubmit={e => props.addProduct(e, props.history)} >
                <input
                    type="text"
                    name="newProduct"
                    aria-label="Product Name"
                    placeholder="Product Name"
                />
                <input
                    type="text"
                    name="newContent"
                    aria-label="Product Content"
                    placeholder="Product Content"
                />
                <input
                    type="number"
                    name="newOriginalPrice"
                    aria-label="Product Original Price"
                    placeholder="Product Original Price"
                />
                <input
                    type="text"
                    name="newImageLink"
                    aria-label="Product Image Link"
                    placeholder="Product Image Link"
                />

                <input
                    type="number"
                    name="newSalePrice"
                    aria-label="Product Sale Price"
                    placeholder="Product Sale Price"
                />
                <select name="range" required>
                    <option value="" >Range</option>
                    <option value="$$$">$$$</option>
                    <option value="$$">$$</option>
                    <option value="$">$</option>
                </select>
                <select name="skintype" required>
                    <option value="">SkinType</option>
                    <option value="Combination Skin">Combination Skin</option>
                    <option value="Oily Skin">Oily Skin</option>
                    <option value="Normal Skin">Normal Skin</option>
                    <option value="Dry Skin">Dry Skin</option>
                </select>
                <select name="category" required>
                    <option value="">Category</option>
                    <option value="Cleanse">Cleanse</option>
                    <option value="Treat">Treat</option>
                    <option value="Tone">Tone</option>
                    <option value="Nourish">Nourish</option>
                    <option value="Hydrate">Hydrate</option>
                </select>
                <div className="star-rating" required>
                    <input type="radio" id="5-stars" name="rating" value="5" />
                    <label htmlFor="5-stars" className="star">&#9733;</label>
                    <input type="radio" id="4-stars" name="rating" value="4" />
                    <label htmlFor="4-stars" className="star">&#9733;</label>
                    <input type="radio" id="3-stars" name="rating" value="3" />
                    <label htmlFor="3-stars" className="star">&#9733;</label>
                    <input type="radio" id="2-stars" name="rating" value="2" />
                    <label htmlFor="2-stars" className="star">&#9733;</label>
                    <input type="radio" id="1-star" name="rating" value="1" />
                    <label htmlFor="1-star" className="star">&#9733;</label>
                </div>
                <textarea
                    type="text"
                    name="newDetails"
                    aria-label="Product Details"
                    placeholder="Product Details">
                </textarea>

                <input
                    type="submit"
                    name="submit"
                    value="Add"
                    aria-label="Add new skincare product"
                />

            </form>


        </div>

    );
}