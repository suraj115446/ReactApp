import React, { Component } from 'react';
import {FormGroup,FormControl,ControlLabel} from 'react-bootstrap';

class GetPackageWeight extends Component {

  constructor(props){
    super(props);
      this.state= {
        packageWeight: props.packageWeight
      }
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange = function(event){
    event.persist();
this.setState((prevState, props) => ({
    packageWeight :event.target.value
  }));
      this.props.onPackageWeightTextChange(event.target.value);
  }

  getValidationState() {
    const length = this.state.packageWeight.length;
    if (length > 0) return 'success';
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
            value={this.state.packageWeight}
            placeholder="Enter Package weight"
            onChange={this.handleTextChange}
          />
          <FormControl.Feedback />
        </FormGroup>
      </form>

      </div>
    );
  }
}


export default GetPackageWeight;