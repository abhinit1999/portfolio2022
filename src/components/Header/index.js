import React from 'react'
import { NavLink } from 'react-router-dom';
import "./style.css";


const index = () => {
  return (
    <nav>
      <div className="logo">
        
      </div>
      <ul className='nav_ul'>
        <li>
          <NavLink className="nav_Style" to="/">About</NavLink>
        </li>
        {/* <li>
        <NavLink className="nav_Style" to="/about">About</NavLink>

        </li> */}
         <li>
        <NavLink className="nav_Style" to="/skill">Skills</NavLink>

        </li>
        <li>
        <NavLink className="nav_Style" to="/experience">Experience</NavLink>

        </li>
        
        <li>
        <NavLink className="nav_Style" to="/project">Projects</NavLink>

        </li>
        <li>
        <NavLink className="nav_Style" to="/contact">ContactMe</NavLink>

        </li>
        
       
       
      </ul>
      
    </nav>
  )
}

export default index