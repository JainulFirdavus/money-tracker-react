import React, { useState } from "react";
import { FaBars, FaBuffer, FaDollarSign } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';


import { NavLink } from "react-router-dom";

function Sidebar({ children }) {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => { console.log("isOpen",isOpen); setIsOpen(!isOpen)}
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
            <div style={{ width: isOpen ? "300px" : "50px" }} className="sidebar">
                <div className="top_section">
                    <h1  style={{ display: isOpen ? "block" : "none" }} className="logo">Logo</h1>
                    <div style={{ marginLeft: isOpen ? "150px" : "0px" }}  className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {menuItem.map((item, index) => {
                    return (
                        <NavLink to={item.path}
                            key={index}
                            className="link"
                            activeclassname="active"
                        >
                            <div className="icon">{item.icon}</div>
                            <div className="link_text" style={{ display: isOpen ? "block" : "none" }} >{item.name}</div>
                        </NavLink>
                    )
                })}
            </div>
        
            <main>{children}</main>
        </div>
    )
}
export default Sidebar