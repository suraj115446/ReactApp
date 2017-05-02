import React, { Component } from 'react';
import './App.css';
import ShippingLabelMaker from './core/components/wizard//ShippingLabelMaker';

class App extends Component {

 render() {
    return (
      <div>
       <ShippingLabelMaker title={"Shipping Label Maker"}/>
      </div>
    );
  }
}


export default App;
