
import React, { createContext, useEffect, useState } from "react";
import Checkout from "../checkout";
export const CheckoutContext = createContext({});
// 4242 4242 4242 4242 (12/34) 20002


function ProductComponent({ model, primaryJson }) {
  const [view_set, setView_set] = useState("description");
  const [quantity, setQuantity] = useState(1);
  const [ color, setColor ] = useState("bg-black")
  const [ region, setRegion ] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modelValue, setModelValue] = useState("BASE");

  const changeValue = (value) => {
    setView_set(value);
  };

    useEffect(() => {
    if(sessionStorage.getItem("dev-region")){
      setRegion(sessionStorage.getItem("dev-region") || "US");
    }
    }, []);

  useEffect(() => {
    setModelValue(model);
  }, [model])

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const CreateModel = (value) => {
    setModelValue(value);
  }
  
  return (
    <CheckoutContext.Provider value={{ modalOpen, setModalOpen }}>

      <div className="">
        <header id="header" class="-mb-4 header">
          <div class="page__title-area">
            <div class="container">
              <div class="page__title-container">
                <ul class="page__titles">
                  <li
                    class={`cursor-pointer rounded-lg bg-slate-700 p-2 page__title focus:border-r-4 hover:border-r-4`}
                    onClick={() => CreateModel("BASE")}
                  >
                    / DevSensor Base
                  </li>
                  <li
                    class="cursor-pointer rounded-lg bg-slate-700 p-2 page__title focus:border-r-4 hover:border-r-4"
                    onClick={() => CreateModel("PRO")}
                  >
                    / DevSensor PRO
                  </li>
                  <li
                    class="cursor-pointer rounded-lg bg-slate-700 p-2 page__title focus:border-r-4 hover:border-r-4"
                    onClick={() => CreateModel("WEARABLE")}
                  >
                    / DevSensor Wearable
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>

        <main id="main">
          <div class="container dark:text-white">
            {modelValue && (
              <section class="section product-details__section">
                <div class="product-detail__container">
                  <div class="product-detail__left">
                    <div class="details__container--left">
                      <div class="product__pictures">
                      {
                          primaryJson[0][modelValue]?.images
                          .map((img, key) => 
                            <div key={key} class="pictures__container">
                            <img
                              class="picture"
                              src={img}
                              id="pic1"
                            />
                          </div>
                          )
                        }

                      </div>
                      <div class="product__picture" id="product__picture">
                        <div class="picture__container">
                          <img src={primaryJson[0][modelValue]?.main_image} id="pic" />
                        </div>
                      </div>
                      <div class="zoom" id="zoom"></div>
                    </div>
                  </div>

                  <div class="product-detail__right">
                    <div class="product-detail__content">
                      <h3 className="text-3xl font-semibold">
                        {primaryJson[0][modelValue]?.product_name}
                      </h3>
                      <div class="price">
                        <span class="text-bold new__price text-4xl">
                          {region == "NG"?"NGN ":"$ "} 
                          {" "}
                          {primaryJson[0][modelValue]?.amount}
                        </span>
                      </div>
                      <div class="product__review">
                        <a class="text-gray-400 text-base font-light">
                          {primaryJson[0][modelValue]?.free_shipping
                            ? "Free shipping included"
                            : ""}
                        </a>
                      </div>

                      <p className="font-light">
                        {primaryJson[0][modelValue]?.description}
                      </p>

                      <div class="product__info-container">
                        <ul class="product__info">
                          <li class="select">
                            <div class="select__option">
                              <label for="colors">Color:</label>
                              <div className="flex m-1 mb-2">
                                {primaryJson[0][modelValue]?.colors?.map(
                                  (x, key) => (
                                    <div
                                    key={key}
                                      onClick={() => setColor(x)}
                                      className={`cursor-pointer border m-1 p-1 border-white ${x} w-12 h-12 rounded-full focus:border-r-4 hover:border-r-4`}
                                    ></div>
                                  )
                                )}
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="input-counter">
                              <span>Quantity: </span>
                              <div>
                                <span class="minus-btn">
                                  <svg></svg>
                                </span>
                                <input
                                  type="text"
                                  min={
                                    primaryJson[0][modelValue]?.quantity?.min
                                  }
                                  onChange={(e) => setQuantity(e.target.value)}
                                  value={quantity}
                                  max={
                                    primaryJson[0][modelValue]?.quantity?.max
                                  }
                                  class="counter-btn"
                                />
                                <span class="plus-btn">
                                  <svg></svg>
                                </span>
                              </div>
                            </div>
                          </li>

                          <li>
                            <span>Subtotal: </span>
                            <a
                              href="#"
                              class="new__price font-semibold text-3xl"
                            >
                              {region == "NG"?"NGN ":"$ "} 
                              {" "}
                              {Math.floor((primaryJson[0][modelValue]?.amount) * quantity)}
                            </a>
                          </li>
                          <li>
                            <span>Brand: </span>
                            <a>{primaryJson[0][modelValue]?.brand}</a>
                          </li>
                          <li>
                            <span>Product Type: </span>
                            <a>{primaryJson[0][modelValue]?.product_type}</a>
                          </li>
                          <li>
                            <span>Availability: </span>
                            <a href="#" class="in-stock">
                              {primaryJson[0][modelValue]?.Availability}
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div class="">
                        {/* product-details__btn */}
                        <button
                          className="m-1 max-w-[300px] w-full lg:max-w-full p-3 font-semibold bg-transparent border-2 border-white  text-white"
                          onClick={() => toggleModal()}
                        >
                          BUY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="product-detail__bottom">
                  <div class="title__container tabs">
                    <div class="section__titles z-10 category__titles html_for">
                      <div
                        onClick={() => changeValue("description")}
                        class="section__title detail-btn active"
                        data-id="description"
                      >
                        <span class="dot"></span>
                        <h1 class="primary__title">Description</h1>
                      </div>
                    </div>

                    <div class="section__titles">
                      <div
                        onClick={() => changeValue("reviews")}
                        class="section__title detail-btn"
                        data-id="reviews"
                      >
                        <span class="dot"></span>
                        <h1 class="primary__title">Reviews</h1>
                      </div>
                    </div>

                    <div class="section__titles">
                      <div
                        onClick={() => changeValue("shipping")}
                        class="section__title detail-btn"
                        data-id="shipping"
                      >
                        <span class="dot"></span>
                        <h1 class="primary__title">Shipping Details</h1>
                      </div>
                    </div>
                  </div>

                  <div class="detail__content">
                    <div
                      class={`content ${
                        view_set == "description" ? "active" : ""
                      }`}
                      id="description"
                    >
                      {primaryJson[0][modelValue]?.description_content}
                    </div>

                    <div
                      class={`content ${view_set == "reviews" ? "active" : ""}`}
                      id="reviews"
                    >
                      <h1>Customer Reviews</h1>
                      <div class="rating">
                        <svg></svg>
                        <svg></svg>
                        <svg></svg>
                        <svg></svg>
                        <svg></svg>
                      </div>
                    </div>

                    <div
                      class={`content ${
                        view_set == "shipping" ? "active" : ""
                      }`}
                      id="shipping"
                    >
                      {primaryJson[0][modelValue]?.shipping_details}
                    </div>
                  </div>
                </div>
              </section>
            )}
          </div>
        </main>
        <Checkout cart={[{...primaryJson[0][modelValue], quantity, color }] || []} quantity={quantity} />
      </div>

    </CheckoutContext.Provider>
  );
}

export default ProductComponent;
