import React, { useState } from 'react'

function Product({ model, primaryJson }) {

    const [ view_set, setView_set ] = useState("description");
    const [ quantity, setQuantity ] = useState(1);

    const changeValue = (value) => {
        setView_set(value);
    }

    return (
    <div className="">
    <header id="header" class="-mb-4 header">
    <div class="page__title-area">
      <div class="container">
        <div class="page__title-container">
          <ul class="page__titles">
            <li class="cursor-pointer rounded-lg bg-slate-600 p-2 page__title">/ DevSensor Base</li>
            <li class="cursor-pointer rounded-lg bg-slate-600 p-2 page__title">/ DevSensor PRO</li>
            <li class="cursor-pointer rounded-lg bg-slate-600 p-2 page__title">/ DevSensor Wearable</li>
          </ul>
        </div>
      </div>
    </div>

     
    </header>

  <main id="main">
    <div class="container dark:text-white">

      { model && <section class="section product-details__section">
        <div class="product-detail__container">
          <div class="product-detail__left">
            <div class="details__container--left">
              <div class="product__pictures">
                <div class="pictures__container">
                  <img class="picture" src="/devsensor_wearable.png" id="pic1" />
                </div>
                <div class="pictures__container">
                  <img class="picture" src="/devsensor_pro.png" id="pic2" />
                </div>
                <div class="pictures__container">
                  <img class="picture" src="/devsensor_pro.png" id="pic3" />
                </div>
                <div class="pictures__container">
                  <img class="picture" src="/devsensor_pro.png" id="pic4" />
                </div>

              </div>
              <div class="product__picture" id="product__picture">
                <div class="picture__container">
                  <img src="/devsensor_base.png" id="pic" />
                </div>
              </div>
              <div class="zoom" id="zoom"></div>
            </div>

            
          </div>

          <div class="product-detail__right">
            <div class="product-detail__content">
              <h3 className='text-3xl font-semibold'>{primaryJson[0][model]?.product_name}</h3>
              <div class="price">
                <span class="text-bold new__price text-4xl">{primaryJson[0][model]?.currency["USD"]} {primaryJson[0][model]?.amount }</span>
              </div>
              <div class="product__review">
                <a class="text-gray-400 text-base font-light">{primaryJson[0][model]?.free_shipping ? "Free shipping included" : "" }</a>
              </div>

              <p className="font-light">
              {primaryJson[0][model]?.description}
              </p>

              <div class="product__info-container">
                <ul class="product__info">
                  <li class="select">
                    <div class="select__option">
                      <label for="colors">Color:</label>
                      <div className="flex m-1 mb-2">
                        {
                            primaryJson[0][model]?.colors?.map(x=>
                                <div className={`cursor-pointer border m-1 p-1 border-white ${x} w-12 h-12 rounded-full focus:border-r-4 hover:border-r-4`}></div>
                            )
                        }
                      </div>
                    </div>
                  </li>
                  <li>

                    <div class="input-counter">
                      <span>Quantity: {" "}</span>
                      <div>
                        <span class="minus-btn">
                          <svg>
                           
                          </svg>
                        </span>
                        <input type="text" min={primaryJson[0][model]?.quantity?.min} 
                        onChange={(e) => setQuantity(e.target.value)}
                        value={quantity} 
                        max={primaryJson[0][model]?.quantity?.max}
                        class="counter-btn" />
                        <span class="plus-btn">
                          <svg>
                            
                          </svg>
                        </span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <span>Subtotal:{" "}</span>
                    <a href="#" class="new__price font-semibold text-3xl">{primaryJson[0][model]?.currency["USD"]} 200.50</a>
                  </li>
                  <li>
                    <span>Brand: {" "}</span>
                    <a>{ primaryJson[0][model]?.brand }</a>
                  </li>
                  <li>
                    <span>Product Type: {" "}</span>
                    <a>{ primaryJson[0][model]?.product_type }</a>
                  </li>
                  <li>
                    <span>Availability: {" "}</span>
                    <a href="#" class="in-stock">{ primaryJson[0][model]?.Availability }</a>
                  </li>
                </ul>

              </div>

              <div class="">
              {/* product-details__btn */}
              <button className="m-1 max-w-[300px] w-full lg:max-w-full p-3 font-semibold bg-transparent border-2 border-white  text-white" href="#">
                BUY NOW
              </button>
            </div>

            </div>
          </div>
        </div>

        <div class="product-detail__bottom">
          <div class="title__container tabs">

            <div class="section__titles category__titles html_for ">
              <div 
              onClick={() => changeValue("description")}
              class="section__title detail-btn active" data-id="description">
                <span class="dot"></span>
                <h1 class="primary__title">Description</h1>
              </div>
            </div>

            <div class="section__titles">
              <div 
              onClick={() => changeValue("reviews")}
              class="section__title detail-btn" data-id="reviews">
                <span class="dot"></span>
                <h1 class="primary__title">Reviews</h1>
              </div>
            </div>

            <div class="section__titles">
              <div 
              onClick={() => changeValue("shipping")}
              class="section__title detail-btn" data-id="shipping">
                <span class="dot"></span>
                <h1 class="primary__title">Shipping Details</h1>
              </div>
            </div>
          </div>

          <div class="detail__content">

            <div class={`content ${view_set == "description"?"active":""}`} id="description">
             { primaryJson[0][model]?.description_content}
            </div>

            <div class={`content ${view_set == "reviews"?"active":""}`} id="reviews">
              <h1>Customer Reviews</h1>
              <div class="rating">
                <svg>
                 
                </svg>
                <svg>
                 
                </svg>
                <svg>
                 
                </svg>
                <svg>
                 
                </svg>
                <svg>
                  
                </svg>
              </div>
            </div>

            <div class={`content ${view_set == "shipping"?"active":""}`} id="shipping">
              {/* <h3>Returns Policy</h3>
              <p>You may return most new, unopened items within 30 days of delivery for a full refund. We'll also pay
                the return shipping costs if the return is a result of our error (you received an incorrect or defective
                item, etc.).</p>
              <p>You should expect to receive your refund within four weeks of giving your package to the return
                shipper, however, in many cases you will receive a refund more quickly. This time period includes the
                transit time for us to receive your return from the shipper (5 to 10 business days), the time it takes
                us to process your return once we receive it (3 to 5 business days), and the time it takes your bank to
                process our refund request (5 to 10 business days).
              </p>
              <p>If you need to return an item, simply login to your account, view the order using the 'Complete
                Orders' link under the My Account menu and click the Return Item(s) button. We'll notify you via
                e-mail of your refund once we've received and processed the returned item.
              </p>
              <h3>Shipping</h3>
              <p>We can ship to virtually any address in the world. Note that there are restrictions on some products,
                and some products cannot be shipped to international destinations.</p>
              <p>When you place an order, we will estimate shipping and delivery dates for you based on the
                availability of your items and the shipping options you choose. Depending on the shipping provider you
                choose, shipping date estimates may appear on the shipping quotes page.
              </p>
              <p>Please also note that the shipping rates for many items we sell are weight-based. The weight of any
                such item can be found on its detail page. To reflect the policies of the shipping companies we use, all
                weights will be rounded up to the next full pound.
              </p> */}
              { primaryJson[0][model]?.shipping_details }
            </div>

          </div>
        </div>
      </section>}
   </div>
  </main>
    </div>
  )
}

export default Product;