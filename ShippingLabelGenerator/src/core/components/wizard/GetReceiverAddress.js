import React, { Component } from 'react';
import {FormGroup,FormControl,ControlLabel} from 'react-bootstrap';

class GetReceiverAddress extends Component {
  
 constructor(props){
    super(props);
      this.state= {
        receiverAddress: props.receiverAddress
      }
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange = function(event){
    event.persist();
    this.setState((prevState, props) => ({
    receiverAddress :event.target.value
  }));
    this.props.onReceiverAddressChange(event.target.value);
  }

  getValidationState() {
    const length = this.state.receiverAddress.length;
    if (length > 3) return 'success';
    else  return 'error';
  }

 render() {
    return (
      <div>
       <form>
        <FormGroup
          validationState={this.getValidationState()}>
          <ControlLabel>{this.props.title}</ControlLabel>
          <FormControl
            type="text"
            value={this.state.receiverAddress}
            placeholder="Enter Receiver Address"
            onChange={this.handleTextChange}
          />
          <FormControl.Feedback />
        </FormGroup>
      </form>

      </div>
    );
  }
}


export default GetReceiverAddress;