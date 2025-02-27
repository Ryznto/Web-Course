import { Container, Row, Col } from 'react-bootstrap';
import React from 'react'
import'../dist/css/main.css'
import HeroImage from "../assets/img/hero.png"
import { kelasTerbaru } from '../data/index';

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100">
      <Container>
        <Row className="w-100 min-vh-100 d-flex align-items-center">
          <Col lg="6">
          <h1 className="mb-4">
            Temukan <br /> <span>Bakat Kreatifmu</span> Bersama Kami!
          </h1>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi vel ab magni aperiam quidem, nobis laboriosam. Beatae tenetur amet dolores sequi molestiae, consequatur a commodi, 
          </p>
          <button className='btn btn-danger btn-lg rounded-1 me-2'>Lihat Kelas</button>
          <button className='btn btn-outline-danger btn-lg rounded-1'>Lihat Promo</button>
          </Col>
          <Col lg="6" className= "pt-lg-0 pt-5">
            <img className='Heroimg' src={HeroImage} alt="hero-img" />
          </Col>
        </Row>
      </Container>
      </header>
      <div className="kelas w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">Kelas Terbaru</h1>
              <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </Col>
          </Row>
          <Row>
            {kelasTerbaru.map((kelas) =>{
              return <Col Key={kelas.id}>
                <img src={kelas.image} alt="unsplash.com" className="w-100 mb-5 rounded-top"/>
                <div className="start mb-2 px-3">
                  <i className={kelas.star1}></i>
                  <i className={kelas.star2}></i>
                  <i className={kelas.star3}></i>
                  <i className={kelas.star4}></i>
                  <i className={kelas.star5}></i>
                </div>
                <h5 className="mb-5 px-3">{kelas.title}</h5>
                <div className=" ket d-flex justify-content-between align-items-center px-3 pb-3">
                  <p className="m-0 text-primary fw-bold">{kelas.price}</p>
                  <button className="btn btn-danger rounded-1">
                    {kelas.buy}
                  </button>
                </div>
              </Col>
            })}
          </Row>
          <Row>
            <Col className="text-center">
              <button className="btn btn-succes rounded-5 btn-lg" onClick={()=>navigate("/kelas")}>
                Lihat Semua Kelas
                <i className="fa-solid fa-chevron-right ms-1"></i>
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomePage