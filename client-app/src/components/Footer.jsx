import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // FontAwesome ikonları

function Footer() {
  return (
    <footer style={footerStyle}>
      <Container>
        <Row>
          {/* Company Section */}
          <Col xs="12" sm="12" md="4" style={colStyle}>
            <h5 style={headingStyle}>Delta-V</h5>
            <p style={paragraphStyle}>
              Delta-V, teknoloji dünyasında yenilikçi çözümler sunarak sektördeki liderliğini sürdürmektedir. Müşterilerine güvenilir ve hızlı
              hizmet sunmayı hedefleyen bir teknoloji şirketidir.
            </p>
            <p style={contactStyle}>
              <strong>İletişim:</strong><br />
              Email: <a href="mailto:info@delta-v.com" style={linkStyle}>info@delta-v.com</a><br />
              Tel: +123 456 7890
            </p>
          </Col>
          
          {/* Quick Links Section */}
          <Col xs="12" sm="12" md="4" style={colStyle}>
            <h5 style={headingStyle}>Quick Links</h5>
            <ul style={ulStyle}>
              <li><a href="/" style={linkStyle}>Home</a></li>
              <li><a href="/getallproduct" style={linkStyle}>GetAllProduct</a></li>
              <li><a href="/getfirstproduct" style={linkStyle}>GetFirstProduct</a></li>
              <li><a href="/middleproduct" style={linkStyle}>MiddleProduct</a></li>
              <li><a href="/lastproduct" style={linkStyle}>LastProduct</a></li>
              <li><a href="/regularproduct" style={linkStyle}>RegularProduct</a></li>
            </ul>
          </Col>
          
          {/* Social Media Section */}
          <Col xs="12" sm="12" md="4" style={colStyle}>
            <h5 style={headingStyle}>Follow Us</h5>
            <div style={socialIconsStyle}>
              <a href="https://www.instagram.com/emremeralzn" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} color="#fff" />
              </a>
              <a href="https://www.linkedin.com/in/emre-meralsm/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} color="#fff" />
              </a>
            </div>
          </Col>
        </Row>
        
        {/* Copyright Section */}
        <Row style={footerBottomStyle}>
          <Col style={{ textAlign: 'center' }}>
            <p style={footerTextStyle}>
              &copy; 2024 Delta-V Technologies. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

// Inline style objelerini düzenledik
const footerStyle = {
  backgroundColor: '#121212',
  color: '#fff',
  padding: '40px 0',
  fontFamily: 'Arial, sans-serif',
  width: '100%',
  height: '100%',
  position: 'relative',
  bottom: '0',
};

const colStyle = {
  marginBottom: '20px',
};

const headingStyle = {
  fontWeight: 'bold',
  color: '#00aaff',
};

const paragraphStyle = {
  fontSize: '16px',
  lineHeight: '1.5',
};

const contactStyle = {
  fontSize: '14px',
};

const ulStyle = {
  listStyleType: 'none',
  paddingLeft: 0,
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
};

const socialIconsStyle = {
  display: 'flex',
  gap: '20px',
  justifyContent: 'center', // İkonları merkezde hizalar
  flexWrap: 'wrap', // Ekran küçükse ikonlar alt satıra geçer
};

const footerBottomStyle = {
  marginTop: '20px',
};

const footerTextStyle = {
  fontSize: '14px',
  color: '#aaa', // Daha az dikkat çekici bir renk
};

export default Footer;
