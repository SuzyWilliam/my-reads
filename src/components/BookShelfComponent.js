
import { Link } from "react-router-dom";

import BookListComponent from "./BookListComponent";
import PropTypes from "prop-types";

const BookShelfComponent = ({ books, changeBookShelf }) => {
  const shelfTypes = [
    { type: "currentlyReading", title: "Currently Reading" },
    { type: "wantToRead", title: "Want to Read" },
    { type: "read", title: "Read" },
  ];

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelfTypes.map((shelfType, index) => {
            const filteredBooks = books.filter((book) =>
              book.shelf === shelfType.type
            );
            return (
              <div className="bookshelf" key={index}>
                <h2 className="bookshelf-title">{shelfType.title}</h2>
                <div className="bookshelf-books">
                  <BookListComponent
                    books={filteredBooks}
                    onChangeShelfStatus={changeBookShelf}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};


BookShelfComponent.propTypes = {
  books: PropTypes.array.isRequired,
  changeBookShelf: PropTypes.func.isRequired
}
export default BookShelfComponent;
