import React from 'react'
import { Link } from 'react-router-dom'

import emptyCartImg from '../assets/img/empty-cart.png'

const EmptyCart = () => {
  return (
    <>
      <div className="cart cart--empty">
        <h2>Cart is empty 😕</h2>
        <p>
          Looks like you have not added any game yet.<br />
          To do so, go back to main page.
        </p>
        <img src={emptyCartImg} alt="Empty cart" />
        <Link to="/" className="button button--black">
          <span>Go back</span>
        </Link>
      </div>
    </>
  )
}

export default EmptyCart