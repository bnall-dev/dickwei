import React from 'react';
import ReactDOM from 'react-dom';

function Header() {
    const dayOfWeek = Object.values(window.getGame().weekDays).find(d => d.day == window.getGame().day % 7).abbrev
    
    const cigStyle = {
      height: "5px",
      width: "60px",
      display: "flex",
      justifyContent: "flex-end",
      backgroundColor: "dimgrey",
       background: "repeating-linear-gradient(80deg, black 0px, black 1px, dimgrey 1px, dimgrey 2px)"
    }
    const cigRemainingStyle = {
      backgroundColor: "white",
      height: "5px",
      width: (window.getGame().player.currentCig / 1440 * 40).toString() + "px",
      
      display: "flex"
     
    }
    const cigFilterStyle = {
      height: "5px",
      width: "20px",
      backgroundColor: "orange"
    }
    
    return <div style = {{visibility: window.getGame().headerActive == true ? "visible": "hidden"}} className = "Header">
      <h6>{dayOfWeek} {window.getGame().dayTime == "am" ? "Daytime" : "Evening"}</h6>
      <div>
       <div style = {cigStyle}>
        <div style = {cigRemainingStyle}>
          <div className= "CigFlame"/>
          </div>
        <div style = {cigFilterStyle}/>
        </div>
      </div>
      <h6>Day {window.getGame().day}</h6>
     
    </div>
  }
  
  export default Header