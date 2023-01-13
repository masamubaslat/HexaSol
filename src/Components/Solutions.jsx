import React from 'react'
import style from './Solutions.module.css'
export default function Solutions() {
  return (
    <div className='overflow-hidden'>
        <div className={style.solutionsbdy}>
            <h2 className={`${style.solutionsheader}`}>We believe that we will make a difference for our business by delivering your work with the best quality at the specified time with an after delivery grantee.</h2>
            <a href="#" className={`btn ${style.solutionsbtn}`}>Proven IT Solutions</a>
        </div>
        <div className='row d-none'>
            <div className={`col-md-4 text-center ${style.solutionssection}`}>
                <p className={style.solutionfirstpara}>System Integrations Done</p>
                <p className={style.solutionsecondpara}>0</p>
                <p className={style.solutionthirdpara}>for customers</p>
            </div>
            <div className={`col-md-4 text-center ${style.solutionssection}`}>
                <p className={style.solutionfirstpara}>Powerful Team To Focus</p>
                <p className={style.solutionsecondpara}>0</p>
                <p className={style.solutionthirdpara}>EXPERT MEMBERS</p>
            </div>
            <div className={`col-md-4 text-center ${style.solutionssection}`}>
                <p className={style.solutionfirstpara}>Launched Case Studies</p>
                <p className={style.solutionsecondpara}>0</p>
                <p className={style.solutionthirdpara}>FULLY LAUNCHED</p>
            </div>
        </div>
        <div className={`d-flex align-items-center`}>
            <div className="w-50">
                <hr />
            </div>
            <div >
                <img src="/logojust.jpeg" alt="" height="40px" width="40px" className='mx-4'/>
            </div>
            <div className="w-50">
                <hr />
            </div>
    </div>
    </div>
    
  )
}
