import React, { useState } from "react";
import "./Library.css";

function Library() {
  const [books, setBooks] = useState([
    { title: "The Great Gatsby", author: "S. Scott Fitzgerald" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" }
  ]);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [search, setSearch] = useState("");

  const addBook = () => {
    if (title && author) {
      setBooks([...books, { title, author }]);
      setTitle("");
      setAuthor("");
    }
  };

  const removeBook = (index) => {
    setBooks(books.filter((_, i) => i !== index));
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <h1>Library Management System</h1>

      <div className="card">
        <input
          className="input"
          placeholder="Search books..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="form-row">
          <input
            className="input"
            placeholder="Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="input"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button className="add-btn" onClick={addBook}>
            Add Book
          </button>
        </div>
      </div>

      {filteredBooks.map((book, index) => (
        <div className="card book-card" key={index}>
          <div>
            <h2>{book.title}</h2>
            <p>by {book.author}</p>
          </div>
          <button
            className="remove-btn"
            onClick={() => removeBook(index)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Library;
