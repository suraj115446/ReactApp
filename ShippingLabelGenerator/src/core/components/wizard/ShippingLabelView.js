import React, { Component } from 'react';
import {Row,Col} from 'react-bootstrap';

class ShippingLabelView extends Component {


 render() {
    return (
      <div>
            <Row>
                <Col xs={6} md={4} lg={4}>Sender Address: </Col>
                <Col xs={6} md={8} lg={4}><b>{this.props.data.senderAddress}</b></Col>
            </Row>
            <Row>
                <Col xs={6}  md={4} lg={4}>Receiver Address: </Col>
                <Col xs={6} md={8} lg={4}>{this.props.data.receiverAddress}</Col>
            </Row>
            <Row>
                <Col xs={6}  md={4} lg={4}>Package weight: </Col>
                <Col xs={6} md={8} lg={4}>{this.props.data.packageWeight}</Col>
            </Row>
            <Row>
                <Col xs={6}  md={4} lg={4}>PerKg Rate: </Col>
                <Col xs={6} md={8} lg={4}>{this.props.data.rate}</Col>
            </Row>
            <Row>
                <Col xs={6}  md={4} lg={4}>Total Price: </Col>
                <Col xs={6} md={8} lg={4}>{this.props.data.totalPrice}</Col>
            </Row>
     
      </div>
    );
}

}
export default ShippingLabelView;