import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Head.css"

const Head = () => {
    return (
        <>
            <div className="head">
                <div className="logo ms-3">
                    <h2>DORA</h2>

                </div>
                <div className="nav-bar ">
                    <li>
                        <NavLink>Home</NavLink>
                    </li>
                    <li>
                        <NavLink>Home</NavLink>
                    </li>
                    <li>
                        <NavLink>Home</NavLink>
                    </li>
                    <li>
                        <NavLink>Home</NavLink>
                    </li>

                </div>
            </div>
            <div className="mobile-screen">
                <div className=" mob-logo ms-3">
                    <h2>DORA</h2>
                </div>
                <div className="mob-nav">
                    <li>
                        
                    </li>
                    <li>
                        <NavLink>Home</NavLink>
                    </li>
                    <li>
                        <NavLink>Home</NavLink>
                    </li>
                    <li>
                        <NavLink>Home</NavLink>
                    </li>
                </div>
            </div>
        </>
    )
}

export default Head