import React from 'react'
import style from './Footer.module.css'
export default function () {
  return (
    <div className='mt-5 py-5 overflow-hidden' >
        <div></div>
        <div className="row">
            <div className={`col-lg-3 ${style.companyInfo}`} >
                <div>
                    <div className="d-flex align-items-center">
                       <img src="/logojust.jpeg" height="40px" width="40px" className={style.logoImage} /> 
                       <h4 className='pt-2'>HexaSol</h4>
                    </div>
                    <p className={style.footers1para}>Your success technical partner</p>
                    <ul className='list-unstyled'>
                        <li className={style.footers1paralist}>Jenin - Marmarah Building - Second Floor</li>
                        <li className={style.footers1paralist}>Call us <strong><a href="tel:(+970) 599 475 696" className={style.footers1paralistlink}>(+970) 599 475 696</a></strong></li>
                        <li className={style.footers1paralist}><strong><a href="mailto:info@hexasol.co" className={style.footers1paralistlink}>info@hexasol.co</a></strong></li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-6 d-flex row justify-content-around ps-3">
                <div className='col-lg-4'>
                    <h4 className={style.footers2header}>What We Do</h4>
                    <ul className='list-unstyled'>
                        <li className='my-2'><a href="#" className={style.footers2list}><i class={`fa-solid fa-arrow-right ${style.arrowbefotlist}`}></i> Data management and analytics</a></li>
                        <li className='my-2'><a href="#" className={style.footers2list}><i class={`fa-solid fa-arrow-right ${style.arrowbefotlist}`}></i> Software development</a></li>
                        <li className='my-2'><a href="#" className={style.footers2list}><i class={`fa-solid fa-arrow-right ${style.arrowbefotlist}`}></i> CTO as a service</a></li>
                        <li className='my-2'><a href="#" className={style.footers2list}><i class={`fa-solid fa-arrow-right ${style.arrowbefotlist}`}></i> Teams As A Service instead of DevTeam</a></li>
                    </ul>
                </div>
                <div className='col-lg-4'>
                    <h4 className={style.footers2header}>About Us</h4>
                    <ul className='list-unstyled'>
                        <li className='my-2'><a href="#" className={style.footers2list}><i class={`fa-solid fa-arrow-right ${style.arrowbefotlist}`}></i> Who We Are</a></li>
                        <li className='my-2'><a href="#" className={style.footers2list}><i class={`fa-solid fa-arrow-right ${style.arrowbefotlist}`}></i> Case Studies</a></li>
                        <li className='my-2'><a href="#" className={style.footers2list}><i class={`fa-solid fa-arrow-right ${style.arrowbefotlist}`}></i> Career Opportunities</a></li>
                        <li className='my-2'><a href="#" className={style.footers2list}><i class={`fa-solid fa-arrow-right ${style.arrowbefotlist}`}></i> Our Clients</a></li>
                    </ul>
                </div>
                <div className='col-lg-4'>
                    <h4 className={style.footers2header}>What We Do</h4>
                    <ul className='list-unstyled'>
                        <li className='my-2'><a href="#" className={style.footers2list}><i class={`fa-solid fa-arrow-right ${style.arrowbefotlist}`}></i> Performance tuning and optimization</a></li>
                        <li className='my-2'><a href="#" className={style.footers2list}><i class={`fa-solid fa-arrow-right ${style.arrowbefotlist}`}></i> Digital Transformation</a></li>
                        <li className='my-2'><a href="#" className={style.footers2list}><i class={`fa-solid fa-arrow-right ${style.arrowbefotlist}`}></i> Terms Of Service</a></li>
                        <li className='my-2'><a href="#" className={style.footers2list}><i class={`fa-solid fa-arrow-right ${style.arrowbefotlist}`}></i> Contact Us</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="d-flex align-items-center justify-content-center">
                    <input type="email" placeholder='Email address' />
                    <i class={`fa-solid fa-paper-plane ${style.footeremailbox}`}></i>
                </div>
                <p className={`${style.footers1para} text-center my-3`}>Get the latest news & updates</p>
                <ul className='d-flex list-unstyled justify-content-center'>
                    <li><i class={`fa-brands fa-twitter ${style.footers3listicons}`}></i></li>
                    <li><a className='text-black' target="_blank" href="https://www.facebook.com/profile.php?id=100089452987579"><i class={`fa-brands fa-square-facebook ${style.footers3listicons}`}></i></a></li>
                    <li><i class={`fa-brands fa-instagram ${style.footers3listicons}`}></i></li>
                    <li><i class={`fa-brands fa-youtube ${style.footers3listicons}`}></i></li>
                    <li><a className='text-black' target="_blank" href="https://www.linkedin.com/company/hexasolps/"><i className={`fa-brands fa-linkedin ${style.footers3listicons}`}></i></a></li>
                    <li><i class={`fa-brands fa-pinterest ${style.footers3listicons}`}></i></li>
                </ul>
            </div>
        </div>
        <hr />
        <div className={`text-center ${style.cpyrightsection}`}>© 2020 <strong className='text-dark'>Hexasol IT Solutions</strong>. All rights reserved. <a href="#" className={style.cpyrightsectionlastword}>Privacy Policy</a></div>
    </div>
  )
}
