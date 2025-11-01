import './Header.css';
import logo from './img/logo.png';



import { useState } from 'react';

function Header() {
  const [showImage, setShowImage] = useState(false);
return(
<> 
<div className='header'>
       <img src={logo} className="headerlogo" alt="logo" />

<div className = "menu">
    <div className="menuon"> About Us  </div>
         <div className="menuoption menuon" 
          onMouseOver={() => setShowImage(true)}
          onMouseOut={() => setShowImage(false)}  >  
          How it's Works ▾  
        </div>     

    <div className="menuon">   Menu  </div> 
        <div className="menuon">   Contact   </div> 

</div>
  <button className="headerbtn">Get started</button>
</div>


  {showImage && (
          <div>
            <img src='https://arkhincheeva.ru/wp-content/uploads/2025/09/1.png' alt="Preview"  className='modal'/>
            <div class="close">✕</div> 
          </div>
        )}



</>



)}

export default Header;