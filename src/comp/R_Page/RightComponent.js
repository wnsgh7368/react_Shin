import '../CSS/MainPage/RightComponent.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const RightComponent=() => {
  const [showPage, setShowPage] = useState(false);

  const handleClick = () => {
    setShowPage(!showPage);
  };

  return (
    <div className="right-component">
      <div className="buttons-coll">

      <Link to="/Introduction">
      <button className="custom-btn btn-3"> <span>Introduction</span></button>
      </Link>
      <Link to="/Project">
        <button className="custom-btn btn-3"><span>Project</span></button>
      </Link>
      <Link to="/Contest">
        <button className="custom-btn btn-3"><span>Contest</span></button>
      </Link>
      <Link to="/Carrer">
        <button className="custom-btn btn-3 last-btn"><span>Carrer</span></button>
      </Link>
      </div>
    </div>
  );
}

export default RightComponent;