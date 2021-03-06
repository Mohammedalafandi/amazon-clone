import React, { useState } from 'react'
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css"
import { useStateValue } from './StateProvider'
import { Link } from 'react-router-dom'
import { CardElement, cardElement, useElements, useStripe, useStripeElements } from "@stripe/react-stripe-js";
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';

function Payment() {
    const [{basket, user},dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded,setSucceeded] = useState(false);
    const [processing, setProcessing]= useState("");
    const [error , setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const handleSubmit = event => {

    }

    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");

    }



    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (
                        <Link to="/checkout">{basket?.length}items</Link>
                    )
                </h1>

            <div className="payment__section">
                <div className="payment__title">
                    <h3>Delivery Address</h3>
                    </div>

                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>Alforkan 123</p>
                        <p>Syria, Aleppo</p>

                    </div>
               </div>

            <div className="payment__section">
                <div className="payment__title">
                    <h3>Review Items and delivery</h3>
                </div>
                <div className="payment__items">
                    {basket.map(item => (
                        <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}

                </div>

               </div>

            <div className="payment__section">
                <div className="payment__title">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment__details">

                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange} />
                        <div className="payment__priceContainer">
                            <CurrencyFormat 
                            renderText= {(value) => (
                                <h3>Order Total:{value}</h3>
                            )}
                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={"text"}
                           thousandSeparator={true}
                            prefix={"$"}
                           /> 
                           <button disabled={processing || disabled || succeeded}>
                               <span> {processing  ? <p>Processing</p> : "Buy Now"} </span>
                           </button>
                        </div>
                        {error && <div>{error}</div>}
                    </form>

                </div>
           
             </div>

            </div>
            
        </div>
    )
}

export default Payment
