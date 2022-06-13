import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import './App.css';
import Landing from './components/Landing';
import Login from './components/Login';
import React from 'react';
import Register from "./components/Register";
import AfterPage from "./components/AfterPage";
import BookPage from "./components/BookPage";
import AfterCart from "./components/AfterCart";
import AfterLoginCart from "./components/AfterLoginCart";
import Cart from "./components/Cart";


function App() {
  return (
    <Router>
    <div className="App">
        <Routes>
          <Route exact path="/" element={<Landing/>}/>
        </Routes>
        <Routes>
          <Route exact path="/login" element = {<Login/>}/>
        </Routes>
        <Routes>
          <Route path="/register" element = {<Register />}/>
        </Routes>
        <Routes>
          <Route exact path="/after" element = {<AfterPage/>}/>
        </Routes>
        <Routes>
          <Route exact path="/book" element = {<BookPage />}/>
        </Routes>
        <Routes>
          <Route exact path="/bookcart" element = {<AfterCart />}/>
        </Routes>
        <Routes>
          <Route exact path="/aftercart" element = {<AfterLoginCart />}/>
        </Routes>
        <Routes>
          <Route exact path="/cart" element = {<Cart />}/>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
