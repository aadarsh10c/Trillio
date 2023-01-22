import React from 'react';
import Sidebar from './content-comp/Sidebar';
import HotelView from './content-comp/HotelView';

export default function Content () {
    return (
        <div className="content">
            <Sidebar />
            <HotelView />
        </div>
    );
}