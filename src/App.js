import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BookList from './Components/BookList';
import BookDetails from './Components/BookDetails';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import { fetchBooks } from './services/bookService';

const App = () => {
  const [books, setBooks] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const loadBooks = async () => {
      const booksData = await fetchBooks('react');
      setBooks(booksData);
    };
    loadBooks();
  }, []);

  const addToCart = (book) => {
    setCartItems((prevItems) => [...prevItems, book]);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cartItems.length})</Link>
      </nav>
      <Routes>
        <Route path="/" element={<BookList books={books} addToCart={addToCart} />} />
        <Route path="/book/:id" element={<BookDetails addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
        <Route path="/checkout" element={<Checkout cartItems={cartItems} clearCart={clearCart} />} />
      </Routes>
    </Router>
  );
};

export default App;
