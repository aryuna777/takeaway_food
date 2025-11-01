import './Main.css';

import { useState } from 'react';


function Main(){
return(
<>
<div className='main-viewport'>
    <div className='main-banner-first'>
        <h1 className='text-h1 textcolor'>Free Meals delivered   <span style={{color: '#333333'}}><br />to your doorstep!</span></h1> 
        <div className='text textcolor'>We provide healthy, balanced meals<br/> delivered to your doorstep!
            <div className='main-viewportbtn'>
            <button className='mainbtn'>How it Works</button>
            <button>Get Started</button>
            </div>
        </div>
    </div>

<div className='main-banner-second'></div>

</div>



</>



)}


export default Main;