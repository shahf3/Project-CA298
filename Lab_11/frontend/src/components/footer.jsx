import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>&copy; 2023 University System</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#212529',
    color: '#fff',
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    padding: '20px',
    textAlign: 'center',
    borderTop: '1px solid #E7E7E7',
  },
  text: {
    fontSize: '14px',
  },
};

export default Footer;
