import React, { useState, useEffect } from 'react'; 
import { Card, CardBody, CardTitle, CardText, Container } from 'reactstrap';  

const styles = {
  container: {     
    background: 'linear-gradient(135deg, #2C3E50, #FD746C)',     
    minHeight: '100vh',      
    display: 'flex',      
    justifyContent: 'center',      
    alignItems: 'center',      
    textAlign: 'center',     
    padding: '50px 20px',     
    fontFamily: 'Arial, sans-serif'   
  },   
  card: {     
    backgroundColor: '#f7f7f7', 
    borderRadius: '15px',      
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',      
    padding: '40px',      
    maxWidth: '800px',      
    margin: '0 auto', 
    transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Hover efekti için geçiş ekledik
    width: '100%' // Kart genişliğini %100 yaparak mobilde daha iyi görünmesini sağladık
  },   
  cardHover: { // Hover sırasında uygulanacak stiller
    transform: 'scale(1.05)',      
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)'   
  },   
  cardTitle: {     
    fontSize: '2rem', // Font boyutunu duyarlı hale getirdik
    fontWeight: 'bold',      
    color: '#2C3E50',     
    marginBottom: '20px'   
  },   
  cardText: {     
    fontSize: '1rem', // Font boyutunu duyarlı hale getirdik
    color: '#555',     
    marginBottom: '30px'   
  },   
  cardImage: {   
    width: '100%',       
    maxWidth: '600px',      
    borderRadius: '15px',      
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',      
    marginTop: '20px',   
  },
  '@media (max-width: 768px)': { // Mobil cihazlar için özel stiller
    card: {
      padding: '20px', // Daha küçük padding
    },
    cardTitle: {
      fontSize: '1.6rem', // Daha küçük başlık
    },
    cardText: {
      fontSize: '0.9rem', // Daha küçük metin
    },
    cardImage: {
      maxWidth: '100%', // Görsel genişliğini tam ekran yap
    },
  }
};

function Home() {
  const [showGif, setShowGif] = useState(true);
  const [isHovered, setIsHovered] = useState(false); // Hover durumunu takip ediyoruz

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGif(false);
    }, 3100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={styles.container}>
      <Container>
        <div
          style={{
            ...styles.card, 
            ...(isHovered ? styles.cardHover : {}) // Hover durumuna göre stilleri birleştiriyoruz
          }}
          onMouseEnter={() => setIsHovered(true)} // Hover başladığında tetiklenir
          onMouseLeave={() => setIsHovered(false)} // Hover bittiğinde tetiklenir
        >
          <Card style={{ border: 'none' }}> {/* Reactstrap Card */}  
            <CardBody>
              <CardTitle style={styles.cardTitle}>
                Welcome to Delta-V
              </CardTitle>
              <CardText style={styles.cardText}>
                Delta-V is committed to bringing innovative technology solutions to life.
              </CardText>
              {showGif ? (
                <img
                  src="/animation.gif"
                  alt="Loading animation"
                  style={styles.cardImage}
                />
              ) : (
                <img
                  src="/delta.png"
                  alt="Static representation"
                  style={styles.cardImage}
                />
              )}
            </CardBody>
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default Home;
