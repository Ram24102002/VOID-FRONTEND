import React from 'react'
import Main from '../components/Product/Main.jsx';
import ReviewBox from '../components/Product/ReviewBox.jsx';
import CustomerReviews from '../components/Product/CustomerReviews.jsx';

function Product() {
  return (
    <div>
        <Main />
        <ReviewBox />
        <CustomerReviews />
    </div>
  )
}

export default Product