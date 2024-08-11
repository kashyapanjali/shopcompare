import React, { useState } from 'react';
import logo from './Assets/logo.png';
import { Link } from 'react-router-dom';

export default function Home(props) {
  const [hoveredButton, setHoveredButton] = useState(null);

  const buttonStyle = {
    width: '120px',
    backgroundColor: 'white',
    color: '#EE4B2B',
    border: '1px solid #ccc',
    padding: '0.375rem 0.75rem',
    borderRadius: '0.25rem',
  };

  const hoverStyle = {
    ...buttonStyle,
    backgroundColor: '#EE4B2B',
    color: 'white',
    border: 'none',
  };

  const togglerButtonStyle = {
    borderColor: '#EE4B2B',
    borderWidth: '2px',
  };

  const togglerIconStyle = {
    backgroundImage: 'url("data:image/svg+xml;charset=utf8,%3Csvg viewBox=\'0 0 30 30\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath stroke=\'%23EE4B2B\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' d=\'M4 7h22M4 15h22M4 23h22\'/%3E%3C/svg%3E")',
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ borderBottom: '1px solid #ccc' }}>
      <div className="container-fluid">
        <Link to className="navbar-brand" href="/" style={{ color: '#EE4B2B', marginLeft: '15px' }}>
          <img src={logo} alt="logo" height={20} style={{ paddingBottom: '5px' }} />
          ShopMeasure
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={togglerButtonStyle}
        >
          <span className="navbar-toggler-icon" style={togglerIconStyle}></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="ms-auto d-flex align-items-center">
            <select id="language-select" className="form-select me-2" style={{ borderColor: '#ccc' }}>
              <option value="select-language">Language</option>
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
            </select>

            <Link to="/signin" style={{marginLeft:'10px'}}>
              <button
                style={hoveredButton === 'signIn' ? hoverStyle : buttonStyle}
                onMouseEnter={() => setHoveredButton('signIn')}
                onMouseLeave={() => setHoveredButton(null)}
              >
                Sign in
              </button>
            </Link>

            <Link to="/signup" className="me-2 my-2"style={{marginLeft:'20px'}}>
              <button
                style={hoveredButton === 'signUp' ? hoverStyle : buttonStyle}
                onMouseEnter={() => setHoveredButton('signUp')}
                onMouseLeave={() => setHoveredButton(null)}
              >
                Sign up
              </button>
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}
