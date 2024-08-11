import React, { useState } from 'react';
import logo from './Assets/logo.png'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const [hoveredButton, setHoveredButton] = useState(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const boxShadow = isHovered || isFocused ? '0 0 10px 0 rgba(0, 123, 255, 0.5)' : 'none';


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
    borderWidth: '2px', // Ensure the border is visible
  };
  

  const togglerIconStyle = {
    backgroundImage: 'url("data:image/svg+xml;charset=utf8,%3Csvg viewBox=\'0 0 30 30\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath stroke=\'%23EE4B2B\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' d=\'M4 7h22M4 15h22M4 23h22\'/%3E%3C/svg%3E")',
  };
  

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ borderBottom: '1px solid #ccc' }}>
      <div className="container-fluid">
        
        <Link to className="navbar-brand" href="/" style={{ color: '#EE4B2B', marginLeft: '15px' }}>
        <img src={logo}alt="logo" height={20} style={{paddingBottom:'5px'}}/>  
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
          <form className="d-flex mr-auto" style={{ position: 'relative' }}>
          <div className="input-group" style={{ width: '700px', marginLeft: '20px' }}>
              <input
                type="text"
                className="form-control"
                placeholder="Search Shopmeasure.in"
                aria-label="Search"
                aria-describedby="search-button"
                style={{ borderColor: '#ccc', flex: 1 }}/>

              <select
                className="form-select"
                style={{ borderColor: '#ccc', borderLeft: '1px solid #ccc', width: '220px', flex: '0 0 120px'}}>
                <option value="all">All</option>
                <option value="products">Products</option>
                <option value="categories">Categories</option>
              </select>

               <button
                  className="btn"
                  type="submit"
                  id="search-button"
                  style={{
                  border: '1px solid #ccc',
                  borderRadius: '0 0.25rem 0.25rem 0',
                  padding: '0.375rem 0.75rem',
                  borderLeft: 'none',
                  boxShadow: boxShadow,
                  transition: 'box-shadow 0.3s ease'}}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9 17.5C13.1421 17.5 16.5 13.8196 16.5 9.5C16.5 5.18045 13.1421 1.5 9 1.5C4.85786 1.5 1.5 5.18045 1.5 9.5C1.5 13.8196 4.85786 17.5 9 17.5Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"/>
                    <path d="M18.9999 18.9999L14.2999 14.2999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

            <div className="d-flex align-items-center" style={{ marginLeft: "200px",width:"50px" }}>
              <Link to ="/signin">
              <button
                style={hoveredButton === 'signIn' ? hoverStyle : buttonStyle}
                onMouseEnter={() => setHoveredButton('signIn')}
                onMouseLeave={() => setHoveredButton(null)}
              >
                Sign in
              </button>
              </Link>
            </div>

            <div className="d-flex align-items-center" style={{ marginLeft: "80px",width:"50px" }}>
              <Link to = "/signUp">
              <button
                style={hoveredButton === 'signUp' ? hoverStyle : buttonStyle}
                onMouseEnter={() => setHoveredButton('signUp')}
                onMouseLeave={() => setHoveredButton(null)}
              >
                Sign up
              </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}
