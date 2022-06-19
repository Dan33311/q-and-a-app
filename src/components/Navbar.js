import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import spacexLogo from "./images/spacex-logo.png"


const Navbar = () => {

  // const [scrolled,setScrolled]= useState(false);

  // const handleScroll=() => {
  //   const offset=window.scrollY;
  //   if(offset > 200 ){
  //     setScrolled(true);
  //   }
  //   else{
  //     setScrolled(false);
  //   }
  // }
  // useEffect(() => {
  //   window.addEventListener('scroll',handleScroll)
  // })

  // let x=['navbar'];
  // if(scrolled){
  //   x.push('scrolled');
  // }

  return (  
    // <div className={x.join(" ")}>
    <div className="navbar">


      <div className="nav-left">
        <p className="nav-logo">QuizApp</p>
        {/* <img className="nav-logo" src={spacexLogo} alt="logo" /> */}
      </div>

      <div className="links">
        <p className="link">How it works?</p>
        <p className="link">Features</p>
        <p className="link">About us</p>
        {/* <Link className="link" to="/">How it works?</Link>
        <Link className="link" to="/dragons">Features</Link>
        <Link className="link" to="/rockets">About us</Link> */}
        <button>Login</button>
      </div>

    </div>
  );
}

export default Navbar;