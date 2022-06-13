import React from "react";
import BookCss from "./css/Book.module.css"


function Book(){
    return(
        <div>
            <div className={BookCss.book}>
                <div className={BookCss.buku}>
                    <img src="../images/Buku detail 1.png" alt="" />
                </div>
                <div className={BookCss.card}>
                <h1>My Own Private Mr Cool</h1>
                <h3 id={BookCss.name}>By. Indah Hanaco</h3>
                <h3 id={BookCss.date}>Publication Date</h3>
                <h5 id={BookCss.halaman}>August 2018</h5>
                <h3 id={BookCss.page}>Pages</h3>
                <h5>264</h5>
                <h3 id={BookCss.code}>ISBN</h3>
                <h5 id={BookCss.number}>9786020395227</h5>
                <h3 id={BookCss.harga}>Price</h3>
                <h5 id={BookCss.price}>Rp. 75.000</h5>
                </div>
                <div className={BookCss.text1}>
                    <div className={BookCss.text}>
                        <h1 id={BookCss.headtext}>About This Book</h1>
                        <p id={BookCss.p}>Bagi Heidy Theapila, latar belakang keluarga membuatnya tak mudah menemukan pasangan sejiwa. Tapi, ceritanya berbeda dengan Mirza. Heidy meyakini lelaki itu mencintainya dengan tulus. Namun, keyakinannya tumbang. Pertemuan mereka bukan cuma karena campur tangan Allah semata. Melainkan karena skenario rapi yang berkaitan dengan materi. Marah sekaligus patah hati, Heidy membatalkan rencana masa depannya dan memilih kabur ke Italia. Langkahnya mungkin tak dewasa, tapi Heidy butuh ruang untuk meninjau ulang semua rencana dalam hidupnya. Lalu, Allah memberinya kejutan.
                        </p>
                        <p id={BookCss.p}>Dalam pelayaran menyusuri Venesia, Heidy bertemu raksasa bermata biru. Graeme MacLeod, pria yang mencuri napasnya di pertemuan pertama mereka. Meski ketertarikan di antara mereka begitu besar, Heidy tidak berniat menjalin asmara singkat. Graeme harus dilupakan. Ketika apa yang terjadi di Venesia tidak bisa tetap ditinggal di Venesia, Heidy mulai goyah. Apalagi Graeme ternyata lelaki gigih yang mengejarnya hingga ke Jakarta dan tak putus asa tatkala ditolak. Meski akhirnya satu per satu rahasia kelam lelaki itu terbuka, Heidy justru kian jatuh cinta. Pertanyaannya, apakah cinta memang benar-benar mampu menyatukan mereka?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Book;