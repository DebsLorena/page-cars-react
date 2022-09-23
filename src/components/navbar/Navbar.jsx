import React, {useState} from 'react'
import { FaBars, FaFacebook, FaTimes, FaInstagram } from 'react-icons/fa'
import { GiCarWheel } from 'react-icons/gi'
import './NavbarStyle.css'
import { Link } from 'react-scroll'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [slide, setSlide] = useState(false)


    const handleNav = () => {
        setNav(!nav)
        setSlide(!slide)
    }

    const handleClose = () => {
        setNav(!nav)
    }

    return (
        <div className='navbar'>
            <div className="container">
                <div className={slide ? 'logo slide-right' : 'logo'}>
                    <h3>Benazio.</h3>
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><a href="/"><Link onClick={handleClose} activeClass="active" to="power" spy={true} smooth={true} duration={500}>Power</Link></a></li>
                    <li><a href="/"><Link onClick={handleClose} activeClass="active" to="speed" spy={true} smooth={true} duration={500}>Speed</Link></a></li>
                    <li><a href="/"><Link onClick={handleClose} activeClass="active" to="handling" spy={true} smooth={true} duration={500}>Handling</Link></a></li>
                    <li><a href="/"><Link onClick={handleClose} activeClass="active" to="options" spy={true} smooth={true} duration={500}>Options</Link></a></li>
                    <li><a href="/"><Link onClikl={handleClose} activeClass="active" to="contact" spy={true} smooth={true} duration={500}>Contact</Link></a></li>

                    <div className="mobile-menu">
                        <button>Shop</button>
                        <button>Account</button>
                        <div className="social-icons">
                            <FaFacebook className='icons'/>
                            <FaInstagram className='icons' />
                            <GiCarWheel className='icons'/>

                        </div>
                    
                    </div>


                </ul>
                <ul className="nav-menu hide">
                    <li><a href="">Shop</a></li>
                    <li><a href="">Account</a></li>
                </ul>

                <div className="hamburger" onClick={handleNav} >
                    {nav ? (<FaTimes size={20} style={{color: '#f6f6f6'}} />) : (<FaBars size={20} style={{color: ' #f6f6f6'}} />)}
                </div>

            </div>
        </div>
    );
}

export default Navbar;
