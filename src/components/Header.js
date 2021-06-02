import React from 'react';

import "./Header.css";

const Header = (props) => {


    return (
        <div className = "main-header">
            <h1>GTD App</h1>
            <nav className="nav">
                <ul>

                    <li>
                        <a href="/">Settings</a>
                    </li>

                    <li>
                        <button >Logout</button>
                    </li>
                </ul>
            </nav>
        </div>



    );

}

export default Header;