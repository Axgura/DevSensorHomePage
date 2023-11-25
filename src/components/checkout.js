import React, { useContext, useState } from "react";
import { CheckoutContext } from "./Product";

function checkout({ cart }) {

  const { modalOpen, setModalOpen } = useContext(CheckoutContext);
  const [shipping_address, setShipping_address] = useState("");
  const [zip, setZip] = useState("");
  const [billing_address, setBilling_address] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [btn, setBtn] = useState("Order Now");
  const [disablebtn, setDisablebtn] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const makeOrder = async (e) => {
    e.preventDefault();
    alert("Ordered");
    setDisablebtn(false);
    setModalOpen(false);
  };

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
                <h3 className="text-2xl font-bold text-white">Checkout</h3>
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

              <div className="p-4 md:p-5 space-y-4">
                <div class="grid mt-12 sm:mb-8 sm:px-10 lg:p-2">
                  <div class="px-4 pt-8">
                    <p class="text-xl font-medium">Order Summary</p>
                    <p class="text-gray-400">
                      Check your items. And select a suitable shipping method.
                    </p>

                    <div class="mt-8 space-y-3 rounded-lg border bg-black px-2 py-4 sm:px-6">
                      {cart.map((x, i) => (
                        <div
                          key={i}
                          class="flex flex-col rounded-lg bg-white sm:flex-row"
                        >
                          <img
                            class="m-2 h-24 w-28 rounded-md border object-cover object-center"
                            src={x.image}
                            alt=""
                          />
                          <div class="flex w-full flex-col px-4 py-4">
                            <span class="font-semibold">
                              {x.name}{" "}
                              {(x?.variation && x?.variation?.name)?.length > 10
                                ? x?.variation?.name?.substring(0, 10) || ""
                                : x?.variation?.name || ""}
                            </span>
                            <span class="float-right text-gray-400">
                              {x.description}
                            </span>
                            <p class="text-lg font-bold">
                              {x.currency} {x.variation?.amount || x.amount} *{" "}
                              {x.quantity}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <p class="mt-8 text-lg font-medium">Payment Methods</p>
                    <form class="mt-5 grid gap-6">
                      <div class="relative blur-lg cursor-not-allowed">
                        <input
                          class="peer hidden"
                          id="radio_1"
                          type="radio"
                          name="radio"
                          checked
                        />
                        <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-black"></span>
                        <label
                          class="peer-checked:border-2 peer-checked:border-gray-800  flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                          for="radio_1"
                        >
                          <div class="ml-5">
                            <span class="mt-2 font-semibold"> PayStack </span>
                            <p class="text-sm text-slate-300 leading-6">
                              Instant with: Card, transfer & USSD
                            </p>
                          </div>
                        </label>
                      </div>

                      <div class="relative">
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
                            <span class="mt-2 font-semibold"> Stripe </span>
                            <p class="text-slate-300text-sm leading-6">
                              Instant with: Card
                            </p>
                          </div>
                        </label>
                      </div>
                    </form>
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
                          <p class="font-semibold text-white">USD 200</p>
                        </div>
                        <div class="flex items-center justify-between">
                          <p class="text-sm font-medium text-white">
                            Shipping tax
                          </p>
                          <p class="font-semibold text-white">USD 20</p>
                        </div>
                      </div>

                      <div class="mt-6 flex items-center justify-between">
                        <p class="text-sm font-medium text-white">Total</p>
                        <p class="text-2xl font-semibold text-white">
                          NGN 200
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default checkout;
