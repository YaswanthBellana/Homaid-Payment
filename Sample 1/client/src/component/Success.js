import React from 'react';
import './success.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Homaid</h1>
      </header>
      <main>
        <PaymentSuccess />
      </main>
      <footer>
        <p>&copy; 2023 Homaid. All rights reserved.</p>
      </footer>
    </div>
  );
}

function PaymentSuccess() {
  return (
    <section className="payment-success">
      <h2>Payment Successful</h2>
      <p>Thank you for your payment. Your transaction was successful. We will process your request shortly.</p>
      <a href="/">Return to Home</a>
    </section>
  );
}

export default App;
