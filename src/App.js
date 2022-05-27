import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import SearchComponent from "./components/SearchComponent";
import BookShelfComponent from "./components/BookShelfComponent";
import * as BooksAPI from "./BooksAPI";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };

    getBooks();
  }, []);

  const changeBookShelf = (bookInfo, newShelf) => {
    console.log(bookInfo,newShelf);
    BooksAPI.update(bookInfo, newShelf);
    bookInfo.shelf = newShelf;
    setBooks(books.filter((book) => book.id !== bookInfo.id).concat(bookInfo));
  };

  return (
    <Routes>
      <Route
        exact
        path="/search"
        element={
          <div className="app">
            <SearchComponent
              changeBookShelf={changeBookShelf}
              books={books}
            />
          </div>
        }
      />
      <Route
        exact
        path="/"
        element={
          <div className="app">
            <BookShelfComponent
              books={books}
              changeBookShelf={changeBookShelf}
            />
          </div>
        }
      />
    </Routes>
    // </div>
  );
}

export default App;
