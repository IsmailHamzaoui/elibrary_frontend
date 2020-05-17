import React, {useEffect, useState} from 'react';
import style from './Books.module.css';
import ListItems from "../../utils/listItems/ListItems";
import SearchInput from "../../utils/inputs/search/SearchInput";
import SortInput from "../../utils/inputs/sort/SortInput";
import {getAllBooks} from "../../AppService";
import Book from './book/Book';

const Books = () => {

    const defaultBooks = [
        {
            title: "",
            author: "",
            publisher:"",
            status: false,
            book_date: null

        }
    ];

    const [listOfBooks, setListOfBooks] = useState(defaultBooks);
    const [search, setSearch] = useState("");
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    useEffect(() => {
        getAllBooks()
            .then(books => setListOfBooks(books));
    }, []);

    useEffect(() => {
        if (search !== ""){
            const newBooks = listOfBooks.filter(book => book.title.toLowerCase().includes(search))
            setListOfBooks(newBooks);
        }else{
            getAllBooks()
                .then(books => setListOfBooks(books));
        }
    }, [search]);

    const searchStyle = {
            width: "auto",
        marginRight: "100px",
    };

    const handleChange = (key) => {
        let listSorted = null;
        if (key === "title"){
            listSorted = listOfBooks.sort((a, b) => (a.title.toLowerCase()) > (b.title.toLowerCase()) ? 1 : -1)
        }else  if (key === "author"){
            listSorted = listOfBooks.sort((a, b) => (a.author.toLowerCase()) > (b.author.toLowerCase()) ? 1 : -1)
        } else {
            listSorted = listOfBooks.sort((a) => (a.status) ? 1 : -1)
        }
        forceUpdate()
        setListOfBooks(listSorted);
    };
    return (
        <div className={style.Books}>
            <h1>BOOKS</h1>
            <div className={style.search}>
                <SearchInput onChange={setSearch} style={searchStyle}/>
                <SortInput handleChange={handleChange} />
            </div>
            <ListItems booksFromProps={listOfBooks}>
                {
                    listOfBooks.map((book, i) => {
                        return <Book id="Books" key={i} titleUsedInBook={book.title}
                                     authorUsedInBook={book.author}
                                     statusUsedInBook={book.status}
                                     publisherUsedInBook={book.publisher}
                                     dateUsedInBook={book.book_date}
                        />

                    })
                }
            </ListItems>

        </div>
    )
};

export default Books;