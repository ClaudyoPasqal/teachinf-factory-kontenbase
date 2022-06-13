import React from "react";
import { Link } from "react-router-dom";
import ContentCss from "./css/Content.module.css"


function Content(){
    return(
        <div>
            {/* Head text Start */}
            <div className={ContentCss.center}>
                <div className={ContentCss.head}>
                    <h1 className={ContentCss.headtext}>With us, you can shop online & help <br />save your high street at the same time</h1>
                </div>
            </div>
            {/* Head text start*/}
            {/* Content Start */}
            <div className={ContentCss.content}>
                <div className={ContentCss.satu}>
                    <img src="../images/Rectangle 3.png" alt="" />
                    <div className={ContentCss.card1}>
                        <h1 className={ContentCss.cardT1}>Sebuah Seni untuk Bersikap Bodo Amat</h1>
                        <h6>By. Mark Manson</h6>
                        <h3 id={ContentCss.desc} >"Selama beberapa tahun belakangan, Mark Manson—melalui blognya yang sangat populer tel ...</h3>
                        <h2 id={ContentCss.harga}>Rp. 59.000</h2>
                        <button id={ContentCss.tambah} disabled>Add To Cart</button>
                    </div>
                </div>
                <div className={ContentCss.tiga}>
                    <img src="../images/Content 2 (2).png" alt="" />
                    <div className={ContentCss.card2}>
                        <h1 className={ContentCss.cardT2}>Warm Heart</h1>
                        <h6>By. Valerie Patkar</h6>
                        <h3 id={ContentCss.desc1} >Dua insan manusia harus terjebak dalam dilema cinta yang memaksa salah satu dari mereka pergi me ...</h3>
                        <h2 id={ContentCss.harga2}>Rp. 49.000</h2>
                        <button id={ContentCss.tambah2} disabled>Add To Cart</button>
                    </div>
                </div>
                <div className={ContentCss.tiga}>
                    <img src="../images/Content 3.png" alt="" />
                </div>
            </div>
            {/* Content end */}
            {/* List Start   */}
            <div className={ContentCss.listhead}>
                <h2 className={ContentCss.list}>List Book</h2>
            </div>
            <div className={ContentCss.booklist}>
                <Link to="/book" className={ContentCss.buku1}>
                    <div className={ContentCss.list1}>
                        <img src="../images/List 1.png" alt="" />
                        <h1 className={ContentCss.LT}>My Own Private Mr. Cool</h1>
                        <h6 className={ContentCss.NT}>By. Indah Hanaco</h6>
                        <h2 className={ContentCss.HT}>Rp. 75.000</h2>
                    </div>
                </Link>
                <div className={ContentCss.list2}>
                    <img src="../images/List 2.png" alt="" />
                    <h1 className={ContentCss.LT}>My Own Private Mr. Cool</h1>
                    <h6 className={ContentCss.NT}>By. Indah Hanaco</h6>
                    <h2 className={ContentCss.HT}>Rp. 75.000</h2>
                </div>
                <div className={ContentCss.list3}>
                    <img src="../images/List 3.png" alt="" />
                    <h1 className={ContentCss.LT}>My Own Private Mr. Cool</h1>
                    <h6 className={ContentCss.NT}>By. Indah Hanaco</h6>
                    <h2 className={ContentCss.HT}>Rp. 75.000</h2>
                </div>
                <div className={ContentCss.list4}>
                    <img src="../images/List 4.png" alt="" />
                    <h1 className={ContentCss.LT}>My Own Private Mr. Cool</h1>
                    <h6 className={ContentCss.NT}>By. Indah Hanaco</h6>
                    <h2 className={ContentCss.HT}>Rp. 75.000</h2>
                </div>
                <div className={ContentCss.list5}>
                    <img src="../images/List 5.png" alt="" />
                    <h1 className={ContentCss.LT}>My Own Private Mr. Cool</h1>
                    <h6 className={ContentCss.NT}>By. Indah Hanaco</h6>
                    <h2 className={ContentCss.HT}>Rp. 75.000</h2>
                </div>
            </div>
        </div>
    )
}

export default Content;