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
                        <NavLink to={"/ "}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink >Produts</NavLink>
                    </li>
                    <li>
                        <NavLink>Abouts</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/cart"}>Cart</NavLink>
                    </li>

                </div>
            </div>
            <div className="mobile-screen">
                <div className=" mob-logo ms-3">
                    <h2>DORA</h2>
                </div>
                <div className="mob-nav">
                    <li>
                        <NavLink to={"/ "}><i class="fa-solid fa-house"></i></NavLink>
                    </li>
                    <li>
                        <NavLink ><i class="fa-solid fa-shirt"></i></NavLink>
                    </li>
                    <li>
                        <NavLink><i class="fa-solid fa-handshake-angle"></i></NavLink>
                    </li>
                    <li>
                        <NavLink><i class="fa-solid fa-cart-plus"></i></NavLink>
                    </li>
                </div>
            </div>
        </>
    )
}

export default Head