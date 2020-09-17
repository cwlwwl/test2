//Right.js
import React from "react";
export default class Right extends React.Component {
  constructor() {
    super(); 
  }

  render() {
    return (
     <div className="right">
     	<div className="one" style={{display:this.props.flag=='one'?'block':'none'}}>one</div>
     	<div className="two" style={{display:this.props.flag=='two'?'block':'none'}}>two</div>
     	<div className="three" style={{display:this.props.flag=='three'?'block':'none'}}>three</div>
     </div>
    );
  }
}