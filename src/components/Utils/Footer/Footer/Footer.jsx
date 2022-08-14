import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarker,
  faPhoneAlt,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebookF, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'
import images from "../../../../constants/images";

const Footer = () => {
  return (
    <>
    {/* Footer Start */}
    <footer className='bg-dark text-light pt-3'>
      <Container>
        <Row className='mb-3 align-items-center'>
          <Col
          md='6'
          >
            <h4 className='text-uppercase mb-4'>Get In Touch</h4>
            <p className='mb-4'>No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor. Rebum tempor no vero est magna amet no</p>
            <p className="mb-2"><FontAwesomeIcon
                      icon={faMapMarker}
                      className="me-2 text-primary"
                    />123 Street, New York, USA</p>
            <p className="mb-2"><FontAwesomeIcon
                      icon={faEnvelope}
                      className="me-2 text-primary"
                    />info@example.com</p>
            <p className="mb-2"><FontAwesomeIcon
                      icon={faPhoneAlt}
                      className="me-2 text-primary"
                    />+012 345 67890</p>
          </Col>
          <Col
          md='6'
          className='text-center'
          >
            <h4 className='text-uppercase mb-4'>Follow us</h4>
            <div className="d-flex align-items-center justify-content-center">
                            <a className="btn btn-primary btn-square me-2" href="#"><FontAwesomeIcon icon={faTwitter}/></a>
                            <a className="btn btn-primary btn-square me-2" href="#"><FontAwesomeIcon icon={faFacebookF}/></a>
                            <a className="btn btn-primary btn-square me-2" href="#"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a className="btn btn-primary btn-square" href="#"><FontAwesomeIcon icon={faInstagram}/></a>
                        </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className='mx-xl-5 py-4 border-top' style={{borderColor: 'rgba(256, 256, 256, .1) !important'}}>
          <Col
          md='6'
          >
            <p className="mb-md-0 text-md-center">
                    &copy; All Rights Reserved. Designed
                    by <a target='_blank' className="text-primary text-decoration-none" href="https://mohammed-eassa.netlify.app/">M.Eassa</a>
                </p>
          </Col>
          <Col
          md='6'
          className='text-md-center'
          >
            <img className="img-fluid" src={images.payments} alt="" />
          
          </Col>
        </Row>
      </Container>
    </footer>

    {/* Footer End */}
    </>
  )
}

export default Footer