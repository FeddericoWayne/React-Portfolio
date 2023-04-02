import React from "react";
import Navigation from './Navigation';
import '../styles/header.css'

export default function Header({ currentView,handlePageChange }) {
    return (

        <div className="header-container">
            <h1 className="header-title">FRED DIAZ-WANG</h1>
            <Navigation currentView={currentView} handlePageChange={handlePageChange}/>
        </div>
    )




}