import { useContext,useState } from 'react'
// import { Helmet } from 'react-helmet-async'
import { Container,Row,Col,Alert,ListGroup, Button,Form } from 'react-bootstrap'
import { Store } from '../Store'
import { Link,useNavigate } from "react-router-dom";



const CartPage = () => {
  // let navigate = useNavigate(); 

  const {state, dispatch: ctxDispatch} = useContext(Store)
  const {cart: {cartItems}} = state

 
  let updateCart = (item,quantity)=>{  
    ctxDispatch({
      type: 'CART_ADD_ITEMS', 
      payload: {...item,quantity}
    })
  }
    
  let handleRemoveItem = (item)=>{  
    ctxDispatch({
      type: 'CART_REMOVE_ITEMS', 
      payload: item  
    })
  }
  

  return (
    <Container>
      {/* <Helmet>
        <title>Shopping Cart</title>
      </Helmet> */}

      <Row>
        <Col lg={8}>
          {cartItems.length < 0 
        ?
          <Alert variant="danger">
            Cart is Empty
          </Alert>
        :
          <ListGroup>
            {cartItems.map((item)=>(
              <ListGroup.Item>
                <Row>
                  <Col lg={4}>
                    <img width="50" src={item.img}></img>
                    <Link to={`/products/${item.slug}`}>
                      {item.name}
                    </Link>
                  </Col>

                  <Col lg={3}>
                    <Button 
                      onClick={()=> updateCart(item,item.quantity+1)} 
                      disabled={item.quantity === item.instock} 
                      variant="success">
                      +
                    </Button>

                    <span>{item.quantity}</span>

                    <Button 
                      onClick={()=> updateCart(item,item.quantity-1)} 
                      disabled={item.quantity === 1} 
                      variant="success">
                      -
                    </Button>
                  </Col>
                  
                  <Col lg={3}>
                    <Button 
                      onClick={()=>handleRemoveItem(item)} 
                      variant="danger">
                      Delete
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        }
        </Col>
      </Row>
    </Container>
  )
}

export default CartPage
