import React from "react";
import Header from './Header'
import Content from './Content';

export default function Container(){
    return (
        <div className="container">
             <Header />
             <Content />
        </div>
    );
}