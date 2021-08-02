import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JJz5aIDxeziXejutv8DL8CPNh4zJJdvVQSOPiD3rRR84oC1PrKkAeEnBSTwdqiAPpcAhe47wAPT7bzjTTSpSIMx00GIxFGrBf'

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
            label = 'Pay now'
            name = 'SMS Company.'
            image = 'https://svgshare.com/i/Zi3.svg'
            description = {'Fill the payment details'}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey = { publishableKey }

        />
    );
};

export default StripeCheckoutButton;