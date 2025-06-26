import React from 'react';

const About = () => {
  return (
    <div className="about-container w-100">
      <div className="hero-section w-100">
        <div className="slideshow w-100" style={{ 
          height: '600px',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#f7f8fa'
        }}>
          <img 
            src="https://thedailyguardian.com/wp-content/uploads/2023/12/1-ISRO-5-2.jpg" 
            alt="ISRO" 
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              opacity: 0,
              animation: 'slideshow 24s infinite'
            }}
          />
          <img 
            src="https://img.ap7am.com/bimg/cr-20230823en64e648d8b1afb.jpg" 
            alt="Chandrayaan-3" 
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              opacity: 0,
              animation: 'slideshow 24s infinite',
              animationDelay: '6s'
            }}
          />
          <img 
            src="https://static.theprint.in/wp-content/uploads/2023/08/Modi-at-ISRO.jpg" 
            alt="PM at ISRO" 
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              opacity: 0,
              animation: 'slideshow 24s infinite',
              animationDelay: '12s'
            }}
          />
          <img 
            src="https://temples.vibhaga.com/wp-content/uploads/2020/09/SHAR_Entrance-e1575983012353.jpg" 
            alt="SHAR Center" 
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              opacity: 0,
              animation: 'slideshow 24s infinite',
              animationDelay: '18s'
            }}
          />
        </div>
      </div>

      <div className="content-section w-100" style={{ color: '#23272b' }}>
        <h1 className="text-center mb-4">About ISRO</h1>
        
        <div className="about-content w-100">
          <h2>Overview</h2>
          <p>The Indian Space Research Organisation (ISRO) is the national space agency of India, headquartered in Bengaluru. Formed in 1969, ISRO superseded the erstwhile INCOSPAR with a vision to harness space technology for national development.</p>

          <h2 className="mt-4">Vision</h2>
          <p>"Harness space technology for national development while pursuing space science research and planetary exploration."</p>

          <h2 className="mt-4">Major Objectives</h2>
          <ul className="objectives-list">
            <li>Design and development of launch vehicles and related technologies for providing access to space.</li>
            <li>Design and development of satellites and related technologies for Earth observation, communication, navigation, meteorology, and space science.</li>
            <li>Development of indigenous capability in space technology for national development.</li>
            <li>Promotion of space research and planetary exploration.</li>
            <li>Application of space technology for societal benefits.</li>
          </ul>

          <h2 className="mt-4">Recent Achievements</h2>
          <ul className="achievements-list">
            <li>Successfully landed Chandrayaan-3 on the Moon's South Pole (2023)</li>
            <li>Launched Aditya-L1, India's first solar mission (2023)</li>
            <li>Successful development and deployment of NavIC, India's indigenous navigation system</li>
            <li>Mars Orbiter Mission (Mangalyaan) - First Asian nation to reach Mars orbit</li>
          </ul>

          <h2 className="mt-4">Centers and Facilities</h2>
          <div className="centers-grid">
            <div className="center-item">
              <h3>VSSC</h3>
              <p>Vikram Sarabhai Space Centre - The lead center for launch vehicle development</p>
            </div>
            <div className="center-item">
              <h3>SDSC SHAR</h3>
              <p>Satish Dhawan Space Centre - The spaceport of India</p>
            </div>
            <div className="center-item">
              <h3>URSC</h3>
              <p>U R Rao Satellite Centre - The lead center for satellite development</p>
            </div>
            <div className="center-item">
              <h3>SAC</h3>
              <p>Space Applications Centre - Focus on space applications and instrumentation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 