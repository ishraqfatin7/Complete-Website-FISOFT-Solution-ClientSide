import React, { useEffect, useState } from 'react';
import EachReview from '../EachReview/EachReview';
import './Reviews.css';
const Reviews = () => {
    const [reviews,setReviews] = useState([]);
    useEffect(()=>{
      fetch('https://glacial-anchorage-43619.herokuapp.com/reviews')
      .then(response => response.json())
      .then(reviews => setReviews(reviews));
    },[])
    return (
        <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header">
                   <h5 className="text-brand text-uppercase">Reviews</h5>
                   <h1>What Our Client <br/> Says </h1>
               </div>
               <div className="card-deck mt-5">
                    {
                        reviews.map(review => < EachReview review={review} key={review.name}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Reviews;