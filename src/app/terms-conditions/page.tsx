import React from "react";
// import TnC from "../../../public/assets/terms-conditions.jpg";
import TnC from "../../../public/assets/2.png";
import Image from "next/image";

const TermsAndConditions = () => {
  return (
    <div className="w-[90%] lg:w-[80%] m-auto py-10">
      <p className="text-3xl font-semibold">Terms and Conditions</p>

      <p className="text-gray-500">[Last updated: November 7, 2024]</p>
      <Image
        src={TnC}
        width={1500}
        height={1500}
        className="h-[26vh] lg:h-[70vh] rounded-xl shadow-md object-cover my-10 w-full m-auto"
        alt="Terms and Conditions"
      />
      <p className="text-lg mb-3">
        Welcome to Chaharias Wholesale Bazaar. Please read these terms and
        conditions carefully before using our website. By accessing or using our
        website, you agree to follow and be bound by these terms. If you do not
        agree, you may not use our services.
      </p>
      <p className="text-base font-semibold mt-2">1. General Information</p>
      <ul>
        <li className="text-sm">
          Chaharias Wholesale Bazaar operates this website to provide online
          shopping for customers.
        </li>
        <li className="text-sm">
          {
            'The terms "we", "us", and "our" refer to Chaharias Wholesale Bazaar.'
          }
        </li>
        <li className="text-sm">
          {" "}
          By using this website, you confirm that you are at least 18 years old
          or accessing it under the supervision of a guardian.
        </li>
      </ul>
      <p className="text-base font-semibold mt-2">
        2. Product Information and Availability{" "}
      </p>
      <ul>
        <li className="text-sm">
          We make every effort to display the products as accurately as
          possible, including colors and details.
        </li>
        <li className="text-sm">
          Product availability may vary. If a product you order is not
          available, we will notify you as soon as possible and offer
          alternatives or a refund.
        </li>
        <li className="text-sm">
          Prices for our products are subject to change without notice.
        </li>
      </ul>
      <p className="text-base font-semibold mt-2"> 3. Orders and Payments </p>
      <ul>
        <li className="text-sm">
          When placing an order, you agree that all the information provided is
          accurate and complete.
        </li>
        <li className="text-sm">
          We accept various payment methods like credit/debit cards, UPI, and
          net banking.
        </li>
        <li className="text-sm">
          Your order will be processed only after we receive the payment
          confirmation.
        </li>
      </ul>
      <p className="text-base font-semibold mt-2">4. Shipping and Delivery</p>
      <ul>
        <li className="text-sm">
          We aim to deliver your products within the estimated delivery time
          provided at checkout.
        </li>
        <li className="text-sm">
          Delivery times may vary based on your location and availability of
          products.
        </li>
        <li className="text-sm">
          Once the order is shipped, you will receive a tracking number to track
          your order.
        </li>
      </ul>
      <p className="text-base font-semibold mt-2">5. Returns and Refunds</p>
      <ul>
        <li className="text-sm">
          We accept returns for products that are unused, unwashed, and in their
          original packaging.
        </li>
        <li className="text-sm">
          Returns must be initiated within 7 days of receiving the product.
        </li>
        <li className="text-sm">
          Refunds will be processed once the returned item is inspected and
          approved.
        </li>
      </ul>
      <p className="text-base font-semibold mt-2">6. Cancellation Policy</p>
      <ul>
        <li className="text-sm">
          You can cancel your order within 24 hours of placing it. After 24
          hours, the cancellation request may not be accepted if the order has
          already been processed.
        </li>
        <li className="text-sm">
          If a cancellation is successful, a full refund will be issued.
        </li>
      </ul>
      <p className="text-base font-semibold mt-2">7. Privacy Policy</p>
      <ul>
        <li className="text-sm">
          Your personal information, such as name, contact details, and payment
          information, is used to process your orders and will not be shared
          with third parties.
        </li>
        <li className="text-sm">
          Please review our Privacy Policy for detailed information on how we
          protect your data.
        </li>
      </ul>
      <p className="text-base font-semibold mt-2">8. Intellectual Property</p>
      <ul>
        <li className="text-sm">
          All content on this website, including images, logos, and text,
          belongs to Chaharias Wholesale Bazaar and is protected by copyright
          laws. You are not permitted to use or reproduce any content without
          our permission.
        </li>
      </ul>
      <p className="text-base font-semibold mt-2">
        9. Changes to Terms and Conditions
      </p>
      <ul>
        <li className="text-sm">
          Chaharias Wholesale Bazaar reserves the right to modify or update
          these terms at any time without prior notice. Please review this page
          regularly to stay informed of any changes.
        </li>
      </ul>
      <p className="text-base font-semibold mt-2">10. Contact Us</p>
      <ul>
        <li className="text-sm">
          If you have any questions or concerns regarding these terms, please
          contact us at:
        </li>
      </ul>
      <p className="text-lg mt-4 font-medium my-1">
        Chaharias Wholesale Bazaar
      </p>
      <p className="">
        Email:{" "}
        <span className="text-base font-medium my-1">
          {" "}
          chahariaswb@gmail.com{" "}
        </span>
      </p>
      <p>
        Phone:
        <span className="text-base font-medium my-1">+91-911 811 0363</span>
      </p>
      <p className="text-base my-1">
        By using this website, you agree to these terms and conditions. Thank
        you for shopping with Chaharias Wholesale Bazaar.
      </p>
    </div>
  );
};

export default TermsAndConditions;
