import React, { Component } from 'react';

import GetSenderAddress from './GetSenderAddress'
import GetReceiverAddress from './GetReceiverAddress'
import GetPackageWeight from './GetPackageWeight'
import ShippingLabelView from './ShippingLabelView'
import {Button} from 'react-bootstrap';

class ShippingLabelMaker extends Component {


  constructor(props){
    super(props);
    this.state= {
      currentState : 0,
      previousButtonEnabled : false ,
      printShippingLabel: false,
      nextButtonEnabled: true,
      displayLabel : false,
      senderAddress:"",
      receiverAddress: "",
      packageWeight: 0,
      rate: 50,
      totalPrice: 0    
    }
  }

  titles =["Sender Address Form"," Receiver address form","Package Weight Form "]; 

  steps =[];

  onComplete = function(){

  }

  saveSenderAddress  = (address) => {
  this.setState((prevState, props) => ({
    senderAddress :address
  }));

  }
  saveReceiverAddress = (address) => {
        this.setState((prevState, props) => ({

        receiverAddress : address

        }));
  }
  savePacketWeight = (weight) => {
            this.setState((prevState, props) => ({

    packageWeight :  weight

        }));
  }


  handleNextClick = (e) => {
    this.setState((prevState, props) => ({
      currentState: prevState.currentState +1,
    }));

        this.setState((prevState, props) => ({
        previousButtonEnabled : prevState.currentState === 0 ? false : true,
        nextButtonEnabled : prevState.currentState ===2 ?false : true,
        printShippingLabel : prevState.currentState === 2 ? true : false
    }));
  }

  handlePreviousClick = (e) => {
    this.setState((prevState, props) => ({
      currentState: prevState.currentState -1,
 
    }));

        this.setState((prevState, props) => ({
        previousButtonEnabled : prevState.currentState === 0 ? false : true,
        nextButtonEnabled : prevState.currentState ===2 ?false : true,
        printShippingLabel : prevState.currentState === 2 ? true : false
    }));

  }

  handlePrintLabelClick = (e) => {
    this.setState((prevState, props) => ({
      displayLabel : true,
    totalPrice : prevState.rate * prevState.packageWeight
 
    }));
  }
  
 render() {
    return (
     <div>
       <div>{this.props.title}</div>
       {this.state.displayLabel ? <ShippingLabelView data={this.state}/> :
      <div>
       <div>
         { this.state.currentState === 0 ? <GetSenderAddress onSenderAddressChange={this.saveSenderAddress} title={this.titles[this.state.currentState]} />:"" }
       </div>
       <div>
         { this.state.currentState === 1 ? <GetReceiverAddress onReceiverAddressChange={this.saveReceiverAddress} title={this.titles[this.state.currentState]} />:"" }
       </div>
       <div>
         { this.state.currentState === 2 ? <GetPackageWeight onPackageWeightTextChange={this.savePacketWeight}  title={this.titles[this.state.currentState]} />:"" }
       </div>

       <div>
        {this.state.previousButtonEnabled ? 
        <button onClick={this.handlePreviousClick} >
         Previous
      </button> : ""}
        {this.state.nextButtonEnabled ? 
        <button onClick={this.handleNextClick} >
         Next
      </button> : ""}
        {this.state.printShippingLabel ? 
        <button onClick={this.handlePrintLabelClick} >
         Print Shipping Label
      </button> : ""}
      </div>

      </div>}
      </div>
    );
  }
}


export default ShippingLabelMaker;