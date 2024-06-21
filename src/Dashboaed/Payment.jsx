import { loadStripe } from "@stripe/stripe-js";
import ShareTitle from "../Components/ShareTitle/ShareTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";


const Payment = () => {

    const stripePromise=loadStripe(import.meta.env.VITE_Payment_Gatway_PK)

    return (

        <div>
            <ShareTitle heading='Payment' subheading='Please Pay to Eat'></ShareTitle>

            <div>
                <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;