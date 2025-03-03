import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";

const FooterComponent = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            <h3 className="fw-bold">Ngoding</h3>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              veritatis doloribus reprehenderit perspiciatis dolorem quibusdam
              similique ullam distinctio tenetur praesentium commodi sunt facere
              quasi aliquam, explicabo aspernatur alias ea beatae.
            </p>
            <div className="no mb-1 mt-4">
              <a
                className="text-decoration-none"
                href="https://wa.me/6289522384992"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">+62 895-2238-4992</p>
              </a>
            </div>
            <div className="mail">
              <a
                className="text-decoration-none"
                href="mailto:person-email@gmail.com"
              >
                <i className="fa-regular fa-envelope"></i>
                <p className="m-0">person-email@gmail.com</p>
              </a>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
            <h5 className="fw-bold">Menu</h5>
            <Link to="#">Home</Link>
            <Link to="kelas">Kelas</Link>
            <Link to="testimonial">Testimonial</Link>
            <Link to="faq">FAQ</Link>
            <Link to="syaratketen">Syarat & Ketentuan</Link>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5">
            <h5 className="fw-bold mb-3"> Subscribe untuk info menarik</h5>
            <div className="subscribes">
              <input type="text" placeholder="Subscribes..." />
              <button className="btn btn-danger rounded-end rounded-0">Subscribe</button>
            </div>
            <div className="social mt-3">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <p className="text-center px-md-0 px-3">&copy; Copyright {new Date().getFullYear()} by <span className="fw-bold">Ngoding Mastery</span>, All Rightn Reverasd</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
