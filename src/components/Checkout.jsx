// src/components/MyComponent.js
import React,{useEffect, useState} from 'react';
import { useSelector,useDispatch} from 'react-redux';
import { incrementQuantity,decrementQuantity } from '../Reducer/cartSlice';
import { Container, Row, Col, Image, Button, Form } from 'react-bootstrap';
const Checkout = () => {

const[price,setPrice]=useState(0)
    const dispatch = useDispatch();

    const handleIncrement = (item) => {
      dispatch(incrementQuantity(item.id));
    };
    

    const handleDecrement = (item) => {
        if(item.quantity>1)
      dispatch(decrementQuantity(item.id));
    };
    
    const cart= useSelector((state) => state.cart?.items);
    const total = ()=>{
        let price = 0;
         cart.map((ele,k)=>{
             price = ele.newPrice * ele.quantity + price
         });
        setPrice(price);
    };
    useEffect(()=>{
        total();
        
      },[total])
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1>Billing Information</h1>
          <form role="form">
                      
                      <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <label for="couponCode"> Name</label>
                                    <input type="text" class="form-control" name="name" />
                                </div>
                            </div>                        
                        </div>
                      
                    <div class="form-group">
                        <label for="cardNumber">
                            SHIPPING ADDRESS</label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="address" placeholder="Address"
                                required autofocus />
                            <span class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></span>
                        </div>
                    </div>
                    <div class="form-check">
  <input type="radio" class="form-check-input" id="radio1" name="optradio" value="cod" checked />COD
  <label class="form-check-label" for="radio1"></label>
</div>
<div class="form-check">
  <input type="radio" class="form-check-input" id="radio2" name="optradio" value="online" />ONLINE
  <label class="form-check-label" for="radio2"></label>
</div>
                    </form>
         
        </div>
        <div className="col-md-6">
          <h2>Product</h2>
          <Container>
          {cart.map((item) => (
  <Row key={item.id}>
    <Col md={6}>
      <Image src={item.image} fluid  style={{ width: '80px', height: '80px' }}/>
    </Col>
    <Col md={6}>
      <h4>{item.title}</h4>
      <p>Rs.{item.price}</p>
      <Form>
        <Form.Group>
          <Row>
            <Col>
              <Button variant="outline-secondary" onClick={() => handleDecrement(item)}>
                -
              </Button>
            </Col>
            <Col>
              {item.quantity}
            </Col>
            <Col>
              <Button variant="outline-secondary" onClick={() => handleIncrement(item)}>
                +
              </Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </Col>
  </Row>
))}

    </Container>
    <div className="row mt-3">
        <div className="col-md-6 fw-bold">Total Price:<span className='fw-semibold'>Rs:{price}</span></div>
        <div className="col-md-6"><button className="btn btn-secondary">Next</button></div>
    </div>
    

          
        </div>
      </div>
    </div>
  );
};

export default Checkout;
