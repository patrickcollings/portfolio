import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, paragraphFour, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                {/* <p className="about-wrapper__info-text">
                  <b>Yes</b>, this website is a template I found online.
                </p>
                <p className="about-wrapper__info-text">
                  <b>Yes</b>, design is not my strong point.
                </p>
                <p className="about-wrapper__info-text">
                  <b><i>No</i></b>, I do love building things. But there is no point re-inventing the wheel.
                </p> */}
                <p className="about-wrapper__info-text">
                  I'm a full-stack developer with 4+ years experience building websites, based in London UK.                 
                </p>
                <p className="about-wrapper__info-text">
                  I love to build things that people use. My proudest achievement is my product comparison platform (<a target="_blank" href="https://myaquariumbuilder.com">myaquariumbuilder.com</a>) that I designed, built and marketed over lockdown.                 
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
