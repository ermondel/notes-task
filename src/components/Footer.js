import React from 'react';
import { Container } from 'semantic-ui-react';

const Footer = () => {
  let footerYear = 2019;
  const currentYear = new Date().getFullYear();

  if (footerYear !== currentYear) {
    footerYear = `${footerYear} - ${currentYear}`;
  }

  return (
    <Container className='Footer'>
      <span className='years'>&copy; {footerYear}</span>{' '}
      <a
        href='https://github.com/ermondel'
        target='_blank'
        rel='noopener noreferrer'
        title='All rights reserved | created by Serhii (ermondel)'
        className='author'
      >
        Serhii
      </a>
    </Container>
  );
};

export default Footer;
