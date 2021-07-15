import React from 'react';
import CustomButton from '../custom-button/custom-button.components';
import './cart-dropdown.styles.scss';

const CartDropdown = () => (
    <div className = 'cart-dropdown'>
        <div className = 'cart-item' />
        <CustomButton> CHECKOUT </CustomButton>        
    </div>
)

export default CartDropdown;