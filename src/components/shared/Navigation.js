import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
class Navigation extends Component {
  state = {
    selectorTop : 0
  }
  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">        
				<div className="selector" style={{top: this.state.selectorTop}}></div>
         <ul className="menu">
          <li className="menu-text">Redux With Express</li>
					<li><Link to={'/'}><span className="icon icon-tachometer right-1x" aria-hidden="true"></span>Home</Link></li>
          <li><Link to={'/claim'}><span className="icon icon-credit-card right-1x" aria-hidden="true"></span>Claim</Link></li>
				</ul>
      </div>
      </div>
    )
  }
}
function mapStateToProps(state){
    return {
  
    };
  }
  
  export default connect(mapStateToProps)(Navigation);
  
