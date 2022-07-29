import React, { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="Navbar">
            <span className="nav-logo">NoteWise</span>
            <div className={`nav-items ${isOpen && "open"}`}>
                <a href="/">Home</a>
                <a href="/about">About</a>
            </div>
            <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                <div className="bar">
                </div>
            </div>
        </div>
    );
}

export default Navbar;