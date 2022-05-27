import { useState } from "react";
import * as BookAPI from "../BooksAPI";
import { Link } from "react-router-dom";
import BookComponent from "./BookComponent";
import PropTypes from "prop-types";

const SearchComponent = ({ books, changeBookShelf }) => {
  const [filteredBooks, setFilteredBooks] = useState([]);

  const handleChange = (e) => {
    const query = e.target.value.trim();

    if (query) {
      const getFilteredList = async () => {
        const res = await BookAPI.search(query, 50);
        setFilteredBooks(res.hasOwnProperty("error") ? [] : res);
      };
      getFilteredList();
    } else {
      setFilteredBooks([]);
    }
  };

  return (
    <div className="app">
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              name="query"
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {filteredBooks.map(
              (book, index) =>
                book.imageLinks && (
                  <li key={index}>
                    <BookComponent
                      book={book}
                      books={books}
                      onUpdateShelfStatus={changeBookShelf}
                    />
                  </li>
                )
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};


SearchComponent.propTypes = {
  books: PropTypes.array.isRequired,
  changeBookShelf: PropTypes.func.isRequired
}
export default SearchComponent;
