import React from 'react';
import slide1 from '../assets/img/slides/slide1.jpg';
import slide2 from '../assets/img/slides/slide2.jpg';
import slide3 from '../assets/img/slides/slide3.jpg';

function Slides() {

  return (

        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="first-slide" src={slide1} alt="First slide"/>
            <div className="container">
              <div className="carousel-caption text-left">
                <h1>Welcome to Dev Consult.</h1>
                <p>We are a team of professionals with a passion for creating, improving and managing websites and web applications.</p>
                <p><a className="btn btn-lg btn-primary mt-1" href="#services" role="button">Learn more</a></p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="second-slide" src={slide2} alt="Second slide"/>
            <div className="container">
              <div className="carousel-caption">
                <h1>Find out our recent projects.</h1>

                <p>Dev Consult's team have worked on many projects in web development, and they provide a well-functioning and high-performing products also great support and management.</p>
                <p><a className="btn btn-lg btn-primary mt-1" href="#portfolio" role="button">Check out</a></p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="third-slide" src={slide3} alt="Third slide"/>
            <div className="container">
              <div className="carousel-caption text-right">
                <h1>One more for good trust.</h1>
                <p>Dev Consult delivered everything they promised and their team did an excellent job of breaking down the project requirements to build useful websites.</p>
                <p><a className="btn btn-lg btn-primary mt-1" href="#contact" role="button">Contact us</a></p>
              </div>
            </div>
          </div>
        </div>
        <span className="carousel-control-prev" href="#myCarousel" noscroll="true" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </span>
        <span className="carousel-control-next" href="#myCarousel" noscroll="true" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </span>
      </div>

    );

}

export default Slides;