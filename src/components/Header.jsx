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
           <div className="user-nav">
            user-nav using svg
           </div>
        </header>
    );
}