import React, { useEffect, useState } from "react";
import { Anchor } from 'antd';
import style from "./Navbar.module.css";

export default function Navbar() {
  const { Link } = Anchor;
  const [show,setShow] = useState(false)
  const controlNavbar=()=>{
    if(window.scrollY>20)
      setShow(true)
    else 
      setShow(false)
  }
  useEffect(()=>{
    window.addEventListener('scroll',controlNavbar)
    return ()=>{
      window.removeEventListener('scroll',controlNavbar)
    }
  },[])
  
  
  
  return (
    <div>
      <div className={`pt-2 ${style.uppernavbdy} `}>
        <div className={`container m-auto row`}>
          <div className="col-md-6">
            <p>Your success technical partner</p>
          </div>
          <div className="col-md-6">
            <ul className="list-unstyled d-flex justify-content-end">
              <li className="me-3">
                <a href="tel:500.368.6755" className={style.uppernavlink}>
                  <i className={`fa-solid fa-phone ${style.uppernavlinkicon}`}></i>
                  <span className={`ms-1`}>phone</span>
                  <strong className={`ms-1`}>0599 475 696</strong>
                </a>
              </li>
              <li className="me-3">
                <a href="mailto:info@hexasol.co" className={style.uppernavlink}>
                  <i className={`fa-solid fa-envelope ${style.uppernavlinkicon}`}></i>
                  <span className="ms-1">info@hexasol.co</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <nav className={`navbar navbar-expand-lg bg-light ${style.mainnav} ${show && 'top-0'}`}>
        <div className="container">
          <a className={`navbar-brand ${style.navbarbrandimg}`} href="#">
            <div className="d-flex align-items-center pb-4">
              <img src="/logojust.jpeg" alt="" height="40px" width="40px" /> 
              <h4 className='pt-2'>HexaSol</h4>
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
          <Anchor className="mb-2 mb-lg-0" targetOffset="100">
            <Link href="#home" title="Home" className={`text-center ${style.nav} ${style.active}`} />
            <Link href="#about" title="About US" className={`nav-link ${style.nav}`} />
            <Link href="#services" title="Services" className={`nav-link ${style.nav}`} />
            <Link href="#projects" title="Projects" className={`nav-link ${style.nav}`} />
            <Link href="#contact" title="Contact" className={`nav-link ${style.nav}`} />
            <Link href="#about" title="" className={`nav-link ${style.nav} pt-3`} /><i class="fa-solid fa-magnifying-glass"></i>
          </Anchor>
          </div>
        </div>
      </nav>
    </div>
  );
}
