import React from 'react';

const AboutUs = () => {
  const styles = {
    // Container style for content, centered on the page with space above
    container: {
      maxWidth: '1200px',
      margin: '150px auto',
      padding: '20px',
      backgroundColor: 'white',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      position: 'relative',
      zIndex: 1,
    },
    content: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '20px',
      flexWrap: 'wrap',
    },
    textContainer: {
      flex: '1',
      textAlign: 'left',
    },
    header: {
      fontSize: '36px',
      fontWeight: 'bold',
      color: '#2c2c54',
      marginBottom: '20px',
    },
    text: {
      fontSize: '16px',
      color: '#555',
      marginBottom: '20px',
      lineHeight: '1.6',
    },
    image: {
      flex: '1',
      maxWidth: '100%',
      height: 'auto',
      borderRadius: '8px',
    },
    button: {
      backgroundColor: '#4078c0',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      fontSize: '16px',
      fontWeight: 'bold',
      borderRadius: '5px',
      cursor: 'pointer',
      textDecoration: 'none',
    },
    buttonHover: {
      backgroundColor: '#305a91',
    },
    // Background style with soft gradient
    background: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      background: 'linear-gradient(to right, #f0f2f5, #d9e2ec)', // Match Dashboard gradient
      zIndex: -1,
    },
  };

  return (
    <div style={styles.background}>
      <div style={styles.container}>
        <div style={styles.content}>
          <div style={styles.textContainer}>
            <h1 style={styles.header}>ABOUT US</h1>
            <p style={styles.text}>
              At <b>PERSONALISED SUBSCRIPTION BOX GENERATOR</b>, we redefine the subscription box experience by putting personalization and sustainability at the forefront. Our innovative platform allows you to tailor subscription plans to suit your unique preferences and lifestyle, ensuring you get exactly what you need—nothing more, nothing less. By optimizing your subscription, we help you save money, reduce waste, and enjoy a seamless, user-friendly experience. Whether monthly or yearly, our flexible plans are designed to deliver value, convenience, and satisfaction every time. Join us in creating smarter, more sustainable subscriptions!
            </p>
            <button
              style={styles.button}
              onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
              onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
            >
              LEARN MORE
            </button>
          </div>
          <img
            src="https://www.mastroservices.com/assets/img/mastro-about/about-mastro.jpg"
            alt="About Us"
            style={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
