import React from 'react';
import Form from './Form.js';

const Footer = (props) => {
  const styles = {
    backgroundColor: 'peony',
    fontFamily: 'Roboto Slab',
  };
  const formStyles = {
    fontFamily: 'Train One',
  };

  return (
    <div className='footer' style={styles}>
      Add New User:
      <Form style={formStyles} />
    </div>
  );
};
export default Footer;
