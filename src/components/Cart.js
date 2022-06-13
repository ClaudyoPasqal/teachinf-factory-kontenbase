import React from "react";
import CartCss from "./css/Cart.module.css"
import NavbarCart from "./NavbarCart";

function Cart(){
    return(
        <div className={CartCss.container}>
            <NavbarCart/>
            <div className={CartCss.buku}>
                <div className={CartCss.head}>
                    <h1 id={CartCss.h1}>My cart</h1>
                    <h5 id={CartCss.h5}>Review your order</h5>
                </div>
                <div className={CartCss.isi1}>
                    <img src="../images/buku detail 2.png" alt="" />
                    <div className={CartCss.isi}>
                        <h1 id={CartCss.isitext}>My Own Private Mr. Cool</h1>
                        <h2 id={CartCss.h2}>By. Indah Hanaco</h2>
                        <h3 id={CartCss.h3}>Rp. 75.000</h3>
                    </div>
                    <div className={CartCss.trash}>
                        <img src="../images/Trash.png" alt="" />
                    </div>
                </div>
            </div>
            <div className={CartCss.bayar}>
                <img src="../images/payment.png" alt="" id={CartCss.transaksi} />
                <input type="submit" value="Pay" id={CartCss.bayar1} />
            </div>
        </div>
    )
}

export default Cart;