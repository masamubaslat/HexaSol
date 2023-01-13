import React from "react";
import style from "./Projects.module.css";
export default function Projects() {
  return (
    <div className={`overflow-hidden ${style.projectsbdy}`} id="projects">
      <div>
        <p className={style.projctfirstpara}>Our Case Studies</p>
        <h2 className={`${style.projctheader} py-3`}>
          IT Solutions & Projects
        </h2>
        <p className={style.projctsecondpara}>
          Sit amet consectetur adipisicing elitm sed eiusmod temp sed incididunt
          labore dolore magna aliquatenim veniam quis ipsum nostrud exer
          citation ullamco laboris.
        </p>
      </div>
      <div className={`pb-5 ${style.display_none}`}>
        <div id="carouselExampleControls" className={`carousel slide mt-5 ${style.container-90}`} data-bs-ride="carousel" >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className={`d-flex justify-content-around ${style.projectFlex}`}>
                <div className={`position-relative ${style.projectPadding}`}>
                    <img src="/hakini.png" alt="" width="450px" height="400px" />
                    <div className={style.projectscard}>
                        <div className={style.cardtitle}>
                            <h4> <a href="https://www.hakini.net/"  className={style.cardheader}>Hakini</a> </h4>
                            <p className={style.cardfirstpara}>Website</p>
                        </div>
                        <div className={style.cardbdy}>
                            <p className={style.cardsecondpara}>Front-end and back-end website, to provide psychological counseling.</p>
                            <p><a href="https://www.hakini.net/" target="_blank" className={style.cardthirdpara}>View Website &nbsp; <i className={`fa-solid fa-arrow-right ${style.cardthirdparaicon}`}></i> </a></p>
                        </div>
                    </div>
                </div>
                <div className={`position-relative ${style.projectPadding}`}>
                    <img src="/palestinian.png" alt="" width="450px" height="400px"/>
                    <div className={style.projectscard}>
                        <div className={style.cardtitle}>
                            <h4> <a href="http://mhpss.org/ar/organization2/the-palestinian-consultative-commission-for-the-de/E6ACJLbJLcc=" target="_blank" className={style.cardheader}>Palestinian Consultative stao for developing  </a> </h4>
                            <p className={style.cardfirstpara}>Website</p>
                        </div>
                        <div className={style.cardbdy}>
                            <p className={style.cardsecondpara}>Eiusmod sed incididunt labore magna sed aliquatenim veniam ipsum nostrud exercit.</p>
                            <p><a href="http://mhpss.org/ar/organization2/the-palestinian-consultative-commission-for-the-de/E6ACJLbJLcc=" target="_blank" className={style.cardthirdpara}>View Case Study &nbsp; <i className={`fa-solid fa-arrow-right ${style.cardthirdparaicon}`}></i> </a></p>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
                <div className={`d-flex justify-content-around ${style.projectFlex}`}>
                    <div className={`position-relative ${style.projectPadding}`}>
                        <img src="/covid_19.png" alt="" width="450px" height="400px" />
                        <div className={style.projectscard}>
                            <div className={style.cardtitle}>
                                <h4> <a href="#"  className={style.cardheader}>Covid-19</a> </h4>
                                <p className={style.cardfirstpara}>Status</p>
                            </div>
                            <div className={style.cardbdy}>
                                <p className={style.cardsecondpara}>Eiusmod sed incididunt labore magna sed aliquatenim veniam ipsum nostrud exercit.</p>
                                <p><a href="#" className={style.cardthirdpara}>View Case Study &nbsp; <i className={`fa-solid fa-arrow-right ${style.cardthirdparaicon}`}></i> </a></p>
                            </div>
                        </div>
                    </div>
                    <div className={`position-relative ${style.projectPadding}`}>
                        <img src="/syrian.png" alt="" width="450px" height="400px"/>
                        <div className={style.projectscard}>
                            <div className={style.cardtitle}>
                                <h4> <a href="#"  className={style.cardheader}>Syrian currency exchange</a> </h4>
                                <p className={style.cardfirstpara}>Mobile App</p>
                            </div>
                            <div className={style.cardbdy}>
                                <p className={style.cardsecondpara}>Eiusmod sed incididunt labore magna sed aliquatenim veniam ipsum nostrud exercit.</p>
                                <p><a href="#" className={style.cardthirdpara}>View Case Study &nbsp; <i className={`fa-solid fa-arrow-right ${style.cardthirdparaicon}`}></i> </a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div className={`d-flex justify-content-around ${style.projectFlex}`}>
                    <div className={`position-relative ${style.projectPadding}`}>
                        <img src="/ahadith.png" alt="" width="450px" height="400px" />
                        <div className={style.projectscard}>
                            <div className={style.cardtitle}>
                                <h4> <a href="#"  className={style.cardheader}>Ahadith</a> </h4>
                                <p className={style.cardfirstpara}>Mobile App</p>
                            </div>
                            <div className={style.cardbdy}>
                                <p className={style.cardsecondpara}>Eiusmod sed incididunt labore magna sed aliquatenim veniam ipsum nostrud exercit.</p>
                                <p><a href="#" className={style.cardthirdpara}>View Case Study &nbsp; <i className={`fa-solid fa-arrow-right ${style.cardthirdparaicon}`}></i> </a></p>
                            </div>
                        </div>
                    </div>
                    <div className={`position-relative ${style.projectPadding}`}>
                        <img src="/fish.png" alt=""  width="450px" height="400px"/>
                        <div className={style.projectscard}>
                            <div className={style.cardtitle}>
                                <h4> <a href="#"  className={style.cardheader}>Shop App</a> </h4>
                                <p className={style.cardfirstpara}>Mobile App</p>
                            </div>
                            <div className={style.cardbdy}>
                                <p className={style.cardsecondpara}>Eiusmod sed incididunt labore magna sed aliquatenim veniam ipsum nostrud exercit.</p>
                                <p><a href="#" className={style.cardthirdpara}>View Case Study &nbsp; <i className={`fa-solid fa-arrow-right ${style.cardthirdparaicon}`}></i> </a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
          </div>
          <button
            className={`carousel-control-prev ${style.carousel_control_previcon}`} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon d-none" aria-hidden="true"></span>
            <span className=""><i className={`fa-solid fa-arrow-left ${style.projectsprecicon}`}></i></span>
          </button>
          <button className={`carousel-control-next ${style.carousel_control_nexticon}`} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon d-none" aria-hidden="true"></span>
            <span className={``}><i className={`fa-solid fa-arrow-right ${style.projectsprecicon}`}></i></span>
          </button>
        </div>
      </div>
      <div className={`m-auto text-center pt-5 my-5 pb-3 ${style.display_none}`}>
        <p className={style.serviceslasapara}>We’re ready to discover and unlock your potential. Call us Today! <a href='#' className={style.serviceslastlink}> <strong>0599 475 696</strong></a> </p>
      </div>
    </div>
  );
}
