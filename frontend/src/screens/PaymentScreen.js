import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../actions/cartActions.js"
import { Form, Button, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer"
import CheckoutSteps from "../components/CheckoutSteps"

const ShippingScreen = ({ history }) => {

    const cart = useSelector(state => state.cart);
    const { shippingAddress } = cart;

    if (!shippingAddress) {
        history.push("/shipping");
    }

    const [paymentMethod, setPaymentMethod] = useState("PayPal");

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        history.push("/placeorder");
    }

    return (
        <FormContainer>
            <CheckoutSteps step1 step2 step3 />

            <h1>Payment Method</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label as="legend">Select Method</Form.Label>
                    <Col>
                        <Form.Check
                            type="radio"
                            label="PayPal or Credit Card"
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            name="paymentMethod"
                            value="PayPal"
                            id="PayPal"
                            checked>
                        </Form.Check>
                    </Col>
                </Form.Group>

                <Button type="submit" variant="primary">Continue</Button>
            </Form>
        </FormContainer>
    )
}

export default ShippingScreen
