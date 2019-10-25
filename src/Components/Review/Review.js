import React from "react";
import Rating from "../Rating/Rating";


import "./Review.css";

class Review extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      newName: "",
      rating: "",
      newComment: ""
    };
  }

  componentDidMount(){
    fetch("https://glacial-meadow-87719.herokuapp.com/reviews")
    .then(res => res.json())
    .then(res => this.setState({reviews: res}))
  }

  addReview = e => {
    e.preventDefault();
    let newReviews =  { name: this.state.newName, rating: this.state.rating, comment: this.state.newComment }
    this.setState({
      reviews: [
        ...this.state.reviews,
        newReviews
       
      ],
      newName: "",
      newComment: "",
      rating: ""
    },
    () => {
    fetch('https://glacial-meadow-87719.herokuapp.com/reviews', {
      method: 'POST',
      body: JSON.stringify(newReviews),
      headers: {
       "Content-Type": "application/json"
      }
    })
        .then(res => res.json())
     }
    );
    
  };



  render() {
    return (
      <div className="review">
        <h4 className="head">Add Skin Products Recommendation: </h4>
        <p className="quote">"Filters are great, but great skin is better"</p>
        
        <form className="review-form" onSubmit={e => this.addReview(e)}>
          
          
          <input
            type="text"
            name="newName"
            className="field"
            aria-label="Add Name"
            placeholder="Add Name"
            value={this.state.newName}
            onChange={e => this.setState({ newName: e.target.value })}
          />
          
          
          <div className="star-rating rating" required onChange={e => this.setState({ rating: e.target.value })}>
                    <input type="radio" id="5-stars" name="rating" value="5"  />
                    <label htmlFor="5-stars" className="star">&#9733;</label>
                    <input type="radio" id="4-stars" name="rating" value="4" />
                    <label htmlFor="4-stars" className="star">&#9733;</label>
                    <input type="radio" id="3-stars" name="rating" value="3"/>
                    <label htmlFor="3-stars" className="star">&#9733;</label>
                    <input type="radio" id="2-stars" name="rating" value="2"/>
                    <label htmlFor="2-stars" className="star">&#9733;</label>
                    <input type="radio" id="1-star" name="rating" value="1" />
                    <label htmlFor="1-star" className="star">&#9733;</label>
          </div>
        
          <textarea
            type="text"
            className="field textfield"
            name="newComment"
            aria-label="Add Comment"
            placeholder="Add Comment"
            value={this.state.newComment}
            onChange={e => this.setState({ newComment: e.target.value })}
          />
          

          <input
            className="reviewbtn"
            type="submit"
            name="submit"
            value="Add"
            aria-label="Add new bookmark button"
          />
        </form>
       

        <ul className="review-box">
          {this.state.reviews.map((review, index) => (
            <li className="review-item-box" key={index}>
              <h1>{review.name}</h1>
              <Rating value={review.rating} />
              <p>{review.comment}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Review;



