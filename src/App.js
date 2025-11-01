import React, { useState } from 'react';
import './App.css';
import flag from './img/flag.png';
import manager from './img/manager.png';
import healf from './img/healthcare.png';
import dish from './img/dish.png';
import parsley from './img/parsley.png'



function App() {

  return (

<div className='body'>
  <div className='body-section-first'>
        <div className="first bsff"> 
            <div className='bsffimg'>   <img src={flag} className="bsffimgreal" alt="real" />  </div>
            <div className='bsfftext'>  <b> AAA & State Governments.</b> <p/>Information for leaders in government <br/>or at Area Agencies on Aging.  </div>
        </div>
    <div className="first bsfs">
            <div className='bsffimg'>   <img src={manager} className="bsffimgreal" alt="real" />  </div>
            <div className='bsfftext'>  <b> Case Managers </b> <p/>Information for case managers who are looking for solutions<br/> for their clients or members.  </div>    
    </div>

    <div className="first bsft">
            <div className='bsffimg'>   <img src={healf} className="bsffimgreal" alt="real" />  </div>
            <div className='bsfftext'>  <b>Individuals & Caregivers</b> <p/>For self-pay customers managing a chronic disease, living independently, or caring.  </div>
    </div>
  </div>

<div className='body-section-second'>
  <div className='bss-first'>

          <div className='text-h1 bss-first-h1'> About us
          <img src={parsley} className="parsley" alt=" parsley" />
          </div>
          <div className='text bss-first-text'> Meals America provides home-delivered meals to<br/> consumers across all 67 counties in Florida. We offer a wide<br/> variety of frozen, refrigerated, and shelf-stable meals 
          including<br/> dinners, deli café, breakfasts, soups, and specialty weeks. We also <br/>provide option for customers with dietary restrictions and have vegetarian,
          sodium-controlled, and gluten-free menus. We also provide emergency packs for emergency situations that contain shelf stable items only and do not require
          refrigeration or heating.
          </div> 
          <div className='bss-first-btn'><button className='mainbtn'>Read me</button></div>

        <div className='bss-first-fourth'>
          <div className='bssff-first'>
            <div className='bssffftext'> <div className='bssf-fourth-done'>✓</div> <div className='text textbssf'>Gluten free options </div> </div>  
            <div className='bssffftext'> <div className='bssf-fourth-done'>✓</div> <div className='text textbssf'>Exact calorie content</div> </div>  
            <div className='bssffftext'> <div className='bssf-fourth-done'>✓</div> <div className='text textbssf'>Improves health </div> </div>  
          </div>

          <div className='bssff-second'>
            <div className='bssffftext'> <div className='bssf-fourth-done'>✓</div> <div className='text textbssf'>Vegetarian options</div> </div>  
            <div className='bssffftext'> <div className='bssf-fourth-done'>✓</div> <div className='text textbssf'>Adds strength and energy</div> </div>  
          </div>
        </div>
        
 </div>
  <div className='bss-second'>
  <img src={dish} className="bss-second-dish" alt="dish" />  </div>
 </div>

<div className='body-section-third'>
</div>
</div>
)
}

export default App;
