import React from "react";
import hotel1url from '../../assets/hotel-1.jpg'
import hotel2url from '../../assets/hotel-2.jpg'
import hotel3url from '../../assets/hotel-3.jpg'
import spriteURL from '../../assets/sprite.svg'


export default function HotelView() {
    return (
        <main className="hotel-view">
            <div className="gallery">
                <figure className="gallery__item">
                    <img src = {hotel1url} alt="hotel view - 1" className="gallery__photo" />
                    </figure>
                <figure className="gallery__item">
                    <img src = {hotel2url} alt="hotel view - 2" className="gallery__photo" />
                    </figure>
                <figure className="gallery__item">
                    <img src = {hotel3url} alt="hotel view - 3" className="gallery__photo" />
                    </figure>
            </div>
            <div className="overview">
                <h1 className="overview__heading">
                    Hotel Las Palmas
                </h1>
                <div className="overview__star">
                    <svg className="overview__star-icon">
                        <use href={`${spriteURL}#icon-star`}></use>
                    </svg>
                    <svg className="overview__star-icon">
                        <use href={`${spriteURL}#icon-star`}></use>
                    </svg>
                    <svg className="overview__star-icon">
                        <use href={`${spriteURL}#icon-star`}></use>
                    </svg>
                    <svg className="overview__star-icon">
                        <use href={`${spriteURL}#icon-star`}></use>
                    </svg>
                    <svg className="overview__star-icon">
                        <use href={`${spriteURL}#icon-star`}></use>
                    </svg>
                </div>
                <div className="overview__location">
                    <svg className="overview__location-icon">
                        <use href={`${spriteURL}#icon-location`}></use>
                    </svg>
                    <button className="btn-inline">
                        Albufeira, Portugal    
                    </button>   
                </div>
                <div className="overview__rating">
                    <h1 className="overview__rating-average">8.6</h1>
                    <h3 className="overview__rating-count">46 Votes</h3>
                </div>
            </div>
        </main>
    );
}