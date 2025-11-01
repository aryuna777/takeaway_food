import './Footer.css';
import plus from './img/plusone.png';
import linefooter from './img/linefooter.png';
import time from './img/time.png'
import phone from './img/phone.png'
import car from './img/car.jpg'
import logo from './img/logo.png'

import { useState } from 'react';

function Footer(){
return(
<>

<div className='footer-before'>
   <img src={plus} className="footer-banner" alt="food" /> 
    <div className='footer-before-section'>
        <div className='text footerh1'>Schedule your first <br/> <span style={{color: '#1AC94B', fontWeight: 'bold'}}> weekly </span> delivery</div>
        <button className='footer-before-btn'>Get Started</button>
    </div>
</div>


<footer>
    <div className='footer-last'>

        <div className='footer-last-first'>
            <div className='footer-lf-one'>
                <img src={linefooter} className="" alt="food" /> 
             <h1 className=''> Who We Serve?</h1>  
            </div>

            <div className='flf-one-text'>We serve those in need for long-term meal assistance or <br/>
                anyone who might be in need of a short-term plan while <br/>
                recovering from an injury or illness, or who would <br/>
                simply enjoy healthy meals that require minimal preparation time.</div>

            <div className='flf-one-contacts'>
                <div className='icfootertext'>
                    <img src={time} className='iconesootrer'></img>

                  <span className='footertextmin'> Monday - Friday 9:00 AM - 5:00 PM </span>  
                </div>
                 <div className='icfootertext'>
                 <img src={phone} className='iconesootrer'></img>
                 <span className='footertextmin'>(786) 600-59-09</span>
                 </div>
                
            </div>
            <div className=''><button className='mainbtn'>Read me</button></div>
        </div>


        <div className='footer-last-second'>

          <img src={car} className="carfooter" alt="food" /> 

        </div>
     </div>
</footer>

<div className='thelast'>
    <div className='thelastline'>
         <img src={logo} className="" alt="food" /> 
         <div className=''></div>
         <div className=''> All rights resereved MealsAmericaFL.com <br/> is based in the Florida area and provides home-delivered<br/> meals 
        to consumers across ALL sixty seven counties in Florida.</div> </div> 
    <div className=''></div>
</div>
</>

)}

export default Footer;