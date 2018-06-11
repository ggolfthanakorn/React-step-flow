import React, {Component} from "react";

import './stepflow.css';



class PltStepFlow extends Component {
    
    constructor(props){
        super(props);
    }
    
    render(){
        
        return(
            
<ul class="steps">
  <li>Register</li>
  <li >Register</li>
  <li class="active">Register</li>
  <li>Register</li>
</ul>
     )
        
    };
}

export default PltStepFlow;
