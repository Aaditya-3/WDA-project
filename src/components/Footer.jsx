import React from 'react';

const Footer = () => {
  return (
    <div className="container-fluid p-0">
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
      <footer className="footer-modern position-relative" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <style>{`
          .footer-modern {
            background: linear-gradient(135deg, #232526 0%, #414345 100%);
            color: #fff;
            padding: 0;
          }
          .footer-card {
            background: rgba(255,255,255,0.03);
            border-radius: 18px;
            box-shadow: 0 4px 24px 0 rgba(0,0,0,0.12);
            padding: 2rem 1.2rem 1.5rem 1.2rem;
            margin-bottom: 2rem;
            min-height: 270px;
            transition: box-shadow 0.2s;
          }
          .footer-card:hover {
            box-shadow: 0 8px 32px 0 rgba(0,0,0,0.18);
          }
          .footer-title {
            color: #FFD700;
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 0.7rem;
            letter-spacing: 1px;
          }
          .footer-quote {
            color: #b3e5fc;
            font-size: 1.1rem;
            font-style: italic;
            margin-bottom: 0.7rem;
          }
          .footer-link, .footer-link:visited {
            color: #ffb74d !important;
            font-size: 1.08rem;
            font-weight: 500;
            transition: color 0.2s;
          }
          .footer-link:hover {
            color: #FFD700 !important;
            text-decoration: underline;
          }
          .footer-contact-icon {
            color: #b3e5fc;
            margin-right: 0.5rem;
            font-size: 1.1rem;
          }
          .footer-social {
            display: flex;
            gap: 1.1rem;
            margin-top: 1.2rem;
            justify-content: flex-start;
          }
          .footer-social a img {
            height: 32px;
            filter: grayscale(0.2) brightness(1.1);
            transition: filter 0.2s, transform 0.2s;
            border-radius: 50%;
          }
          .footer-social a img:hover {
            filter: grayscale(0) brightness(1.3);
            transform: scale(1.12);
            box-shadow: 0 2px 8px #FFD70044;
          }
          .footer-location-title {
            color: #FFD700;
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 0.7rem;
          }
          .footer-small {
            color: #bdbdbd;
            font-size: 0.97rem;
          }
          .footer-bottom {
            background: rgba(35,39,43,0.95);
            border-radius: 0 0 18px 18px;
            padding: 1.2rem 0 0.7rem 0;
            margin-top: 0.5rem;
            box-shadow: 0 -2px 12px 0 rgba(0,0,0,0.08);
          }
          .footer-divider {
            border-top: 1px solid #444857;
            margin: 0.5rem 0 1.2rem 0;
          }
          @media (max-width: 991.98px) {
            .footer-card {
              min-height: unset;
              margin-bottom: 1.5rem;
            }
            .footer-social {
              justify-content: center;
            }
          }
          @media (max-width: 767.98px) {
            .footer-card {
              padding: 1.2rem 0.7rem 1.2rem 0.7rem;
            }
            .footer-title {
              font-size: 1.2rem;
            }
            .footer-location-title {
              font-size: 1.05rem;
            }
          }
        `}</style>
        <div className="container py-5">
          <div className="row g-4 justify-content-center">
            {/* Logo & Quote */}
            <div className="col-12 col-md-6 col-lg-3 d-flex align-items-stretch">
              <div className="footer-card w-100 text-center text-lg-start d-flex flex-column align-items-center align-items-lg-start justify-content-center">
                <img src="https://ih1.redbubble.net/image.2582415602.7985/raf,360x360,075,t,fafafa:ca443f4786.jpg" alt="ISRO" className="img-fluid mb-3" style={{ maxWidth: '110px', borderRadius: '12px', boxShadow: '0 2px 12px #0002' }} />
                <div className="footer-title">ISRO</div>
                <div className="footer-quote">"Success is not about how high you fly,<br /> but how far your impact reaches – just like ISRO."</div>
              </div>
            </div>

            {/* Address & Contact */}
            <div className="col-12 col-md-6 col-lg-3 d-flex align-items-stretch">
              <div className="footer-card w-100 text-center text-lg-start d-flex flex-column align-items-center align-items-lg-start justify-content-center">
                <div className="footer-title mb-2">Address</div>
                <div className="footer-small mb-2">
                  <span style={{ display: 'inline-block', marginRight: 6 }}>🏢</span>
                  ISRO Headquarters <br />
                  Antariksh Bhavan, New BEL Road <br />
                  Bengaluru-560 094 <br />
                  Karnataka
                </div>
                <div className="footer-divider w-100" />
                <div className="footer-title mb-2">Contact</div>
                <div className="footer-small mb-2">
                  <span className="footer-contact-icon">📞</span>+91 80 22172294 / 96<br />
                  <span className="footer-contact-icon">✉️</span>cio@isro.gov.in<br />
                  <span className="footer-contact-icon">📞</span>+91 80 22172119<br />
                  <span className="footer-contact-icon">✉️</span>isropr@isro.gov.in
                </div>
                <a href="https://www.isro.gov.in/contact.html" className="footer-link text-decoration-none d-inline-flex align-items-center gap-2 small mt-2">
                  <img src="https://static.vecteezy.com/system/resources/thumbnails/008/506/403/small/telephone-contact-icon-in-black-circle-shape-free-png.png" alt="contact" style={{ height: '22px' }} />
                  Contact us
                </a>
              </div>
            </div>

            {/* Links & Social */}
            <div className="col-12 col-md-6 col-lg-3 d-flex align-items-stretch">
              <div className="footer-card w-100 text-center text-lg-end d-flex flex-column align-items-center align-items-lg-end justify-content-center">
                <div className="footer-title mb-2">Quick Links</div>
                <ul className="list-unstyled mb-3 w-100">
                  <li className="mb-2"><a href="https://www.isro.gov.in/RTI.html" className="footer-link text-decoration-none"><span style={{marginRight:6}}>🔗</span>RTI</a></li>
                  <li className="mb-2"><a href="https://www.isro.gov.in/FAQ.html" className="footer-link text-decoration-none"><span style={{marginRight:6}}>❓</span>FAQ</a></li>
                  <li className="mb-2"><a href="https://www.isro.gov.in/Website_Policy.html" className="footer-link text-decoration-none"><span style={{marginRight:6}}>📄</span>Website Policy</a></li>
                  <li className="mb-2"><a href="https://www.isro.gov.in/Copyright_Policy.html" className="footer-link text-decoration-none"><span style={{marginRight:6}}>©️</span>Copyright Policy</a></li>
                  <li className="mb-2"><a href="https://www.isro.gov.in/IndiaSpacePolicy.html" className="footer-link text-decoration-none"><span style={{marginRight:6}}>🚀</span>Space Policy</a></li>
                  <li className="mb-2"><a href="https://www.isro.gov.in/Related_Links.html" className="footer-link text-decoration-none"><span style={{marginRight:6}}>🌐</span>Related links</a></li>
                  <li className="mb-2"><a href="https://www.isro.gov.in/Help.html" className="footer-link text-decoration-none"><span style={{marginRight:6}}>🆘</span>Help</a></li>
                </ul>
                <div className="footer-social">
                  <a href="https://www.instagram.com/isro.dos/?hl=en" target="_blank" rel="noopener noreferrer">
                    <img src="https://wbom.ca/newWP/wp-content/uploads/2016/11/White-Instagram-Logo.png?w=640" alt="Instagram Logo" />
                  </a>
                  <a href="https://www.facebook.com/ISRO/" target="_blank" rel="noopener noreferrer">
                    <img src="https://www.pngarts.com/files/10/Facebook-Logo-Black-And-White-PNG-Pic.png" alt="Facebook Logo" />
                  </a>
                  <a href="https://twitter.com/isro" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.freepik.com/premium-vector/vector-new-twitter-x-white-logo-black-background_744381-866.jpg" alt="Twitter" />
                  </a>
                  <a href="https://in.linkedin.com/company/officialisro" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/ios7/600/FFFFFF/linkedin.png" alt="LinkedIn" />
                  </a>
                </div>
              </div>
            </div>

            {/* Location & Map */}
            <div className="col-12 col-md-6 col-lg-3 d-flex align-items-stretch">
              <div className="footer-card w-100 text-center text-lg-end d-flex flex-column align-items-center align-items-lg-end justify-content-center">
                <div className="footer-location-title mb-2">Our Location</div>
                <div className="mb-3 ratio ratio-16x9 w-100" style={{ borderRadius: '10px', overflow: 'hidden', boxShadow: '0 2px 8px #0002' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102519.85756391869!2d77.42680504335938!3d13.035110299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17e7a949cae9%3A0x8397364610ef2771!2sIndian%20Space%20Research%20Organisation!5e1!3m2!1sen!2sin!4v1728500682226!5m2!1sen!2sin"
                    className="w-100 h-100"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="ISRO Location"
                  />
                </div>
                <small className="footer-small">© 2024 ISRO. All rights reserved.</small>
                <p className="footer-small mt-2 mb-0">
                  Last updated on: <br />
                  {new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container text-center footer-bottom">
          <div className="row">
            <div className="col-12">
              <p className="footer-small mb-0">
                <a href="#" className="footer-link text-decoration-none mx-2">Contact</a>
                <a href="#" className="footer-link text-decoration-none mx-2">Privacy Policy</a>
              </p>
              <p className="footer-small mb-0">©2024 ISRO. All Rights Reserved.</p>
              <p className="footer-small">Designed by SkyWard Devs</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer; 