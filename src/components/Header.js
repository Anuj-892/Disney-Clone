import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/disney-hotstar-logo-dark.svg'

const Header = () => {

    const navRef = useRef();

    const openMenu = () => {
        navRef.current.classList.toggle('open');
    }

    return (
        <header>
            <div className="container">
                <div className="hamburger-menu" onClick={openMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <Link to="/"><img src={Logo} alt=''/></Link>

               <div className="navigation">
                    <nav ref={navRef}>
                        <ul>
                            <li><a href="#">TV</a></li>
                            <li><a href="#">Movies</a></li>
                            <li><a href="#">Sports</a></li>
                            <li><a href="#">News</a></li>
                            <li><a href="#">Premium</a></li>
                            <li><a href="#">Disney+</a></li>
                        </ul>
                    </nav>

                    <div className="secondary-nav">
                        <input type="text" placeholder="Search"/>
                        <button className="btn">Subscribe</button>
                        <p>LOGIN</p>
                    </div>
               </div>
            </div>
        </header>
    )
}

export default Header
