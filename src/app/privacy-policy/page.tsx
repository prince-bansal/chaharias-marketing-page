import Image from "next/image";
import React from "react";
// import TnC from "../../../public/assets/privacy-policy.jpg";
import TnC from "../../../public/assets/1.png";

const PrivacyPolicy = () => {
  return (
    <div className="w-[90%] lg:w-[80%] m-auto py-10">
      <p className="text-3xl font-semibold">Privacy Policy</p>

      <p className="text-gray-500">[Last updated: November 7, 2024]</p>
      <Image
        src={TnC}
        width={1500}
        height={1500}
        className="h-[26vh] lg:h-[70vh] rounded-xl shadow-md object-cover my-10 w-full m-auto"
        alt="Terms and Conditions"
      />
      <p className="text-base mb-3">
        At Chaharias Wholesale Bazaar, we respect your privacy and are committed
        to protecting your personal information. This privacy policy explains
        how we collect, use, and safeguard your information when you visit or
        make a purchase from our website.
      </p>
      <p className="text-base font-semibold mt-2">1. Information We Collect</p>
      <p>
        We collect personal information to help us serve you better. This may
        include:
      </p>
      <ul>
        <li className="text-sm">
          <span>Personal Details:</span> Name, email address, phone number,
          shipping address, billing address.
        </li>
        <li className="text-sm">
          <span>Payment Information:</span> Payment method details like credit
          card or bank information (collected securely during purchase).
        </li>
        <li className="text-sm">
          <span>Usage Data:</span>How you interact with our website, including
          IP address, browser type, and device details.
        </li>
      </ul>
      <p className="text-base font-semibold mt-2">
        2. How We Use Your Information
      </p>
      <p>We use the information collected to:</p>
      <ul>
        <li className="text-sm">
          <span>Process Orders:</span> To manage and fulfill your orders, and to
          contact you about your purchase.
        </li>
        <li className="text-sm">
          <span>Customer Support: </span>To answer any questions or resolve
          issues regarding your order or experience.
        </li>
        <li className="text-sm">
          <span>Process Orders:</span> To manage and fulfill your orders, and to
          contact you about your purchase.
        </li>
        <li className="text-sm">
          <span>Marketing:</span> With your permission, we may send you
          promotional emails about our products, discounts, or special offers.
        </li>
        <li className="text-sm">
          <span>Improve Our Services:</span> To understand how customers use our
          website and improve your overall shopping experience.
        </li>
      </ul>
      <p className="text-base font-semibold mt-2">
        {" "}
        3. Sharing Your Information
      </p>
      <p>
        We value your privacy and do not sell or rent your personal information.
        However, we may share your data with:
      </p>
      <ul>
        <li className="text-sm">
          <span>Service Providers:</span> Third-party vendors that help us with
          order fulfillment, payment processing, and website management.
        </li>{" "}
        <li className="text-sm">
          <span>Legal Requirements:</span> If required by law, we may disclose
          your information to comply with legal processes.
        </li>{" "}
      </ul>
      <p className="text-base font-semibold mt-2">
        4. Security of Your Information
      </p>
      <p>
        We take security seriously and use industry-standard practices to
        protect your personal information. While we take all necessary
        precautions, no method of online transmission is 100% secure. We
        recommend that you use strong passwords and protect your account
        information.
      </p>

      <p className="text-base font-semibold mt-2">5. Cookies</p>
      <p>
        We use cookies to enhance your experience on our website. Cookies are
        small files stored on your device that help us track preferences and
        improve the user experience. You can choose to disable cookies in your
        browser, but some features of our website may not function properly
        without them.
      </p>

      <p className="text-base font-semibold mt-2">6. Your Rights</p>
      <p>You have the right to:</p>
      <ul>
        <li className="text-sm">
          <span>Access</span> the personal information we hold about you.
        </li>{" "}
        <li className="text-sm">
          <span>Correct</span>or update your personal details.
        </li>{" "}
        <li className="text-sm">
          <span>Delete</span> your account or data if you no longer wish to shop
          with us.
        </li>{" "}
      </ul>
      <p>
        To exercise these rights, you can contact us at the details provided
        below.
      </p>

      <p className="text-base font-semibold mt-2">7. Third-Party Links</p>
      <p>
        Our website may include links to third-party websites (e.g., social
        media). Please note that we are not responsible for the privacy
        practices or content of these external sites.
      </p>

      <p className="text-base font-semibold mt-2">8. Changes to This Policy</p>
      <p>
        We may update our privacy policy from time to time. Any changes will be
        posted on this page. Please review it regularly to stay informed about
        how we protect your information.
      </p>

      <p className="text-base font-semibold mt-2">9. Contact Us</p>
      <p>
        If you have any questions or concerns about our privacy policy or how
        your data is handled, please contact us at:
      </p>

      <p className="text-lg mt-4 font-semibold my-1">
        Chaharias Wholesale Bazaar
      </p>
      <p className="">
        Email:{" "}
        <span className="text-base font-semibold my-1">
          {" "}
          chahariaswb@gmail.com{" "}
        </span>
      </p>
      <p>
        Phone:
        <span className="text-base font-semibold my-1">+91-911 811 0363</span>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
