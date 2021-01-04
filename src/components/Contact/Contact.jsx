import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact Me" />
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || ''}
            </p>
          </div>
      </Container>
    </section>
  );
};

export default Contact;
