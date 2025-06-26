import React from 'react';

const Header = () => {
  return (
    <header>
      <div id="logoh" className="container-fluid">
        <div className="logo-container" style={{ width: '200px', height: '150px', overflow: 'hidden' }}>
          <img 
            src="https://download.logo.wine/logo/Indian_Space_Research_Organisation/Indian_Space_Research_Organisation-Logo.wine.png" 
            alt="isro logo" 
            style={{ 
              width: '100%',
              height: '100%',
              objectFit: 'contain'
            }}
          />
        </div>
        <h2 id="h2intro">
          Indian Space Research Organisation <br /> 
          भारतीय अंतरिक्ष अनुसंधान संगठन<br />
          भारत सरकार/Government of India
        </h2>
      </div>
    </header>
  );
};

export default Header; 