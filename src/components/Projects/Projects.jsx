import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Card, Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const Projects = ({isExperiences}) => {
  let data = [];
  if (isExperiences) {
    const { experiences } = useContext(PortfolioContext);
    data = experiences;
  } else {
    const { projects } = useContext(PortfolioContext);
    data = projects;
  }

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
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title={isExperiences ? "Experience" : "Projects"} />
          {data.map((project) => {
            const { company, title, info, info2, info3, info4, url, repo, img, id, startDate, endDate, companyDescription, technologies } = project;

            return (
              <Card style={{marginBottom: '5rem'}}>
                <Card.Body>
                  <Row key={id}>
                  <Col lg={8} sm={12}>
                    <Fade
                      left={isDesktop}
                      bottom={isMobile}
                      duration={1000}
                      delay={500}
                      distance="30px"
                    >
                      <div className="project-wrapper__text">
                        <h3 className="project-wrapper__text-title">{title} <span className="project-wrapper__text-company">{ company ? `@${company}` : '' }</span></h3>
                        <h4 className="project-wrapper__text-subtitle">{startDate} - {endDate}</h4>
                        <div>
                          <p stle={{color: '#01c1ae'}}><i>{companyDescription}</i></p>
                          <p>
                            {info}
                          </p>
                          <p className="mb-4">{info2 || ''}</p>
                          <p className="mb-4">{info3 || ''}</p>
                          <p className="mb-4">{info4 || ''}</p>
                        </div>
                        {url && (
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-btn cta-btn--hero"
                            href={url || '#!'}
                          >
                            Visit Website
                          </a>
                        )}

                        {repo && !isExperiences && (
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-btn text-color-main"
                            href={repo}
                          >
                            Source Code
                          </a>
                        )}
                      </div>
                    </Fade>
                  </Col>
                  <Col lg={4} sm={12}>
                    <Fade
                      right={isDesktop}
                      bottom={isMobile}
                      duration={1000}
                      delay={1000}
                      distance="30px"
                    >
                      <div className="project-wrapper__right-side">
                        <div className="project-wrapper__image">
                          <div className="project-wrapper__right-side-logo">
                            <a
                              href={url || '#!'}
                              target="_blank"
                              aria-label="Project Link"
                              rel="noopener noreferrer"
                            >
                              <Tilt
                                options={{
                                  reverse: false,
                                  max: 8,
                                  perspective: 1000,
                                  scale: 1,
                                  speed: 300,
                                  transition: true,
                                  axis: null,
                                  reset: true,
                                  easing: 'cubic-bezier(.03,.98,.52,.99)',
                                }}
                              >
                                <div data-tilt className="logo rounded">
                                  <ProjectImg alt={title} filename={img} />
                                </div>
                              </Tilt>
                            </a>
                          </div>
                        </div>
                        <div className="project-wrapper__technologies">
                          {(technologies) ? technologies.map(technology => (<span className="project-wrapper__technologies-item">{technology}</span>)) : ''}
                        </div>
                      </div>
                    </Fade>
                  </Col>
                  </Row>
                </Card.Body>
                </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
