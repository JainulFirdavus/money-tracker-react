import React, { useState } from "react";
import { FaBars ,FaBuffer,FaDollarSign} from 'react-icons/fa';
import { FiSettings} from 'react-icons/fi';

import { NavLink } from "react-router-dom";

function Sidebar({ children }) {
    const menuItem = [
        {
            path: "/",
            name: "Dashboard",
            icon: <FaBuffer />
        },
        {
            path: "/about",
            name: "About",
            icon: <FaDollarSign />
        },
        {
            path: "/settings",
            name: "Settings",
            icon: <FiSettings />
        }
    ]
    return (
        <div className="container">
            <div className="sidebar">
                <div className="top_section">
                    <h1 className="logo">Logo</h1>
                    <div className="bars">
                        <FaBars />
                    </div>
                </div>
                {menuItem.map((item, index) => {
                    return (
                    <NavLink to={item.path}
                    key={index}
                    className="link"
                    activeclassName="active"
                    > 
                   <div className="icon">{item.icon}</div>
                   <div className="link_text">{item.name}</div>
                    </NavLink>
                    )
                })}


            </div>
            <main>{children}</main>
        </div>
    )
}
export default Sidebar