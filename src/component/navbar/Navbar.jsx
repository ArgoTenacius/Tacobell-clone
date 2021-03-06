import React, {useState} from 'react';
import Logo from './NavbarImages/ColorLogo.webp'
import Delivery from './NavbarImages/Delivery.webp'
import Instagram from './NavbarImages/Instagram.webp'
import Marker from './NavbarImages/Marker.webp'
import Twitter from './NavbarImages/Twitter.webp'
import Facebook from './NavbarImages/Facebook.webp'
import WhiteLogo from './NavbarImages/WhiteLogo.webp'
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './navbar.css'

const Menu = () => (
  <>
    <li className='Navbar__item'><a>OUR FOOD</a></li>
    <li className='Navbar__item'><a>FIND US</a></li>
    <li className='Navbar__item'><a>NUTRITION</a></li>
    <li className='Navbar__item'><a>ABOUT US</a></li>
    <li className='Navbar__item'><a>WHAT'S NEW</a></li>
    <li className='Navbar__item'><a>MORE+</a></li>
  </>
)

const Contact = () => (
  <>
    <li className='Navbar__links'> <a href=""> <img src={Facebook}/> </a></li>
    <li className='Navbar__links'> <a href=""> <img src={Instagram}/> </a></li>
    <li className='Navbar__links'> <a href=""> <img src={Twitter}/> </a></li>
    <li className='Navbar__links'> <a href=""> <img src={Delivery}/></a></li>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='Navbar__div'>
      <div className='Navbar__menu'>
        {toggleMenu 
          ? <div className='Navbar__responsive-menu'>
              <RiCloseLine color="#fff" size={48} onClick={() => setToggleMenu(false)} />
              <ul className='Navbar__responsive-menu-list'>
                <Menu />
              </ul>
              <ul className='Navbar__contact'>
                <li className='Navbar__links'> <a href=""> <img src={Facebook}/> </a></li>
                <li className='Navbar__links'> <a href=""> <img src={Instagram}/> </a></li>
                <li className='Navbar__links'> <a href=""> <img src={Twitter}/> </a></li>
                <li className='Navbar__links'> <a href=""> <img src={Delivery}/></a></li>
              </ul>
            </div>
          : 
          <div className='Navbar__div'>
            <RiMenu3Line color="#fff" size={48} onClick={() => setToggleMenu(true)} />
            <img src={WhiteLogo}/>
            <img src={Marker}/>
          </div>
        }
        {toggleMenu && (
          <div className='Navbar__menu-container'> 
            <div className='Navbar__menu-container-links'></div>
          </div>
        )}
      </div>
      <div className='Navbar__content'>
        <img src={Logo} alt='tacobell-logo' className='Navbar__logo'/>
        <ul className='Navbar__list'>
            <Menu />
        </ul>
        <ul className='Navbar__contact'>
          <Contact />
        </ul>
      </div>
    </div>
    )
};

export default Navbar;