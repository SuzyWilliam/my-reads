import PropTypes from "prop-types";
import React, { useCallback, useEffect, useState } from "react";
import BookShelfChanger from "./BookShelfChanger";

const BookComponent = ({ book, books, onUpdateShelfStatus }) => {
  
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${book.imageLinks.thumbnail}")`,
          }}
        ></div>
        <BookShelfChanger book={book} books={books} onChangeShelfStatus={onUpdateShelfStatus}/>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.hasOwnProperty("authors") ? book.authors.join(", ") : ""}
      </div>
    </div>
  );
};

BookComponent.propTypes = {
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  onUpdateShelfStatus: PropTypes.func.isRequired
}
export default BookComponent;
