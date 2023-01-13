import React from 'react'
import { useState } from 'react'
import style from './Booking.module.css'
import axios from 'axios';
export default function Booking() {
    const [show,setShow]=useState(false);
    const [formState,setFormState] = useState({
        firstname:'',
        lastname:'',
        email:'',
        inquery:''
    });
    const changeHandler = (event)=>{
        setFormState({...formState , [event.target.name]:event.target.value})
    }
    const submitHandler =(event)=>{
        event.preventDefault();
        const data={
            // firstname:formState.firstname,
            // lastname:formState.lastname,
            recipient_email:formState.email,
            message:formState.inquery,
            fname:formState.firstname,
            lname:formState.lastname
        }
        if(data){
            console.log(data);
            axios.post("https://hexa-nine.vercel.app/sendemail",data).then(()=>setShow(true)).then(clear()).catch(()=>alert('ooops'));
            return;
        }
    }
    const clear =()=>{
        setFormState({
            firstname:'',
            lastname:'',
            email:'',
            inquery:''
        })
    }
  return (
    <div id='contact'>
        <div className={`d-flex justify-content-around ${style.bookingdivision}`}>
            <div className={style.leftSide}>
                <div>
                    <p className={style.bookingfirstpara}>Hexasol - Welcome to IT Solutions</p>
                    <h2 className={style.bookingheader}>Why Choose <strong>Hexasol IT Solutions</strong></h2>
                    <p className={style.bookingsecondpara}>Our aim is to provide value for users in everything we produce</p>
                </div>
                <ul className={`list-unstyled`}>
                    <li>
                        <div className={`d-flex`}>
                            <div className={`position-relative`}>
                                <img src="/theme-icon-3.png" alt="" />
                                <div className={`position-absolute ${style.bookinglistimg}`}>
                                    <img src="/6.png" alt="" />
                                </div>
                            </div>
                            <div>
                                <h3><a href="#" className={style.bookinglistheader}>We Ask, Listen and Understand</a></h3>
                                <p className={style.bookinglistpara}>We begin each project by gaining a solid understanding of who you are, what you do and why you do it. This helps us create strategic web design solutions that communicate the right messages and express your unique brand identity</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={`d-flex`}>
                            <div className={`position-relative`}>
                                <img src="/theme-icon-3.png" alt="" />
                                <div className={`position-absolute ${style.bookinglistimg}`}>
                                    <img src="/7.png" alt="" />
                                </div>
                            </div>
                            <div>
                                <h3><a href="#" className={style.bookinglistheader}>We focus on results.</a></h3>
                                <p className={style.bookinglistpara}>For us, it’s all about what adds value for you and your business. Above all, we want our words to work for you</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={`d-flex`}>
                            <div className={`position-relative`}>
                                <img src="/theme-icon-3.png" alt="" />
                                <div className={`position-absolute ${style.bookinglistimg}`}>
                                    <img src="/8.png" alt="" />
                                </div>
                            </div>
                            <div>
                                <h3><a href="#" className={style.bookinglistheader}>We Are On Time And On Budget</a></h3>
                                <p className={style.bookinglistpara}>We determine the scope of the project, create a budget and timeline, and once they’re approved, we stick to them.</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='mt-5 pt-5 '>
                <div>
                    <div className={style.imageForm}>
                    </div>
                    <div className={style.bookingformbdy}>
                        <h3 className={style.bookingformheader}>Book Your Appointment</h3>
                        <p className={style.bookingformpara}>We Help Customers Digital Transformation By IT Solutions</p>
                    
                        <form onSubmit={submitHandler} className={`mt-4`}>
                            <div className={`d-flex justify-content-center ${style.inputState}`}>
                                <input type="text" placeholder='First Name' value={formState.firstname} name='firstname' onChange={changeHandler}/>
                                <input type="text" placeholder='Last Name' value={formState.lastname} name='lastname'  onChange={changeHandler} className={style.secondinput}/>
                            </div>
                            <div className={`d-flex justify-content-center ${style.inputState} ${style.secondinputstate}`}>
                                <input type="email" name='email' value={formState.email} onChange={changeHandler} placeholder='Email'/>
                                <select name="inquery" id="service" value={formState.inquery} onChange={changeHandler} className={style.bookingformseleclist}>
                                    <option value="Inquiry About">Inquiry About</option>
                                    <option value="Data managment and analytics">Data managment and analytics</option>
                                    <option value="Software development">Software development</option>
                                    <option value="CTO as a Service">CTO as a Service</option>
                                    <option value="Team As A Service instead of DevTeam">Team As A Service instead of DevTeam</option>
                                    <option value="Performance tuning and optimization">Performance tuning and optimization</option>
                                    <option value="Digital Transformation">Digital Transformation</option>
                                </select>
                            </div>
                            <div className='m-auto text-center pt-5'>
                                <p className={`text-success  ${show?'d-block':'d-none'}`}><i className="fa-regular fa-circle-check text-success"></i> Email sent successfully</p>
                               <button type="submit" value="Make a Request" class={style.bookingbtn}>Make a Request</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
