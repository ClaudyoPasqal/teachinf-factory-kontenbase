import React, {useState} from "react";
import { Link } from "react-router-dom";
import NavbarAfterCss from './css/NavbarAfter.module.css';

function NavbarAfter(){
    const [dropDown, setDropDown] = useState(false);
    return(
        <div className={NavbarAfterCss.container}>
            <div className={NavbarAfterCss.navbar}>
                <div className={NavbarAfterCss.btn}>
                    <Link to="/"><img src="../images/Frame.png" alt="" /></Link>
                </div>
            </div>
            <div>
                <div className={NavbarAfterCss.cart}id={NavbarAfterCss.cart}>
                <img src="../images/keranjang.png" alt="" />
                </div>
            </div>
            <div className={NavbarAfterCss.action}>
                <div className={NavbarAfterCss.profile} onClick={(e) => setDropDown(!dropDown)}>
                    <img src="../images/user.png" alt=""/>
                </div>
                {dropDown && (
                    <div className={NavbarAfterCss.menu}>
                    <ul>
                        <li><img src="../images/user 2.png" alt="" />Profile</li>
                        <li className={NavbarAfterCss.border}><img src="../images/logout 1.png" alt="" /><Link to='/'>Logout</Link></li>
                    </ul>
                </div>
                )}
            </div>
        </div>
    )
}



export default NavbarAfter;


        