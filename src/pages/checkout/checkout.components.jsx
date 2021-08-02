import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors.js';
import CheckoutItem from '../../components/checkout-item/checkout-item.components';
import './checkout.styles.scss';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.components.jsx';

const CheckoutPage = ({ cartItems, total }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span> Product</span> 
            </div> 
            <div className='header-block'>
                <span> Description</span> 
            </div> 
            <div className='header-block'>
                <span> Hours/rent</span> 
            </div> 
            <div className='header-block'>
                <span>Price</span> 
            </div> 
            <div className='header-block'>
                <span> Remove</span> 
            </div> 
        </div>
        {cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className='total'> TOTAL: €{total} </div>
        <div className = 'test-warning'> 
        !! PLEASE USE THE FOLLOWING CARD DETAILS FOR PAYMENT TEST
        <br />
        4000 0566 5566 5556 - EXP DATE: any in the future MM/YY - CVV: 777
        </div>
        <StripeCheckoutButton price = {total} />
    </div>   
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect (mapStateToProps)(CheckoutPage);