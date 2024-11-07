import "./menu-item.scss";
import React from "react";
import { useNavigate } from "react-router-dom";
const MenuItem = (props) => {
  const navigate=useNavigate()
  const { title, imageUrl } = props.product;
  const handleNavigation=()=>{
    navigate(`/shop/${title}`)
  }
  return (
    <div className="menu-item">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
        
      ></div>
      <div className="content" onClick={handleNavigation}>
        <div className="title">{title.toUpperCase()}</div>
        <div className="subtitle">Shop now</div>
      </div>
    </div>
  );
};

export default MenuItem;
