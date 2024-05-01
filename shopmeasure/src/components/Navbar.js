import React from 'react';

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#232f3e' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/" style={{ border: '1px solid #ccc', whiteSpace: 'pre-line', padding: '10px' }}>
          Shopemeasure
        </a>

        <div className="nav-left d-flex flex-column align-items-start">
          <a id="nav-global-location-popover-link" className="nav-a nav-a-2 a-popover-trigger a-declarative nav-progressive-attribute" tabIndex="0" style={{ textDecoration: 'none' }}>
            <div className="nav-sprite nav-progressive-attribute" id="nav-packard-glow-loc-icon"></div>
            <div id="glow-ingress-block" className="d-flex flex-column">
              <div className="location-box" style={{ border: '1px solid #ccc', whiteSpace: 'pre-line', color: 'white' }}>
                Delivering to Kolkata 700019 <br /><img src="/location.png" alt="Red Location Icon" style={{ width: '25px', color: 'red' }}/>
                Update location
              </div>
            </div>
          </a>
        </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ marginLeft: '12px' }}>
          <form className="d-flex mr-auto" style={{ position: 'relative', width: '70%' }}>
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search Shopmeasure.in" aria-label="Search" aria-describedby="search-button" />
              <select className="form-select" style={{ width: '150px !important' }}>
                <option value="all">All</option>
                <option value="products">Products</option>
                <option value="categories">Categories</option>
              </select>
              <button className="btn btn-outline-light" type="submit" id="search-button">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 17.5C13.1421 17.5 16.5 13.8196 16.5 9.5C16.5 5.18045 13.1421 1.5 9 1.5C4.85786 1.5 1.5 5.18045 1.5 9.5C1.5 13.8196 4.85786 17.5 9 17.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18.9999 18.9999L14.2999 14.2999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </form>
          
          {/* Language Preference Box */}
        <div className="d-flex align-items-center">
          <form className="d-flex mr-auto" style={{ position: 'relative', width: '70%' }}>
               {/* Your search box code */}
          </form>

          <div className="language-dropdown" style={{ marginLeft: '0px' }}>
              <select id="language-select" className="form-select">
                  <option value="select-language">Select Language</option>
                  <option value="english">English</option>
                  <option value="spanish">Spanish</option>
              </select>
          </div>
        </div>


        </div>
      </div>
    </nav>
  );
}
