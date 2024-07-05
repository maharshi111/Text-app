import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'; // to convert a href to link just replace 'a' with Link and 'href' with to
// import ColorPallet from './ColorPallet';

// function changeColor(col){
//   document.body.style.backgroundColor = col;
// }

export default function Navbar(props) {
  return (
    
     <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/">Home</Link> 
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/about">{props.aboutus}</Link>
            {/* right now props.aboutus is taking default value that is the vlaue which is basically in Navbar.defaultProps */}
          </li>
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
         {/* <ColorPallet/> */}
         {/* color pallet code starts here  */}
         {/* <div className='d-flex'>
          <>
           <div className='bg-primary rounded mx-2' onClick={()=>changeColor("blue")} style = {{height:"30px", width :"30px"}}></div>// onClick needs a function not a function call so we cannot write onClick={changeColor("blue")} directly , to avoid this problem we are using arrow function
           <div className='bg-danger rounded mx-2' onClick={()=>changeColor("red")} style = {{height:"30px", width :"30px"}}></div>
           <div className='bg-secondary rounded mx-2' onClick={()=>changeColor("grey")} style = {{height:"30px", width :"30px"}}></div>
          </>
         </div> */}
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>  {/* if props.mode=light that change it to dark else change to light ; text is a bootstrap property you can either change the color of text by this method or the one shown in above div */}
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enabel dark mode</label>
        </div>
      </div>
    </div>
  </nav>
  
  );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutus:PropTypes.string
  };
   Navbar.defaultProps = {
    title: "set title here",
    aboutus:" About"
   }
  
