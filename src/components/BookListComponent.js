import React from "react";
import BookComponent from "./BookComponent";
import PropTypes from "prop-types";

const BookListComponent = ({ books, onChangeShelfStatus }) => {
  return (
    <ol className="books-grid">
      {books.map(
        (book, index) =>
          book.imageLinks && (
            <li key={index}>
              <BookComponent book={book} books= {books} onUpdateShelfStatus={onChangeShelfStatus} />
            </li>
          )
      )}
    </ol>
  );
};


BookListComponent.propTypes = {
  books: PropTypes.array.isRequired,
  onChangeShelfStatus: PropTypes.func.isRequired
}

export default BookListComponent;
