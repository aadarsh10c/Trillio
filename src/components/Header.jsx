import React from 'react';
import logo from '../assets/logo.png'

export default function Header (){
    return(
        <header className="header">
           <img src={logo} alt="" className="icon" />

           <form action="#" className="search">
                <input type="text" className="search__box" placeholder='Type to Search'/>
                <button className='search__btn'>
                    <svg className="search__icon">
                        <use href="../src/assets/sprite.svg#icon-magnifying-glass"></use>
                    </svg>
                </button>
           </form>

           <nav className="user-nav">
            <div className="user-nav__save-box">
                <svg className="user-nav__save-icon">
                    <use href="../src/assets/sprite.svg#icon-bookmark"></use>                  
                </svg>
                <span className="user-nav__alert">7</span>
            </div>
            <div className="user-nav__chat-box">
                <svg className="user-nav__chat-icon">
                    <use href="../src/assets/sprite.svg#icon-chat"></use>                  
                </svg>
                <span className="user-nav__alert">13</span>
            </div>
            <div className="user-nav__profile">
                <img src="../src/assets/user-4.jpg" alt="Ron Wesely" className="user-nav__profile-pic" />
                <span className="user-nav__profile-name">Ron</span>
            </div>
           </nav>
        </header>
    );
}