import React from "react";
import style from "./Home.module.css";
export default function Home() {
  return (
    <div className={`${style.headerbdy} position-relative`} id='home'>
      <div id="carouselExampleSlidesOnly" className={`carousel ${style.header}`} slide data-bs-ride="carousel" >
        <div className={`carousel-inner ${style.crslbdy}`}>
          <div className="carousel-item active">
            <div className="row">
              <div className="col-lg-6 col-md-12 py-5 my-5 ">
                <div className="ms-5">
                  <div>
                    <p className={style.crsl_parag}>IT Solutions For Easy Integration</p>
                  </div>
                  <div>
                    <h1 className={style.crsl_header}><strong>IT Services</strong> To Develop Solutions Your Way!</h1>
                  </div>
                  <div>
                    <p className={style.crsl_paragr}>Provide value for users in everything we produce</p>
                  </div>
                  <div className="d-flex">
                    <a href="#" className={`btn me-3 ${style.butn}`}>More Details</a>
                    <a href="#" className={`btn ${style.btn_desc}`}> Our Services</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-0 position-relative">
                <img src="/round-box.png" alt="" />
                <div className={`position-absolute top-0`}>
                  <img
                    src="/content-image-1.png" className="d-block w-100 ms-5" alt="..." />
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="row">
              <div className="col-lg-6 col-md-12 py-5 my-5">
                <div className="ms-5">
                  <div>
                    <p className={style.crsl_parag}>
                      IT Solutions For Easy Integration
                    </p>
                  </div>
                  <div>
                    <h1 className={style.crsl_header}>
                      <strong>IT Services</strong> To Develop Solutions Your
                      Way!
                    </h1>
                  </div>
                  <div>
                    <p className={style.crsl_paragr}>
                      Building a relationship between IT companies & experts
                    </p>
                  </div>
                  <div className="d-flex">
                    <a href="#" className={`btn me-3 ${style.butn}`}>
                      More Details
                    </a>
                    <a href="#" className={`btn ${style.btn_desc}`}>
                      Our Services
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-0 position-relative">
                <img src="/round-box.png" alt="" />
                <div className={`position-absolute top-0`}>
                  <img src="/content-image-2.png" className="d-block w-100 ms-5" alt="..." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`position-absolute ${style.curvyimg}`}>
        <img src="/banner-curve-two.png" alt="" />
      </div>
    </div>
  );
}
