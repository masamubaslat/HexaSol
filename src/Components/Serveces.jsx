import React from 'react'
import style from "./Serveces.module.css"
export default function Serveces() {
  return (
    <div className={`mt-5 py-2 ${style.servicesbdy}`} id="services">
      <div>
        <div className={style.servicescontent}>
          <p className={style.firstpara}>HexaSol IT Services</p>
          <h2 className={style.servicesheader}>Services And Focus Areas</h2>
          <p className={style.secondpara}>Digital Transformation By IT Solutions</p>
        </div>
        <div className='d-flex justify-content-around mt-5 flex-wrap'>
            <div className={`${style.servicesCard} position-relative`}>
                <div className='text-center py-5'>
                  <img src="/theme-icon-3.png" width="170px" height="170px" alt="" />
                  <div>
                  <img src="/2.png" width="100px" height="100px" alt="" className={style.servicescardimages}/>
                  </div>
                </div>
                <div>
                  <h3> <a href="#" className={`${style.servicescardheader} pb-2`}>Data management and analytics</a> </h3>
                  <p className={`{style.servicescardpara} m-auto px-1`}>Handling data in the best ways can result in much beneñts for your business. Our team of experts can manage your data, clean it, analyze it, and help you to take strategical steps based on the results you have.</p>
                </div>
                <div className={style.servicesiconcontent}><i className={`fa-solid fa-arrow-right ${style.servicesicon}`}></i></div>
            </div>
            <div className={`${style.servicesCard} position-relative`}>
                <div className='text-center py-5'>
                  <img src="/theme-icon-3.png" width="170px" height="170px" alt="" />
                  <div>
                  <img src="/3.png" width="100px" height="100px" alt="" className={style.servicescardimages}/>
                  </div>
                </div>
                <div>
                  <h3> <a href="#" className={`${style.servicescardheader} pb-2`}>Software development</a></h3>
                  <p className={`{style.servicescardpara} m-auto px-1`}>HexaSol offers an outsourcing for your software projects, where you provide us with the requirements for your software or business and our team of experts will make sure to provide the best solutions for you with the highest quality.</p>
                </div>
                <div className={style.servicesiconcontent}><i className={`fa-solid fa-arrow-right ${style.servicesicon}`}></i></div>
            </div>
            <div className={`${style.servicesCard} position-relative`}>
                  <div className='text-center py-5'>
                    <img src="/theme-icon-3.png" width="170px" height="170px" alt="" />
                    <div>
                    <img src="/1.png" width="100px" height="100px" alt="" className={style.servicescardimages}/>
                    </div>
                  </div>
                  <div>
                    <h3> <a href="#" className={`${style.servicescardheader} pb-2`}>CTO as a Service</a> </h3>
                    <p className={`{style.servicescardpara} m-auto px-1`}>CaaS stands for CTO as a Service and refers to hiring a part-time CTO. CaaS provides the assistance of a technical consultant to focus on technology-driven challenges and envisage the vision, roadmap and timelines in line with your business targets.</p>
                  </div>
                  <div className={style.servicesiconcontent}><i className={`fa-solid fa-arrow-right ${style.servicesicon}`}></i></div>
            </div>
        </div>
        
        <div className='d-flex justify-content-around mt-5 flex-wrap'>
        <div className={`${style.servicesCard} position-relative`}>
                  <div className='text-center py-5'>
                    <img src="/theme-icon-3.png" width="170px" height="170px" alt="" />
                    <div>
                    <img src="/4.png" width="100px" height="100px" alt="" className={style.servicescardimages}/>
                    </div>
                  </div>
                  <div>
                    <h3> <a href="#" className={`${style.servicescardheader} pb-2`}>Team As A Service instead of DevTeam</a> </h3>
                    <p className={`{style.servicescardpara} m-auto px-1`}>HexaSol offers a software development model where your company outsources your development team, allowing you to have a complete and cohesive team to meet any development needs in an open scope</p>
                  </div>
                  <div className={style.servicesiconcontent}><i className={`fa-solid fa-arrow-right ${style.servicesicon}`}></i></div>
            </div>
            <div className={`${style.servicesCard} position-relative`}>
                  <div className='text-center py-5'>
                    <img src="/theme-icon-3.png" width="170px" height="170px" alt="" />
                    <div>
                    <img src="/5.png" width="100px" height="100px" alt="" className={style.servicescardimages}/>
                    </div>
                  </div>
                  <div>
                    <h3> <a href="#" className={`${style.servicescardheader} pb-2`}>Performance tuning and optimization</a> </h3>
                    <p className={`{style.servicescardpara} m-auto px-1`}>HexaSol team will help your systems to well-tuned and be efficient, which will enhance systems speed, stability, scalability and performance. And That will increase your customers satisfactions and give them a better user experience</p>
                  </div>
                  <div className={style.servicesiconcontent}><i className={`fa-solid fa-arrow-right ${style.servicesicon}`}></i></div>
            </div>
            <div className={`${style.servicesCard} position-relative`}>
                  <div className='text-center py-5'>
                    <img src="/theme-icon-3.png" width="170px" height="170px" alt="" />
                    <div>
                    <img src="/5.png" width="100px" height="100px" alt="" className={style.servicescardimages}/>
                    </div>
                  </div>
                  <div>
                    <h3> <a href="#" className={`${style.servicescardheader} pb-2`}>Digital Transformation</a> </h3>
                    <p className={`{style.servicescardpara} m-auto px-1`}>HexaSol provides the chance to convert your business to the latest digital approaches. Our team of experts will be analyzing your business, give very clear and detailed plan, execute the plan to help you entering the digital word in the best ways; and we definitely do it as if we are you partners</p>
                  </div>
                  <div className={style.servicesiconcontent}><i className={`fa-solid fa-arrow-right ${style.servicesicon}`}></i></div>
            </div>
        </div>
      </div>
      <div className='m-auto text-center pt-5 my-5 pb-3'>
        <p className={style.serviceslasapara}>We’re ready to discover and unlock your potential. <a href="#" className={style.serviceslastlink}><strong>Get The Solutions</strong></a> or Call us Today! <a href='#' className={style.serviceslastlink}> <strong>0599 475 696</strong></a> </p>
      </div>
    </div>
  )
}
