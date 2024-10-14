const API_URL = 'https://www.googleapis.com/books/v1/volumes?q=';

export const fetchBooks = async (query) => {
  const response = await fetch(`${API_URL}${query}`);
  const data = await response.json();
  return data.items || [];
};

export const fetchBookById = async (id) => {
  const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
  const data = await response.json();
  return data;
};
