import React, { Component } from 'react';

class ShippingLabelView extends Component {

 render() {
    return (
      <div>

          <h5>Sender Address:  {this.props.data.senderAddress} </h5>
          <h5>
          Receiver Address:  {this.props.data.receiverAddress}

          </h5>
          <h5>
          Package weight:  {this.props.data.packageWeight}

          </h5>
          <h5>
          PerKg Rate : {this.props.data.rate}

          </h5>
          <h5>
          Total Price:  {this.props.data.totalPrice}

          </h5>
            
      </div>
    );
}

}
export default ShippingLabelView;