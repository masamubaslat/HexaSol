import React from 'react'
import style from './Map.module.css'
export default function Map() {
  return (
    <div className='text-center pt-5 mt-5'>
        <div>
            <p className={style.firstparag}>HexaSol IT Services</p>
            <h2 className='my-3'>Trusted By 5M HexaSol IT Customers Around The World</h2>
            <p className={`mb-5 ${style.secondparag}`}>Sit amet consectetur adipisicing elitm sed eiusmod temp sed incididunt labore dolore magna aliquatenim veniam quis ipsum nostrud exer citation ullamco laboris.</p>
        </div>
        <div>
          <img src="/map-pattern.png" className={style.mapImage}/>
        </div>
    </div>
  )
}

