"use client";
import React, { useContext, useEffect, useState } from "react";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
const stripePromise = loadStripe('pk_test_51L2Gs1GFQteDhkdHLsVzquWTMScGS4lAut4zVY4Dd5epQAf1UYzx12C4wXoPUDyiTmrbfiWRSKiPupv9bZAG7cwT00FG8XRVAb');
import { CheckoutContext } from "./Product";
import CheckoutConnect from "../Service/Checkout";
import MyCheckoutForm from "./MyCheckoutForm";

function Checkout({ cart, quantity }) {
  const [clientSecret, setClientSecret] = useState(null);
  const admin_id = "8e26a59f-4e32-43dc-889b-ef93b6a627fc";
  const product_id = "7f696a72-3d6a-4ac0-9e3f-5f55638e58cf";
  const { modalOpen, setModalOpen } = useContext(CheckoutContext);
  const [shipping_address, setShipping_address] = useState("");
  const [zip, setZip] = useState("");
  const [billing_address, setBilling_address] = useState("");
  const [email, setEmail] = useState("");
  const [ region, setRegion ] = useState(null);
  const [country, setCountry] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [btn, setBtn] = useState("Order Now");
  const [disablebtn, setDisablebtn] = useState(false);
  const [ amount, setAmount ] = useState(20);
  const checkout = new CheckoutConnect();

  useEffect(() => {
    if(sessionStorage.getItem("dev-region")){
      setRegion(sessionStorage.getItem("dev-region") || "US");
      setCountry(region == "NG"? "USA":"Nigeria");
    }
    if(sessionStorage.getItem("dev-shipping-address")){
      setShipping_address(sessionStorage.getItem("dev-shipping-address"));
    }
  }, []);

  const amountInNaira = (dollar) => {
    if(region == "NG"){
      return Math.floor(dollar * 1123);
    } else{
      return dollar;
    }
  }

  useEffect(() => {
    sessionStorage.setItem("dev-shipping-address", shipping_address);
  }, [shipping_address]);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const keyConstrain = JSON.stringify(quantity);

  const handlePayment = async (elements, stripe) => {
    if (!stripe || !elements) {
      console.error('Stripe.js has not loaded yet');
      return;
    }

    const cardElement = elements.getElement('card'); 
    if (!cardElement) {
      console.error('Card element not found');
      return;
    }

    const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
         
        },
      },
    });

    if (error) {
      console.error('Payment failed:', error);
      alert("Payment failed"+ (error?.message || ""));
    } else {
      console.log('Payment succeeded:', paymentIntent);
      alert("Payment Successful" + (error?.message || ""));
      setClientSecret(null);
      setModalOpen(false);
    }
  };

  const makeOrder = async (e) => {
    e.preventDefault();

    try {

      if(!phone_number || (phone_number).length <= 7) {
        alert("Please input the right Phone Number.");
     } else if(!shipping_address || (shipping_address).length <= 5) {
      alert("Please input a valid shipping address.");
     } else {
      setDisablebtn(true);
      const body = {
        product_id,
        admin_id,
        email,
        phone_number,
        shipping_address: country.concat(", "+ shipping_address + "," + zip),
        billing_address: country.concat(", " + shipping_address + "," + zip),
        subTax:0,
        quantity
      };

      setBtn("Saving Order ...")
      setBtn("Please wait ...")  
      const data_ = {
        ...body,
        region,
        product_id,
        admin_id,
        email,
        phone_number,
        country,
        shipping_address,
        billing_address:shipping_address,
        zip,
        amount
      }
      const { method, result } = await checkout.orderDevSensor(region, data_);
      setBtn("Creating Payment link");

      if(method == "paystack"){
        console.log({ authorization_url: result?.data.link_data?.authorization_url });
      setBtn("Redirecting to PayStack...");
      setDisablebtn(false)

      const authorization_url = result?.data.link_data?.authorization_url;
      if(authorization_url) {
        setModalOpen(false)
        window.location = authorization_url;
      } else {
        alert("Unable to complete request. Please make sure all details are provided.");
      }
      } else {
        const c_s = result?.data?.link_data?.client_secret;
        console.log({ c_s });
        setClientSecret(c_s);
      }

      setBtn("Place Order");
      setDisablebtn(false);
    }

    } catch(error) {
      console.log({ error });
      alert(error.message);
      setModalOpen(false);
      setDisablebtn(false);
    }
  };

  const appearance = {
    theme: "stripe"
  }

  const options = {
    clientSecret,
    appearance
  }

  return (
    <div>
      

      {modalOpen && (
        <div
          id="default-modal"
          tabIndex="-2"
          aria-hidden="true"
          className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden bg-black bg-opacity-50 flex justify-center items-center"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            {/* Modal content */}

            <div className="relative rounded-lg shadow-lg bg-black">
              {/* Modal header */}

              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-2xl font-bold text-white"> { !clientSecret? "Checkout": "Stripe" } </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={toggleModal}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              {/* Modal body */}

              {
                clientSecret
                ?
                <Elements stripe={stripePromise} options={options} >
                <MyCheckoutForm handlePayment={handlePayment} />
                </Elements>
                :
                <div className="p-4 md:p-5 space-y-4">
                <div class="grid mt-12 sm:mb-8 sm:px-10 lg:p-2">
                  <div class="px-4 pt-8">
                    <p class="text-xl font-medium">Order Summary</p>
                    <p class="text-gray-400">
                      Check your items. And select a suitable shipping method.
                    </p>

                    <div key={keyConstrain} class="mt-8 space-y-3 rounded-lg border bg-black px-2 py-4 sm:px-6">
                      {cart.map((x, i) => (
                        <div
                          key={i}
                          class="flex flex-col rounded-lg bg-black text-white sm:flex-row"
                        >
                          <img
                            class="m-2 h-24 w-28 rounded-md border object-cover object-center"
                            src={x?.main_image}
                          />
                          <div class="flex w-full flex-col px-4 py-4">
                            <span class="font-semibold flex -mt-2">
                              {x?.product_name}{" "}
                              <div className={`h-6 w-6 border m-1 p-2 border-white rounded-full ${x?.color}`}></div>
                            </span>
                            <span class="float-right text-gray-400">
                            {(x?.description && x?.description)?.length > 50
                                ? x?.description?.substring(0, 50) + "..." || ""
                                : x?.description || ""}
                            </span>
                            <p class="text-lg font-bold">
                              {region == "NG"?"NGN":"$"} {amountInNaira(x?.amount).toLocaleString()}
                              {" "}({"x"}{x?.quantity})
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <p class="mt-8 text-lg font-medium">Payment Methods</p>
                    {
                        region
                        &&
                        <form class="mt-5 grid gap-6">
                      <div class={`relative ${region !== "NG"?"":"blur-lg cursor-not-allowed"}`}>
                        <input
                          class="peer hidden"
                          id="radio_1"
                          type="radio"
                          name="radio"
                          checked
                        />
                        <span class={`peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-black`}></span>
                        <label
                          class="peer-checked:border-2 peer-checked:border-gray-800  flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                          for="radio_1"
                        >
                          <div class="ml-5">
                            <span class="mt-2 font-semibold"> Stripe </span>
                            <p class="text-sm text-slate-300 leading-6">
                            Instant with: Card
                            </p>
                          </div>
                        </label>
                      </div>
                     

                      <div class={`relative ${region == "NG"?"":"blur-lg cursor-not-allowed"}`}>
                        <input
                          class="peer hidden"
                          id="radio_1"
                          type="radio"
                          name="radio"
                          checked
                        />
                        <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-black"></span>
                        <label
                          class="peer-checked:border-2 peer-checked:border-gray-800 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                          for="radio_1"
                        >
                          <div class="ml-5">
                            <span class="mt-2 font-semibold"> PayStack </span>
                            <p class="text-slate-300text-sm leading-6">
                              Instant with: Card, transfer & USSD
                            </p>
                          </div>
                        </label>
                      </div>
                        </form>
                      }
                   
                  </div>

                  <form class="mt-10 bg-black px-4 pt-8 lg:mt-0">
                    <p class="text-xl font-medium">Payment Details</p>
                    <p class="text-gray-200">
                      Complete your order by providing your payment details.
                    </p>
                    <div class="">
                      <label
                        for="email"
                        class="mt-4 mb-2 block text-sm font-medium"
                      >
                        Email
                      </label>
                      <div class="relative">
                        <input
                          type="text"
                          id="email"
                          name="email"
                          class="w-full rounded-md border bg-black border-gray-600 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-gray-800 focus:ring-gray-800"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>

                      <label
                        for="phone_number"
                        class="mt-4 mb-2 block text-sm font-medium"
                      >
                        Phone Number
                      </label>
                      <div class="relative">
                        <input
                          type="text"
                          id="phone_number"
                          name="phone_number"
                          class="w-full rounded-md border bg-black border-gray-600 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-gray-800 focus:ring-gray-800"
                          placeholder="Phone Number"
                          value={phone_number}
                          onChange={(e) => setPhone_number(e.target.value)}
                          required
                        />
                      </div>

                      <label
                        for="billing-address"
                        class="mt-4 mb-2 block text-sm font-medium"
                      >
                        Shipping Address
                      </label>
                      <div class="relative mb-2">
                        <input
                          type="text"
                          id="billing-address"
                          name="billing-address"
                          class="w-full rounded-md border bg-black border-gray-600 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-gray-800 focus:ring-gray-800"
                          placeholder="Street Address"
                          value={shipping_address}
                          onChange={(e) => setShipping_address(e.target.value)}
                        />
                      </div>

                      <div class="flex flex-col sm:flex-row">
                        <select
                          type="text"
                          name="Country"
                          class="w-full rounded-md border bg-black border-gray-600 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-gray-800 focus:ring-gray-800"
                          onChange={(e) => {
                            const value = e.target?.value;
                            setCountry(value);
                          }}
                        >
                          <option value={"Nigeria"}>Nigeria</option>
                          <option value={"USA"}>USA</option>
                          <option value={"UK"}>UK</option>
                          <option value={"Canada"}>Canada</option>
                        </select>

                        <input
                          type="text"
                          name="billing-zip"
                          class="w-full rounded-md border bg-black border-gray-600 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-gray-800 focus:ring-gray-800"
                          placeholder="ZIP"
                          value={zip}
                          onChange={(e) => setZip(e.target.value)}
                        />
                      </div>

                      <div class="mt-6 border-t border-b py-2">
                        <div class="flex items-center justify-between">
                          <p class="text-sm font-medium text-white">
                            Subtotal
                          </p>
                          <p class="font-semibold text-white">
                          {region == "NG"?"NGN ":"$ "} 
                          {(amountInNaira(Math.floor(cart[0]?.amount * cart[0]?.quantity))).toLocaleString()}                          </p>
                        </div>
                        <div class="flex items-center justify-between">
                          <p class="text-sm font-medium text-white">
                            Shipping tax
                          </p>
                          <p class="font-semibold text-white">
                          {region == "NG"?"NGN ":"$ "}   
                          0
                          </p>
                        </div>
                      </div>

                      <div class="mt-6 flex items-center justify-between">
                        <p class="text-sm font-medium text-white">Total</p>
                        <p class="text-2xl font-semibold text-white">
                          {region == "NG"?"NGN ":"$ "} 
                          {(amountInNaira(Math.floor(cart[0]?.amount * cart[0]?.quantity))).toLocaleString()}
                          
                        </p>
                      </div>
                    </div>
                    <button
                      type="submit"
                      onClick={(e) => makeOrder(e)}
                      disabled={disablebtn}
                      class="border-2 border-white mt-4 mb-8 w-full bg-black rounded-none px-6 py-3 font-medium text-white"
                    >
                      {btn}
                    </button>
                  </form>
                </div>
              </div>
              }
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;
