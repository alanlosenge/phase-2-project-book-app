import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Find any book</h2><br />
                <p className='header-text fs-18 fw-3'>Welcome to my book app.Feel free to search for any book you would like and get a well detailed description of it and its author</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header