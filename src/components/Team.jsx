import React from 'react';

const Team = () => {
  return (
    <div className="abody">
      <hr />
      <div className="team-section">
        <br />
        <h1 className="ah1">Our Team</h1><br /><br />
        <div className="team-photo text-center">
          <a href="https://www.isro.gov.in/leadership.html" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://www.isro.gov.in/media_isro/image/press/pressrelease16.jpg.webp" 
              alt="ISRO Member" 
              className="img-fluid" 
              style={{ maxWidth: '100%', height: 'auto', maxHeight: '300px', objectFit: 'contain' }}
            />
          </a>
          <br /><br />
        </div>
        <div className="team-members">
          <div className="member">
            <a href="https://www.isro.gov.in/drksivan.html" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://www.oneindia.com/img/1200x80/2018/01/sivank-1-10-1515593324-10-1515604276.jpg" 
                alt="Dr. S Somanath, Chairman of ISRO" 
                className="profile-pic img-fluid" 
                style={{ maxHeight: '200px', objectFit: 'cover', width: '100%' }}
              />
            </a>
            <p className="position pteam" style={{ color: 'black' }}>Director</p>
            <h3 className="ah3">Dr. K Sivan</h3>
            <strong><p className="pteam">Former ISRO Chairman, key in the Chandrayaan 2 and Gaganyaan missions.</p></strong>
          </div>
          <div className="member">
            <a href="https://www.isro.gov.in/kirankumar.html" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://i.ytimg.com/vi/54EbKsTpN2Y/maxresdefault.jpg" 
                alt="Dr. K Sivan, Former Chairman of ISRO" 
                className="profile-pic img-fluid" 
                style={{ maxHeight: '200px', objectFit: 'cover', width: '100%' }}
              />
            </a>
            <h3 className="ah3">Shri AS Kiran Kumar</h3>
            <strong><p className="pteam">He is a highly accomplished space scientist and engineer.</p></strong>
          </div>
          <div className="member">
            <a href="https://www.isro.gov.in/Radhakrishnan.html" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://th.bing.com/th/id/OIP.CB8NTgE7l30bwEfqxSuCtAHaEX?rs=1&pid=ImgDetMain" 
                alt="Scientist" 
                className="profile-pic img-fluid" 
                style={{ maxHeight: '200px', objectFit: 'cover', width: '100%' }}
              />
            </a>
            <h3 className="ah3">Dr. K. Radhakrishnan</h3>
            <strong><p className="pteam">Former ISRO Chairman, key in the Chandrayaan 2 and Gaganyaan missions.</p></strong>
          </div>
        </div>
      </div>
      <div className="text-center mt-3">
        <a href="https://www.isro.gov.in/formerchairman.html" target="_blank" rel="noopener noreferrer" className="btn btn-link">More about our team....</a>
      </div>
      <hr />
      <br /><br /><br /><br />
    </div>
  );
};

export default Team; 