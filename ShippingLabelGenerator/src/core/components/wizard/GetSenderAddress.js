import React, { Component } from 'react';

class GetSenderAddress extends Component {

  constructor(props){
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  

  handleTextChange = function(event){
    this.props.onSenderAddressChange(event.target.value);
  }


 render() {
    return (
      <div>
        <h3>        
          {this.props.title}
        </h3>
        <input type="text" onChange={this.handleTextChange}/> 

      </div>
    );
}

}
export default GetSenderAddress;

