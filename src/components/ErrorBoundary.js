import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.ingressDataTransform(props);
  }

  ingressDataTransform=(props)=>{
          // responsible for transforming any incomming data into usable state for the container.
            var state = {};
            state.error = null;
            state.errorInfo = null;
            return state;
   }
  
  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    // You can also log error messages to an error reporting service here
  }
  
  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
				 <div>
				    <div class="row">
				     	<div class="small-8 small-offset-2 end columns">
				      	    <div class="panel card thick row top-2x bottom-2x">
				        	    <div class="body bottom-3x">   
				        		    <div class="small-12 columns text-center">    		 
				        		       <h1>Uh oh...</h1>
				        		       <h3>Clearly something went awry</h3>
				        		       <details style={{ whiteSpace: 'pre-wrap' }}>          
				         		           {this.state.error && this.state.error.toString()}           
				          		       </details>
				          		    </div>
				          		    
				        	    </div>
				           </div>
				        </div>
				    </div>
				</div>
      );
    } else {
    	 return this.props.children;
    }
 
   
  }  
}

export default ErrorBoundary;  

