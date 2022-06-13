import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './css/Register.css'
import kontenbase from "../lib/kontenbase";
import { useState } from "react";


function Register(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    let navigate = useNavigate('');

    const dataChange = (e) => {
        const {id, value} = e.target;
        if( id === 'fullname'){
            setName(value);
        }if(id === 'password'){
            setPassword(value);
        }if(id === 'email'){
            setEmail(value);
        }
    }

    let firstName = '';
    let lastName = '';
    const split = name.split(' ');
    firstName = split[0];
    if (split.length >= 2) {
      split.shift();
      lastName = split.join(' ');
    }
    const registerInput = async (e) => {
        e.preventDefault()
        const { user, token, error } = await kontenbase.auth.register({
            firstName,
            lastName,
            email,
            password,
          })
          console.log(user, error)

          if(error){
            alert('Email Sudah Terdaftar Segara Login!')
          }else{
            navigate('/login')
          }
    }
    
    


  
    return(
        <div className="container2">
            <div className="homebtn2">
                <Link to="/" id="homeimage1">
                    <img src="../images/Frame.png" alt="" />
                </Link>
            </div>
            <div className="isi1">
                <div className="register1">
                    <h1 id="registertext">Register</h1>
                    <form id="form-submit" onSubmit={registerInput}>
                        <input type="text" placeholder="Email" className="input1" value={email} id="email" onChange={dataChange}/>
                        <input type="text" placeholder="Password" className="input1" value={password} id="password" onChange={dataChange}/>
                        <input type="text" placeholder="Fullname" className="input1" value={name} id="fullname" onChange={dataChange}/>
                        <input type="submit" value="Register" id="afterlogin"/>
                    </form>
                    <h3 id="akun1">Already have an account ? Klik <Link to="/login" id="login">Here</Link></h3>
                </div>
            </div>
        </div>
    )
};


export default Register;