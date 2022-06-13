import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './css/Login.css'
import kontenbase from "../lib/kontenbase";

function Login(){
    
    let navigate = useNavigate('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
        const {id, value} = e.target;
        if(id === 'email'){
            setEmail(value);
        }if(id === 'password'){
            setPassword(value);
        }
    }

    const loginInput = async (e) => {
        e.preventDefault()
        const {user, token, error} = await kontenbase.auth.login({
            email,
            password,
        })
        console.log(user, error)
        if(error){
            alert("Email / Password salah")
        }else{
            navigate('/after')
        }
    };
    return(
        <div className="isi">
            {/* Home start */}
            <div className="homebtn1">
                <Link to="/" id="homeimage">
                    <img src="../images/Frame.png" alt="" />
                </Link>
            </div>
            {/* Home End */}
            {/* Login Start */}
            <div className="container1">
                <div className="login1">
                    <h1 id="logintext">Login</h1>
                    <form id="form-login" onSubmit={loginInput}>
                        <input type="email" placeholder="Email" className="input" id="email" value={email} onChange={handleChange}/>
                        <input type="password" placeholder="Password" className="input" id="password" value={password} onChange={handleChange}/>
                        <input type="submit" id="login2" value="Login" />
                    </form>
                    <h3 id="akun">Don't have an account ? Klik <Link to="/register" id="register">Here</Link></h3>
                </div>
            </div>
        </div>
    )
}

export default Login;