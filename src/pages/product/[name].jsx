import React from 'react'
import Product from "@/components/Product";
import { useRouter } from 'next/router';

function product() {
    const router = useRouter();
    const { name } = router.query;
    console.log({ name });
    const products = [
    { 
        "BASE" :{
        model: "BASE",
        main_image: "/devsensor_wearable.png",
        images: [ "/devsensor_wearable.png", "/devsensor_wearable.png"],
        product_name: "DevSensor",
        amount: 200,
        currency: { "USD": "$", "NGN": "NGN" },
        free_shipping: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt a doloribus iste natus et facere? dolor sit amet consectetur adipisicing elit. Sunt a doloribus iste natus et facere?",
        colors: [ "bg-black", "bg-[#be05b4]", "bg-gray-600" ],
        qunatity: { max:1100, min:0 },
        brand: "DevSensor",
        product_type: "BASE",
        Availability: "In Stock (Enough Items)",
        description_content: ` <p>Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam
        dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des
        commodo pharetras loremos.Donec pretium egestas sapien et mollis.
      </p>
      <h2>Sample Unordered List</h2>
      <ul>
        <li>Comodous in tempor ullamcorper miaculis</li>
        <li>Pellentesque vitae neque mollis urna mattis laoreet.</li>
        <li>Divamus sit amet purus justo.</li>
        <li>Proin molestie egestas orci ac suscipit risus posuere loremous</li>
      </ul>
      <h2>Sample Ordered Lista</h2>
      <ol>
        <li>Comodous in tempor ullamcorper miaculis</li>
        <li>Pellentesque vitae neque mollis urna mattis laoreet.</li>
        <li>Divamus sit amet purus justo.</li>
        <li>Proin molestie egestas orci ac suscipit risus posuere loremous</li>
      </ol>
      <h2>Sample Paragraph Text</h2>
      <p>Praesent vestibulum congue tellus at fringilla. Curabitur vitae semper sem, eu convallis est. Cras
        felis
        nunc commodo eu convallis vitae interdum non nisl. Maecenas ac est sit amet augue pharetra convallis nec
        danos dui. Cras suscipit quam et turpis eleifend vitae malesuada magna congue. Damus id ullamcorper
        neque. Sed vitae mi a mi pretium aliquet ac sed elit. Pellentesque nulla eros accumsan quis justo at
        tincidunt lobortis denimes loremous. Suspendisse vestibulum lectus in lectus volutpat, ut dapibus purus
        pulvinar. Vestibulum sit amet auctor ipsum.</p>`,
        shipping_details: `<h3>Returns Policy</h3>
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
        </p>`
      }
    }
    ];
    
  return (
    <div>
        <Product 
        model={name}
        primaryJson={products}
        />
    </div>
  )
}

export default product