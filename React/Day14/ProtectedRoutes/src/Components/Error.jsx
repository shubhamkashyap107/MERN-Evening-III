import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f3f4f6',
    color: '#1f2937',
    textAlign: 'center',
    padding: '0 20px',
  };

  const codeStyle = {
    fontSize: '8rem',
    fontWeight: 'bold',
  };

  const titleStyle = {
    fontSize: '2rem',
    marginTop: '1rem',
  };

  const descStyle = {
    marginTop: '0.5rem',
    color: '#6b7280',
  };

  const buttonStyle = {
    marginTop: '2rem',
    padding: '0.75rem 2rem',
    backgroundColor: '#3b82f6',
    color: '#fff',
    borderRadius: '0.5rem',
    textDecoration: 'none',
    fontWeight: 'bold',
  };

  const buttonHoverStyle = {
    backgroundColor: '#2563eb',
  };

  return (
    <div style={containerStyle}>
      <div style={codeStyle}>404</div>
      <div style={titleStyle}>Oops! Page not found.</div>
      <div style={descStyle}>
        The page you are looking for does not exist.
      </div>
      <Link
        to="/"
        style={buttonStyle}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#2563eb')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#3b82f6')}
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
