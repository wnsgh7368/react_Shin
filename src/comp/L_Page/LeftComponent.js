import React from 'react';
import '../CSS/MainPage/LeftComponent.css'
function LeftComponent() {
  return (
    <div className="left-component">

       <div className="header">
        <img src = "/icon2.png" alt = "icon" className='icon'></img> 
        <span className="myPage-text">My Page</span>
      </div>

      <div className="main">
        <div className="rotated-text">Shin Jun-Ho's Portfolio</div>
      </div>
      
      <div className="footer">
        <div>@copyright  &quot;sin010820@naver.com &quot;</div>
        {/* <br>tel. 010-9402-7368</br> */}

      </div>
    </div>
  );
}

export default LeftComponent;