import React, { useState } from 'react';

const Checkout = ({ cartItems, clearCart }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [orderSuccess, setOrderSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (name && email && address) {
      setOrderSuccess(true);
      clearCart(); 
    }
  };

  if (orderSuccess) {
    return <h2>Thank you for your purchase! Your order has been placed.</h2>;
  }

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Address:</label>
          <textarea value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
