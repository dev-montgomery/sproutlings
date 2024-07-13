import React from 'react';

const Contact = () => {
  return (
    <div className='contact-container'>
      <h2>Thank you for your interest in our microgreens!</h2>
      <p>explanation of when to order, when to pay, and when orders are sent</p>

      <h3>Availability</h3>
      <p>Please confirm the availability of your desired microgreens by checking the site, or contacting us directly.</p>

      <h3>Placing the Order</h3>
      <p>To place an order, you can choose one of the following methods:</p>

      <h4>Optimal Method: Text</h4>
      <p>Text your name, address, the product, and the amount you want to the following number:</p>
      <p>Text Order Number: (555)123-4567</p>
      <p>Example Text Message:</p>
      <ul>
        <li>Name: John Doe</li>
        <li>Address: 123 Green St, Springfield</li>
        <li>Product: Peashoots</li>
        <li>Amount: 2 packs</li>
      </ul>

      <h4>Alternative Method: Call</h4>
      <p>Call us directly to place your order. Our friendly staff will assist you in confirming availability and completing your order:</p>
      <p>Contact Number: (555)123-4567</p>
      <p>We look forward to serving you and ensuring you receive the freshest microgreens for your culinary and health needs. Thank you for choosing us!</p>
    </div>
  )
};

export default Contact;