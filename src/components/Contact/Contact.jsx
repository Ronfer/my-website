import React, { useContext } from 'react';
import styled from 'styled-components';
// import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';
import Button from '../Button/Button';

const Contact = () => {

  return (
    <ContactWrapper id='contact'>
      <Container>
        <Title title="Contact Me" />
          <div className='content-container container'>
            <div className="screen-header">
              <form name='contact' netlify>
                <div className='input-area'>
                  <input
                    type='text'
                    name='name'
                    aria-label='Name'
                    required
                    autoComplete='off'
                  />
                  <label className='label-name' for='name'>
                    <span className='content-name'>Name</span>
                  </label>
                </div>

                <div className='input-area'>
                  <input
                    type='email'
                    name='email'
                    aria-label='Email'
                    required
                    autoComplete='off'
                  />
                  <label className='label-name' for='email'>
                    <span className='content-name'>Email</span>
                  </label>
                </div>

                <div className='input-area'>
                  <textarea
                    type='text'
                    name='message'
                    rows='5'
                    required
                    autoComplete='off'
                    aria-label='Message'
                  />
                  <label className='label-name' for='message'>
                    <span className='content-name'>Message</span>
                  </label>
                </div>

                <div className='input-area button-area'>
                  {/* <Button label='Send Contact Form' cta='Send' type='submit' /> */}
                </div>
              </form>
            </div>
            <Button label='Send Contact Form' cta='Send' type='submit' />
          </div>
      </Container>
    </ContactWrapper>
  );
};

const ContactWrapper = styled.section`
  padding: 100px 30px;

  #first {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }

  #last {
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }
  .screen-header {
  align-items: center;
  padding: 20px 20px;
  background: #4d4d4f;
  border-radius: 15px;
}
  .content-container {
    width: 100%;
    margin: 0 auto;
    h2 {
      text-align: left;
      background: -webkit-linear-gradient(45deg, #f441a5, #03a9f4);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      @media (min-width: 768px) {
        text-align: center;
      }
    }
    p {
      margin-bottom: 2rem;
      @media (min-width: 768px) {
        text-align: center;
      }
    }
    form {
      position: relative;
      overflow: hidden;
      .input-area {
        margin-bottom: 1px;
        position: relative;
        &.button-area {
          text-align: center;
          margin-bottom: 0;
        }
      }
      input,
      textarea {
        height: 100%;
        font-size: 1rem;
        letter-spacing: 0.25rem;
        padding: 20px;
        display: block;
        width: 100% !important;
        border: none;
        background-color: #686767;
        color: #fff;
        text-transform: uppercase;
        position: relative;
        box-sizing: border-box;
        outline: none;
        &:focus,
        &:valid {
          + .label-name {
            .content-name {
              transform: translateY(-25%);
              font-size: 0.7rem;
              opacity: 0.2;
            }
            &::after {
              transform: translateX(0%);
            }
          }
        }
      }
      label {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        pointer-events: none;
        &::after {
          content: '';
          position: absolute;
          left: 0px;
          bottom: -1px;
          height: 1px;
          background: linear-gradient(90deg, white, #f4c97b, #c2a165);
          width: 100%;
          transform: translateX(-100%);
          transition: transform 0.3s ease;
        }
      }
      .content-name {
        position: absolute;
        top: 10px;
        left: 20px;
        transition: all 0.3s ease;
        text-transform: uppercase;
        letter-spacing: 0.25rem;
        font-size: 0.8rem;
      }
    }
  }
`;

export default Contact;

