import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
    render() {
        return (
            <StripeCheckout
                name="Pago en linea"
                description="50 dolares a Pagar!"
                amount = { 500 }
                token = { token => this.props.handleToken(token) }
                stripeKey = { process.env.REACT_APP_STRIPE_KEY }
            />
        );
    }
}

export default connect(null, actions) (Payments);