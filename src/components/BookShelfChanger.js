import React from "react";
import PropTypes from "prop-types";

const BookShelfChanger = ({ book, books, onChangeShelfStatus }) => {
  let status = "none";
  const selectedBook = books.filter(b=> b.id === book.id);
  if(selectedBook.length > 0 ){
    status = (selectedBook[0].shelf);
  }

  const updateShelf = (e)=>{
    onChangeShelfStatus(book,e.target.value.trim());
  }
  return (
    <div className="book-shelf-changer">
      <select onChange={(e)=>updateShelf(e)} value={status}>
        <option value="none" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

BookShelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  onChangeShelfStatus: PropTypes.func.isRequired
}

export default BookShelfChanger;
