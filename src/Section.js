import { useState } from 'react';
import './Section.css';
import rf from './img/rf.png';
import line from './img/line.png';
import burger from './img/burger.png';
import group from './img/group.png';
import truck from './img/truck.png';
import cook from './img/cook.png';
import salad from './img/salad.png';
import nuts from './img/nuts.png';
import mask from './img/mask.png';
import groupfood from './img/groupfood.png';
import saladmix from './img/saladmix.png';

function Section () {
    
return (
    
<> 

<div className='section-body'> 
    <div className='none'></div>
    <div className='section-body-first'>
        <img src={rf} className="sb-first-img" alt="dish" /> 
    </div>



    <div className='section-body-second'>
        <div className=''>
            <img src={line} className="sb-first-img" alt="dish" /> 
            <h1>Why choose us?</h1>
        </div>
        <div className='text'>
        We are proud to provide a healthy and nutritious meal for those  <br/> in need! We listen to your preferences and customize 
        the weekly menu considering your requests! Your health is our priority!
        </div>
        <div className='sbs-full'>

          <details>
            <summary className='sbs-full-child'>  <img src={burger} className='' width={'35px'} alt='humburger'/> Delicious & Healthy</summary>
            <p>Sale 30% only for you. Promo: oursecret</p>
          </details>  

          <details>
            <summary className='sbs-full-child'>  <img src={group} className='' width={'35px'} alt='humburger'/> Ready to heat </summary>
            <p>Sale 30% only for you. Promo: oursecret</p>
          </details> 

          <details>
            <summary className='sbs-full-child'>  <img src={truck} className='' width={'35px'} alt='humburger'/> Delivery</summary>
            <p>Sale 30% only for you. Promo: oursecret</p>
          </details> 

          <details>
            <summary className='sbs-full-child'>  <img src={cook} className='' width={'35px'} alt='humburger'/>Taste and preferences</summary>
            <p>Sale 30% only for you. Promo: oursecret</p>
          </details>                     
        </div>

    </div>
    <div className='none'></div>
</div>



<div className='section-third'>
    <img src={mask} className="section-third-mask" alt="dish" /> 
    <img src={salad} className="st-salad" alt="dish" /> 

    <div className='st-num-one'>
    <img src={nuts} className="st-num-one-nut" alt="dish" /> 
    <div className='text-h1 stnone-text'>Choose Your Nutrition</div> 
    </div>

<div className='st-num-last'>
    <img src = { groupfood } className='st-num-lastimg'></img>

    <div className='stnl-second'>
        <img src = { saladmix } className='saladmix'></img>
        
        <div className='stnl-second-child'>
            <div className='text sschild-text'><b>Meals includes:</b>
            <ul>
            <li/> Loaf of Bread
            <li/> Sticks of Butter
            <li/> Quart of Juice
            <li/> Half Callon of 2% Milk
            <li/> Box of Cereal or Oat Meal
            <li/> Package of Cheese Sticks or Cheese Slices
            <li/> Pack of Fruits Cups
            <li/> Complimentary Dessert
            </ul>
            </div>


        <div className='stnl-second-child-buttons'>
            <button className='mainbtn'>Download Menu</button>
            <button>Get Started</button>
            </div> 


    </div>





</div>
</div>














</div>











</>





)



}


export default Section;