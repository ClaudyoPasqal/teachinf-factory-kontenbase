import React from "react";
import Book from "./Book";
import NavbarCart from "./NavbarCart";
import AfterCss from "./css/AfterCart.module.css"

function AfterCart(){
    return(
        <div className={AfterCss.container}>
            <NavbarCart />
            <Book />
            <div className={AfterCss.button}>
                <h2 className={AfterCss.add}>Add Cart</h2>
            </div>
        </div>
        
    )
}


export default AfterCart;