import React from 'react'
import Product from "@/components/Product";
import { useRouter } from 'next/router';

function product() {
    const router = useRouter();
    const { name } = router.query;

    const products = [
      {
        "BASE": {
          model: "BASE",
          main_image: "/devsensor_base.png",
          images: ["/devsensor_base.png", "/devsensor_base.png"],
          product_name: "DevSensor",
          amount: 99.9,
          currency: { "USD": "$", "NGN": "NGN" },
          free_shipping: false,
          description: "DevSensor is a groundbreaking posture tracking device designed to offer real-time insights and promote improved posture for its users.",
          colors: ["bg-black", "bg-[#33220c]", "bg-[#484847]" ],
          quantity: { max: 1100, min: 0 },
          brand: "DevSensor",
          product_type: "BASE",
          availability: "In Stock (Enough Items)",
          description_content: 
          <>
            <p>DevSensor is a pioneering posture tracking device, providing essential insights for users. Traditional competitors use non-technical materials like leather for posture correction, which is ineffective for most people. DevSensor distinguishes itself by utilizing advanced technology to effectively track and analyze posture, changing the way individuals approach posture correction.</p>
            <h2>Key Features:</h2>
            <ul>
              <li>Seamless connectivity.</li>
              <li>Real-time ML image processing.</li>
              <li>Suitable workouts for good posture predicted by ML (Gahelp X).</li>
              <li>Battery lasting: 4.6 hours on a single charge.</li>
              <li>Supports multiple calendars and routine schedules.</li>
            </ul>
          </>,
          shipping_details: 
          <>
            <h3>Returns Policy</h3>
            <p>You may return most new, unopened items within 30 days of delivery for a full refund. We'll also pay the return shipping costs if the return is a result of our error (you received an incorrect or defective item, etc.).</p>
            <p>You should expect to receive your refund within four weeks of giving your package to the return shipper, however, in many cases you will receive a refund more quickly.</p>
            <h3>Shipping</h3>
            <p>We can ship to virtually any address in the world. Note that there are restrictions on some products, and some products cannot be shipped to international destinations.</p>
            <p>When you place an order, we will estimate shipping and delivery dates for you based on the availability of your items and the shipping options you choose.</p>
          </>
        },
        "PRO": {
          model: "PRO",
          main_image: "/devsensor_pro.png",
          images: ["/devsensor_pro.png", "/devsensor_pro.png"],
          product_name: "PRO",
          amount: 149.9,
          currency: { "USD": "$", "NGN": "NGN" },
          free_shipping: false,
          description: "DevSensor PRO takes posture tracking to the next level with enhanced features and capabilities.",
          colors: ["bg-black", "bg-[#33220c]", "bg-[#484847]" ],
          quantity: { max: 1100, min: 0 },
          brand: "DevSensor",
          product_type: "PRO",
          availability: "In Stock (Enough Items)",
          description_content: 
          <>
            <p>DevSensor PRO takes posture tracking to the next level with enhanced features and capabilities. It includes all the features of the BASE model, plus:</p>
            <h2>Additional Features:</h2>
            <ul>
              <li>Time interval reports for up to 5 years.</li>
              <li>Support for static and dynamic routine schedules ML (Gahlep X+).</li>
              <li>Two years of device support.</li>
              <li>Battery lasting of 7 hours on a single charge.</li>
              <li>Supports fast charging.</li>
              <li>Supports multiple WiFi connections.</li>
            </ul>
            </>
            ,
          shipping_details:
          <>
            <h3>Returns Policy</h3>
            <p>You may return most new, unopened items within 30 days of delivery for a full refund. We'll also pay the return shipping costs if the return is a result of our error (you received an incorrect or defective item, etc.).</p>
            <p>You should expect to receive your refund within four weeks of giving your package to the return shipper, however, in many cases you will receive a refund more quickly.</p>
            <h3>Shipping</h3>
            <p>We can ship to virtually any address in the world. Note that there are restrictions on some products, and some products cannot be shipped to international destinations.</p>
            <p>When you place an order, we will estimate shipping and delivery dates for you based on the availability of your items and the shipping options you choose.</p>
          </>
        },
        "WEARABLE": {
          model: "WEARABLE",
          main_image: "/devsensor_wearable.png",
          images: ["/devsensor_wearable.png", "/devsensor_wearable.png"],
          product_name: "WEARABLE",
          amount: 59.9,
          currency: { "USD": "$", "NGN": "NGN" },
          free_shipping: false,
          description: "DevSensor WEARABLE represents the pinnacle of posture tracking technology, providing unparalleled accuracy and advanced features.",
          colors: ["bg-black", "bg-[#33220c]", "bg-[#484847]" ],
          quantity: { max: 1100, min: 0 },
          brand: "DevSensor",
          product_type: "WEARABLE",
          availability: "In Stock (Enough Items)",
          description_content:
          <>
            <p>DevSensor WEARABLE represents the pinnacle of posture tracking technology, providing unparalleled accuracy and advanced features. It includes all the features of the PRO model, plus:</p>
            <h2>Additional Features:</h2>
            <ul>
              <li>Support for Gahelp X WEARABLE for more accurate posture prediction.</li>
              <li>80 degrees of freedom on the Y axis.</li>
              <li>Dynamic LCD color reference.</li>
              <li>Battery lasting of 7.2 hours on a single charge.</li>
            </ul>
            </>,
          shipping_details: 
          <>
            <h3>Returns Policy</h3>
            <p>You may return most new, unopened items within 30 days of delivery for a full refund. We'll also pay the return shipping costs if the return is a result of our error (you received an incorrect or defective item, etc.).</p>
            <p>You should expect to receive your refund within four weeks of giving your package to the return shipper, however, in many cases you will receive a refund more quickly.</p>
            <h3>Shipping</h3>
            <p>We can ship to virtually any address in the world. Note that there are restrictions on some products, and some products cannot be shipped to international destinations.</p>
            <p>When you place an order, we will estimate shipping and delivery dates for you based on the availability of your items and the shipping options you choose.</p>
          </>
        }
      }
    ];

    
    
  return (
    <div>
        { 
        name && 
        <Product 
        model={name}
        primaryJson={products}
        />
        }
    </div>
  )
}

export default product