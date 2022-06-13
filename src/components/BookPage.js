import React from "react";
import Book from "./Book";
import NavbarAfter from "./NavbarAfter";
import { Link } from "react-router-dom";
import BookCss from "./css/BookPage.module.css"



function BookPage(){
    return(
        <div className={BookCss.container}>
            <NavbarAfter />
            <Book />
            <div className={BookCss.button}>
                <Link to="/bookcart">
                <h2 className={BookCss.add}>Add Cart</h2>
                </Link>
            </div>
        </div>
    )
}



export default BookPage;