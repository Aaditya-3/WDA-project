import React from 'react';

const Portal = () => {
  return (
    <div className="portal-section" style={{ backgroundColor: 'rgb(9, 3, 68)', padding: '3rem 0' }}>
      <div className="container">
        <h1 className="text-center text-white mb-5">ISRO Portals</h1>
        <div className="row g-4 justify-content-center">
          <div className="col-6 col-md-4 col-lg-2">
            <div className="portal-item text-center">
              <a href="https://igrasp.isro.gov.in/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                <div className="portal-image mb-3" style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  padding: '15px',
                  height: '120px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <img 
                    src="https://www.isro.gov.in/media_isro/image/hormenu/igrasp.png.webp" 
                    alt="IGRASP" 
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                  />
                </div>
                <h5 className="text-white mb-0">IGRASP</h5>
              </a>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <div className="portal-item text-center">
              <a href="https://jigyasa.iirs.gov.in/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                <div className="portal-image mb-3" style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  padding: '15px',
                  height: '120px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <img 
                    src="https://www.isro.gov.in/media_isro/image/hormenu/stem.png.webp" 
                    alt="STEM" 
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                  />
                </div>
                <h5 className="text-white mb-0">STEM</h5>
              </a>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <div className="portal-item text-center">
              <a href="https://www.isro.gov.in/Virtual_Space_Museum.html" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                <div className="portal-image mb-3" style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  padding: '15px',
                  height: '120px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <img 
                    src="https://www.isro.gov.in/media_isro/image/hormenu/spark.png.webp" 
                    alt="SPARK" 
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                  />
                </div>
                <h5 className="text-white mb-0">SPARK</h5>
              </a>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <div className="portal-item text-center">
              <a href="https://www.isro.gov.in/MOSDAC.html" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                <div className="portal-image mb-3" style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  padding: '15px',
                  height: '120px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <img 
                    src="https://www.isro.gov.in/media_isro/image/hormenu/mosdac.jpg.webp" 
                    alt="MOSDAC" 
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                  />
                </div>
                <h5 className="text-white mb-0">MOSDAC</h5>
              </a>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <div className="portal-item text-center">
              <a href="https://www.issdc.gov.in/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                <div className="portal-image mb-3" style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  padding: '15px',
                  height: '120px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <img 
                    src="https://www.isro.gov.in/media_isro/image/hormenu/issdc.png.webp" 
                    alt="ISSDC" 
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                  />
                </div>
                <h5 className="text-white mb-0">ISSDC</h5>
              </a>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <div className="portal-item text-center">
              <a href="https://bhoonidhi.nrsc.gov.in/bhoonidhi/home.html" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                <div className="portal-image mb-3" style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  padding: '15px',
                  height: '120px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <img 
                    src="https://www.isro.gov.in/media_isro/image/hormenu/bhoonidhi.png.webp" 
                    alt="BHOONIDHI" 
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                  />
                </div>
                <h5 className="text-white mb-0">BHOONIDHI</h5>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portal; 