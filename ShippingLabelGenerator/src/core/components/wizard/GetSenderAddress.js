import React, { Component } from 'react';
import {FormGroup,FormControl,ControlLabel} from 'react-bootstrap';

class GetSenderAddress extends Component {

constructor(props){
    super(props);
      this.state= {
        senderAddress: props.senderAddress
      }
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange = function(event){
      event.persist();
    this.setState((prevState, props) => ({
    senderAddress :event.target.value
  }));
    this.props.onSenderAddressChange(event.target.value);
  }

  getValidationState() {
    const length = this.state.senderAddress.length;
    if (length >= 3) return 'success';
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
            value={this.state.senderAddress}
            placeholder="Enter Sender Address"
            onChange={this.handleTextChange}
          />
          <FormControl.Feedback />
        </FormGroup>
      </form>
      </div>
    );
}

}
export default GetSenderAddress;

