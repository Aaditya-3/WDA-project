import React from 'react';

const RecentUpdates = () => {
  return (
    <div id="aadityak" className="py-5">
      <div className="updates-container">
        <h1 id="first_heading" className="text-center mb-5">Recent Updates</h1>

        {/* Chandrayaan-3 Section */}
        <div className="content-section bg-white rounded shadow-sm mb-4">
          <div className="row align-items-center">
            <div className="col-md-4">
              <div className="update-image-container" style={{ height: '250px', overflow: 'hidden', backgroundColor: 'black', borderRadius: '8px' }}>
                <a href="https://www.isro.gov.in/Chandrayaan3_Details.html" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhDysadheSd_G4E8DPP_1NfZFnG_5OtO91Cw&s" 
                    alt="Chandrayan-3 Image" 
                    style={{ 
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </a>
              </div>
            </div>
            <div className="col-md-8">
              <div className="p-4">
                <h2 className="mb-3">Chandrayan-3</h2>
                <ul className="list-unstyled">
                  <li className="mb-2">• Landing Date: August 23, 2023</li>
                  <li className="mb-2">• Objective: Demonstrating a soft landing on the Moon and conducting in-situ scientific experiments.</li>
                  <li className="mb-2">• Significance: India became the first nation to land near the Moon's south pole.</li>
                  <li><a href="https://www.isro.gov.in/Chandrayaan3_Details.html" className="btn btn-outline-primary mt-2">Read More</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Aditya-L1 Section */}
        <div className="content-section bg-white rounded shadow-sm mb-4">
          <div className="row align-items-center">
            <div className="col-md-4">
              <div className="update-image-container" style={{ height: '250px', overflow: 'hidden', backgroundColor: 'black', borderRadius: '8px' }}>
                <a href="https://www.isro.gov.in/Aditya_L1-MissionDetails.html" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="https://static.toiimg.com/thumb/msid-102710694,width-400,resizemode-4/102710694.jpg" 
                    alt="Aditya L1 Image" 
                    style={{ 
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </a>
              </div>
            </div>
            <div className="col-md-8">
              <div className="p-4">
                <h2 className="mb-3">Aditya-L1 Mission</h2>
                <ul className="list-unstyled">
                  <li className="mb-2">• Launch Date: September 2, 2023</li>
                  <li className="mb-2">• Objective: To observe the Sun and study solar emissions and space weather.</li>
                  <li><a href="https://www.isro.gov.in/Aditya_L1-MissionDetails.html" className="btn btn-outline-primary mt-2">Read More</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Gaganyaan Section */}
        <div className="content-section bg-white rounded shadow-sm mb-4">
          <div className="row align-items-center">
            <div className="col-md-4">
              <div className="update-image-container" style={{ height: '250px', overflow: 'hidden', backgroundColor: 'black', borderRadius: '8px' }}>
                <a href="https://www.isro.gov.in/Gaganyaan.html" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="https://www.isro.gov.in/media_isro/image/TVD1/MRM_TD5.jpg.webp" 
                    alt="Gaganyaan Image" 
                    style={{ 
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </a>
              </div>
            </div>
            <div className="col-md-8">
              <div className="p-4">
                <h2 className="mb-3">Gaganyaan</h2>
                <ul className="list-unstyled">
                  <li className="mb-2">• Ambitious human spaceflight program aiming to send Indian astronauts into low Earth orbit.</li>
                  <li className="mb-2">• ISRO has conducted several tests, with the first uncrewed mission expected in 2024.</li>
                  <li><a href="https://www.isro.gov.in/Gaganyaan.html" className="btn btn-outline-primary mt-2">Read More</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Earth Observation Satellites Section */}
        <div className="content-section bg-white rounded shadow-sm mb-4">
          <div className="row align-items-center">
            <div className="col-md-4">
              <div className="update-image-container" style={{ height: '250px', overflow: 'hidden', backgroundColor: 'black', borderRadius: '8px' }}>
                <a href="https://www.isro.gov.in/mission_PSLV_C52_EOS_04.html" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTliJWK5V5eoW5zcpQFhM5aLiNbGYuvfaPsHw&s" 
                    alt="Earth Observation Satellite Image" 
                    style={{ 
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </a>
              </div>
            </div>
            <div className="col-md-8">
              <div className="p-4">
                <h2 className="mb-3">Earth Observation Satellites</h2>
                <ul className="list-unstyled">
                  <li className="mb-2">• EOS-04 launched in February 2022 focuses on agriculture and disaster management.</li>
                  <li className="mb-2">• ISRO is developing more satellites to improve Earth observation data.</li>
                  <li><a href="https://www.isro.gov.in/mission_PSLV_C52_EOS_04.html" className="btn btn-outline-primary mt-2">Read More</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Commercial Launches Section */}
        <div className="content-section bg-white rounded shadow-sm">
          <div className="row">
            <div className="col-12">
              <div className="p-4">
                <h2 className="mb-3">Commercial Launches</h2>
                <ul className="list-unstyled">
                  <li className="mb-2">• ISRO continues to launch satellites for international clients using PSLV and GSLV.</li>
                  <li className="mb-2">• With the rise of private ventures, ISRO is collaborating with private companies for satellite manufacturing and services.</li>
                  <li><a href="https://www.nsilindia.co.in/launch-services" className="btn btn-outline-primary mt-2">Read More</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RecentUpdates; 