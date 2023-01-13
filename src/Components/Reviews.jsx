import React from 'react'
import style from './Reviews.module.css'
import {BsFillCircleFill} from 'react-icons/bs'
export default function Reviews() {
  return (
    <div className={`${style.reviewsbdy} overflow-hidden`}>
      <div id="carouselExampleIndicators" class="carousel slide " data-bs-ride="true">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className='active bg-transparent' aria-current="true" aria-label="Slide 1"><BsFillCircleFill size={10} /></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" className=' bg-transparent' ><BsFillCircleFill size={10} /></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" className=' bg-transparent' ><BsFillCircleFill size={10}/></button>
        </div>
        <div className={`carousel-inner ${style.carouselbdy}`}>
          <div className={`carousel-item active text-center `} >
            <div className={`container`}>
              <div>
                <i className={`fa-regular fa-comments mb-5 mt-5 ${style.cloud}`}></i>
              </div>
              <div >
                <p className={style.reviewsfirstpara}>Best Services from HexaSol IT Solutions!</p>
              </div>
              <div className={style.reviewssecondpara}>Quis nostrud exercitation duis aute irure dolor reprehenderit voluptate. velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecas cupidatat non proident, sunt in culpa qui officia deserunt.</div>
              <div >
                <p className={style.reviewsauthorname}>Saren Matthew</p>
                <p className={style.reviewsauthorjob}>CEO, IT Works</p>
              </div>
            </div>
          </div>
          <div className={`carousel-item text-center`}>
    <div className={`container`}>
        <div>
          <i className={`fa-regular fa-comments mb-5 mt-5  ${style.cloud}`}></i>
        </div>
        <div >
          <p className={style.reviewsfirstpara}>Best Services from HexaSol IT Solutions!</p>
        </div>
        <div className={style.reviewssecondpara}>Quis nostrud exercitation duis aute irure dolor reprehenderit voluptate. velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecas cupidatat non proident, sunt in culpa qui officia deserunt.</div>
        <div >
          <p className={style.reviewsauthorname}>Saren Matthew</p>
          <p className={style.reviewsauthorjob}>CEO, IT Works</p>
        </div>
      </div>
          </div>
          <div className={`carousel-item text-center`}>
    <div className={`container`}>
        <div>
          <i className={`fa-regular fa-comments mb-5 mt-5  ${style.cloud}`}></i>
        </div>
        <div >
          <p className={style.reviewsfirstpara}>Best Services from HexaSol IT Solutions!</p>
        </div>
        <div className={style.reviewssecondpara}>Quis nostrud exercitation duis aute irure dolor reprehenderit voluptate. velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecas cupidatat non proident, sunt in culpa qui officia deserunt.</div>
        <div >
          <p className={style.reviewsauthorname}>Saren Matthew</p>
          <p className={style.reviewsauthorjob}>CEO, IT Works</p>
        </div>
      </div>
          </div>
        </div>
      </div>
    </div>
  )
}
