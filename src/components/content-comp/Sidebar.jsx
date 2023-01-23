import React from "react";

export default function Sidebar(){
    return (
        <nav className="sidebar">
            <nav className="nav">
                <div className="nav__box">
                    <a href="#" className="nav__box-link">
                        <svg className="nav__box-icon">
                            <use href="./src/assets/sprite.svg#icon-home"></use>
                        </svg>
                        <span className="nav__box-text">
                            Home
                        </span>
                    </a>
                </div>
                <div className="nav__box">
                    <a href="#" className="nav__box-link">
                        <svg className="nav__box-icon">
                            <use href="./src/assets/sprite.svg#icon-key"></use>
                        </svg>
                        <span className="nav__box-text">
                            Key
                        </span>
                    </a>
                </div>
                <div className="nav__box">
                    <a href="#" className="nav__box-link">
                        <svg className="nav__box-icon">
                            <use href="./src/assets/sprite.svg#icon-map"></use>
                        </svg>
                        <span className="nav__box-text">
                            Flight
                        </span>
                    </a>
                </div>
                <div className="nav__box">
                    <a href="#" className="nav__box-link">
                        <svg className="nav__box-icon">
                            <use href="./src/assets/sprite.svg#icon-aircraft-take-off"></use>
                        </svg>
                        <span className="nav__box-text">
                            Map
                        </span>
                    </a>
                </div>
            </nav>
            <p className="legal">
                &copy; 2017 by trillio. All rights reserved.
            </p>
        </nav>
    );
}