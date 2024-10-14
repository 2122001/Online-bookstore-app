import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBookById } from '../services/bookService';

const BookDetails = ({ addToCart }) => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const getBook = async () => {
      const bookData = await fetchBookById(id);
      setBook(bookData);
    };
    getBook();
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <h2>{book.volumeInfo.title}</h2>
      <p>Author: {book.volumeInfo.authors?.join(', ')}</p>
      <p>{book.volumeInfo.description}</p>
      <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
      <button onClick={() => addToCart(book)}>Add to Cart</button>
    </div>
  );
};

export default BookDetails;
