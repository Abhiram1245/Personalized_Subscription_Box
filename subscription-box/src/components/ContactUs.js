import React from 'react';

const ContactUs = () => {
  const styles = {
    container: {
      position: 'relative',
      width: '100%',
      height: '100vh',
      overflow: 'hidden',
    },
    image: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: -1,
    },
    overlay: {
      position: 'absolute',
      bottom: '20px',
      left: '20px',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    },
    section: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '10px',
      marginBottom: '15px',
    },
    icon: {
      fontSize: '24px',
      color: '#ff6b00',
    },
    header: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#333',
    },
    text: {
      fontSize: '14px',
      color: '#555',
    },
    contactContainer: {
      position: 'absolute',
      bottom: '20px',
      left: '45%',
      transform: 'translateX(-50%)',
      backgroundColor: '#f0f0f0',
      padding: '20px',
      borderRadius: '10px',
      width: '90%',
      maxWidth: '400px',
    },
    contactHeader: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#333',
      textAlign: 'center',
    },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '10px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      fontSize: '14px',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#ff6b00',
      color: '#fff',
      border: 'none',
      fontSize: '16px',
      fontWeight: 'bold',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#e65a00',
    },
    heading: {
      position: 'absolute',
      top: '60px',
      left: '50px',
      fontSize: '50px',
      fontWeight: 'bold',
      color: '#000', // Changed from gray to black
    },
  };

  return (
    <div style={styles.container}>
      {/* Background Image */}
      <img
        src="https://dcordimentions.com/wp-content/uploads/2023/06/fdfdd-min.png"
        alt="Contact Background"
        style={styles.image}
      />

      {/* Top-left Heading */}
      <h1 style={styles.heading}>CONTACT US</h1>

      {/* Info Overlay */}
      <div style={styles.overlay}>
        <div style={styles.section}>
          <i className="bx bxs-phone" style={styles.icon}></i>
          <div>
            <h2 style={styles.header}>CALL US</h2>
            <p style={styles.text}>(+91)8074072524</p>
          </div>
        </div>

        <div style={styles.section}>
          <i className="bx bxs-map" style={styles.icon}></i>
          <div>
            <h2 style={styles.header}>LOCATION</h2>
            <p style={styles.text}>121 Rock Street, 21 Avenue, Hitech City, Hyderabad</p>
          </div>
        </div>

        <div style={styles.section}>
          <i className="bx bxs-time-five" style={styles.icon}></i>
          <div>
            <h2 style={styles.header}>BUSINESS HOURS</h2>
            <p style={styles.text}>
              Mon – Fri: 10 am – 8 pm<br />
              Sat, Sun: Closed
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div style={styles.contactContainer}>
        <h2 style={styles.contactHeader}>CONTACT US</h2>
        <input type="text" placeholder="Enter your Name" style={styles.input} />
        <input type="email" placeholder="Enter a valid email address" style={styles.input} />
        <textarea placeholder="Your Message" rows="4" style={styles.input}></textarea>
        <button
          style={styles.button}
          onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
