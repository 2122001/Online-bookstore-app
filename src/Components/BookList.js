import React from 'react';
import { Link } from 'react-router-dom';

const BookList = ({ books, addToCart }) => {
  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <h3>{book.volumeInfo.title}</h3>
            <p>by {book.volumeInfo.authors?.join(', ')}</p>
            <Link to={`/book/${book.id}`}>View Details</Link>
            <button onClick={() => addToCart(book)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
