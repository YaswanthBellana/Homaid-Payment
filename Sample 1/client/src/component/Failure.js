import React from 'react';
import './failure.css';

function Failure() {
  return (
    <div className="container">
      <header>
        <h1>Homaid</h1>
      </header>
      <main>
        <PaymentFailure />
      </main>
      <footer>
        <p>&copy; 2023 Homaid. All rights reserved.</p>
      </footer>
    </div>
  );
}

function PaymentFailure() {
  return (
    <section className="payment-failure">
      <h2>Payment Failed</h2>
      <p>Unfortunately, your payment was not successful. Please try again or contact customer support for assistance.</p>
      <a href="/">Go Back</a>
    </section>
  );
}

export default Failure;
