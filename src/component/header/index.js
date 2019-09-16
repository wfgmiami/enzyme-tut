import React from 'react'
import './styles.scss';
import Logo from '../../assets/graphics/simple-logo.png';

const Header = (props) => {
  return (
    <header data-test="headerComponent">
      <div className="wrap">
        <div className="logo">
          <img data-test="logoIMG" src={Logo} alt="SimpleTut"/>
        </div>
      </div>
    </header>
  )
}

export default Header;

