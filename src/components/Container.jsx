import React from "react";
import Header from './components/Header';
import Content from './components/Content';

export default function Container(){
    return (
        <div className="container">
             <Header />
             <Content />
        </div>
    );
}