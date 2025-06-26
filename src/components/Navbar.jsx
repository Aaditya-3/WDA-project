import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ onLogout }) => {
  const location = useLocation();
  
  return (
    <div id="searchbarandmenu">
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/timeline" 
              className={location.pathname === '/timeline' ? 'active' : ''}
            >
              Timeline
            </Link>
          </li>
          <li>
            <Link 
              to="/team" 
              className={location.pathname === '/team' ? 'active' : ''}
            >
              Team
            </Link>
          </li>
          <li>
            <Link 
              to="/updates" 
              className={location.pathname === '/updates' ? 'active' : ''}
            >
              Updates
            </Link>
          </li>
          <li>
            <Link 
              to="/portals" 
              className={location.pathname === '/portals' ? 'active' : ''}
            >
              Portals
            </Link>
          </li>
          <li>
            <button 
              onClick={onLogout}
              className="logout-button"
            >
              Logout
            </button>
          </li>
        </ul>

        <div className="nsearch-container">
          <input type="checkbox" id="search-toggle" className="search-toggle" />
          <label htmlFor="search-toggle" className="search-btn">Search</label>
          <input type="text" className="search-input" placeholder="Type to search..." />
        </div>
      </nav>
    </div>
  );
};

export default Navbar; 