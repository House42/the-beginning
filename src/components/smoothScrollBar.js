import React, { Component } from "react";
import './nav-bar.css';
import './BlogStyles.css'

class smoothScrollBar extends Component {
  render() {
    return (

    	<>
        	<div className="topNavImage" />
		   	<div className="topBarLinks">
		        <ul className="scrollLinks">
		         
		          <li>
		            <a href="">2020</a>
		          </li>
		          <li>
		            <a href="">Belly Blog</a>
		          </li>
		          <li>
		            <a href="">Landscape</a>
		          </li>
		          <li>
		            <a href="">Malta</a>
		          </li>
		          <li>
		            <a href="">New Zealand</a>
		          </li>
		         </ul>
	      	</div>
	    </>
	    
	    )
	}
}


export default smoothScrollBar;
