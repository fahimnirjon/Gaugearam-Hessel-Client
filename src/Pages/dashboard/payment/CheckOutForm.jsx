import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckOutForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transaction, setTransaction] = useState("");
  const stripe = useStripe();
  const { user } = useAuth();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCart();
  const navigate = useNavigate();
  const price = cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    if (price > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: price })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, price]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || elements) {
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment successful", paymentMethod);
      setError("");
    }

    // confirm
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        setTransaction(paymentIntent.id);

        // save payment in database

        const payment = {
          email: user.email,
          price: price,
          transactionId: paymentIntent.id,
          date: new Date(),
          cartIds: cart.map((item) => item._id),
          menuItemIds: cart.map((item) => item.menuId),
          status: "pending",
        };
        const res = await axiosSecure.post("/payments", payment);
        refetch();
        if (res.data.paymentResult?.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Payment has been done!!",
            showConfirmButton: false,
            timer: 2000,
          });
          navigate("/dashboard/payment-history");
        }
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "20px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      ></CardElement>
      <button
        className="btn btn-circle btn-error mt-5"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay Dollar
      </button>
      <p className="text-red-500">{error}</p>
      {transaction && (
        <p className="text-green-500">
          Your Payment was Successful.... Id:{transaction}
        </p>
      )}
    </form>
  );
};

export default CheckOutForm;
