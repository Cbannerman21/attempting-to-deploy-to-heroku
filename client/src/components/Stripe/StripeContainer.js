import React from 'react';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY = "pk_test_51LUzkPCOEVsYC4wz4mJBroEuKk4NRFx4o3NvTTFEalFXcWzWKukvU59rbtTT4zgtEUaxDuChmgmCvikHls5RK7Ti00xIbFMBOZ"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />

        </Elements>
    )
}