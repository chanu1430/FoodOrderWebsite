import React from "react";

export default function Carousel() {
  return (
    <div className="container" id="carousel-outer-div">
         {/* <div className="col-lg-1 col-0"></div>
         <div className="col-lg-10 col-12"> */}
         <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel" 
        
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner" id="carousel-gradient">
          <div className="carousel-item active" data-interval="100"> 
            <img
              src="images/carousel/img3.jpg"
              className="d-block w-100"
              id="carousel-image"
              alt="..."
            />
          </div>
          <div className="carousel-item" >
            <img
              src="images/carousel/img1.jpg"
              className="d-block w-100"
              id="carousel-image"
              alt="..."
            />
          </div>
          <div className="carousel-item" >
            <img
              src="images/carousel/img2.jpg"
              className="d-block w-100"
              id="carousel-image"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
         </div>
       

    // </div>
   
    
  );
}
