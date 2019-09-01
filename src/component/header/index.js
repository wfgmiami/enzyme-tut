import React from 'react'
import './styles.scss';
import Logo from '../../assets/graphics/simple-logo.png';

const Header = (props) => {
  return (
    <header>
      <div className="wrap">
        <div className="logo">
          <img src={Logo} alt="SimpleTut"/>
        </div>
      </div>
    </header>
  )
}

export default Header;
