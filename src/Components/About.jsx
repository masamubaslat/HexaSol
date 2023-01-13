import React from 'react'
import style from './About.module.css'
export default function About() {
  return (
    <>
    <div className='container py-5 my-5' id='about'>
        <div className="row">
            <div className="col-md-6">
                <p className={style.aboutpara}>HexaSol - Welcome to IT Solutions</p>
                <h2 className={style.aboutheader}>Let us be your next <strong>Preferred IT Partner</strong></h2>
                <p className={style.scndaboutparag}>HexaSol is not an agency, we are your successful technical partner.<br></br> We are team of responsiple data experts, digital transformation consultants, talented software developers, we are driven by passion and enthusiasm to help clients grow with their projects and ideas through innovation and creativity</p>
                <dl className='list-unstyled'>
                    <dt className={style.aboutlistitems}>PARTNERS</dt>
                    <dd className={style.scndaboutparag}>- Our delivery team works as an extension of your in-house team members. We work with you to deliver projects for your clients</dd>
                    <dt className={style.aboutlistitems}>STARTUPS</dt>
                    <dd className={style.scndaboutparag}>- Helping startups acquire talent & execute a delinery process that keeps feature releases on track and at affordable rates</dd>
                    <dt className={style.aboutlistitems}>SMALL + MEDIUM BUSINESS</dt>
                    <dd className={style.scndaboutparag}>- Allowing SMB's to focus on theirv internal & marketing business initiatives and delivering on them on time and within budget.</dd>
                </dl>
            </div>
            <div className={`col-md-6 position-relative ${style.aboutPic}`}>
                <div className="d-flex">
                    <div >
                        <img src="../about-image-1.jpg"/>
                    </div>
                    <div className="ms-3">
                    <img src="../about-image-2.jpg"/>
                    </div>
                </div>
                <div className="d-flex mt-3">
                <div >
                        <img src="../about-image-3.jpg"/>
                    </div>
                    <div className="ms-3">
                    <img src="../about-image-4.jpg"/>
                    </div>
                </div>
                <div className={`position-absolute ${style.crcleaboutpos}`}>
                    <div className={style.crcleabout}></div>
                </div>
            </div>
        </div>
    </div>
    <div className='d-flex align-items-center'>
            <div className="w-50">
                <hr />
            </div>
            <div>
                <img src="/logojust.jpeg" alt="" height="40px" width="40px" className='mx-4'/>
            </div>
            <div className="w-50">
                <hr />
            </div>
    </div>
    </>
  )
}
