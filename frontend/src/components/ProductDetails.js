import { useState,useReducer,useEffect, useContext, } from 'react';
import axios from 'axios';
import { useParams,Link } from "react-router-dom";
import { Container,Row,Col,Card,ListGroup,Alert,Badge,Form,Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async'
import Rating from './Rating';
import { Store } from '../Store';


function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return {...state, loading:true};
    case 'FETCH_SUCCESS':
      return {...state, loading:false, product:action.payload};
    case 'FETCH_FAILS':
      return {...state, loading:false, error:action.payload};
    default:
      return true
  }
}

const ProductDetails = () => {
  let params = useParams();

  const [cuponText, setCuponText] = useState("")
  const [errcupon, setErrcupon] = useState("")
  const [afterdiscountprice, setAfterdiscountprice] = useState("")

  const [{loading,product,error}, dispatch] = useReducer(reducer,{
    loading: false,
    product: {},
    error: '',
  });


  useEffect(()=>{
    async function fetchData() {
      dispatch({type: 'FETCH_REQUEST'})
      try{
        let {data} = await axios.get(`http://localhost:4000/products/${params.id}`)
        let {product}=data;
        console.log(product);
        dispatch({type: 'FETCH_SUCCESS', payload: product})

        
      }catch(err){
        dispatch({type: 'FETCH_FAILS', payload: err.message})
      }
    }
    fetchData();
  },[params.slug])

  const {state, dispatch: ctxDispatch} = useContext(Store)

  const {cart} = state

  let handleAddToCart = () =>{
    const existingItem = cart.cartItems.find((item)=>item._id === product._id)
    const quantity = existingItem ? existingItem.quantity + 1 : 1

    ctxDispatch({
      type: 'CART_ADD_ITEMS',
      payload: 
      {...product,quantity}
    })
  }

  let handleCuponText = (e) =>{
    setCuponText(e.target.value);
  }

  let handleCupon = () =>{
    if(product.coupon !== ""){
      if(product.coupon == cuponText){
        let discountprice = (product.price * product.discount) / 100
        let afterdiscountprice = product.price - discountprice
        setAfterdiscountprice(afterdiscountprice);
      }else{
        setErrcupon("Wrong Cupon Code");
      }
    }else{
      setErrcupon("not allow any cupon for this product")
    }
  }


  return(
    <Container>
      <Row>
      {product ?
          <>
            <Col lg={6}>
              {/* <img src={product.img} alt={product.name} /> */}
              {/* {product.img &&
                <ReactImageZoom {...props} />
              } */}
              <img className='w-50' src={product.img} alt={product.name} /> 
            </Col>

            <Col lg={3}>
            <Card style={{ width: '18rem' }}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h1>
                    {product.name} 
                  </h1>
                </ListGroup.Item>
                
                <ListGroup.Item>
                  <h4 className='model'>
                    size: {product.model}
                  </h4>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating 
                    rating={product.rating} 
                    numberofrating={product.numberofrating} 
                  />
                </ListGroup.Item>

                <ListGroup.Item>
                  {product.stock>0 ?
                    <h6>
                    Stock <Badge bg="success">{product.stock}</Badge>
                    </h6>
                    :
                    <h6>
                      Stock <Badge bg="danger">{product.stock}</Badge>
                    </h6>
                  }
                </ListGroup.Item>

                <ListGroup.Item className='subDetails'>
                <h4 className='price'>${product.price}</h4>
                </ListGroup.Item>

                <ListGroup.Item className='subDetails'>
                  {product.description}
                </ListGroup.Item>
              
              </ListGroup>
            </Card>
            </Col>

            <Col lg={3}>
            <ListGroup >
              <ListGroup.Item>
                <h5>
                  {afterdiscountprice
                  ?
                    <>
                      <h3>
                        Price: {''} 
                        <del>
                          ${product.price}
                        </del>
                        {' '}
                        ${afterdiscountprice}
                      </h3>
                    </>
                  :
                    <h3> 
                      Price: $
                      {product.price}
                    </h3>
                  }
                </h5>
              </ListGroup.Item>
              
              <ListGroup.Item>
                <Form.Control   
                  onChange={handleCuponText}
                  type="text" 
                  placeholder="coupon" 
                />

                <Form.Text className="text-muted">
                  {errcupon}
                </Form.Text>
                <br/>

                <Button
                  onClick={handleCupon}
                  variant="info">
                  Apply
                </Button>
                </ListGroup.Item>

                <ListGroup.Item>
                {product.stock == 0
                ?
                  <Button 
                    className='mt-1 w-100'
                    variant="danger"
                    >
                    Out of Stock
                  </Button>
                :
                  <Link to={"/cartpage"}>
                    <Button
                      className='w-100'
                      onClick={handleAddToCart}
                      variant="info">
                      Add to cart
                    </Button>
                  </Link>
                }
                </ListGroup.Item>
            </ListGroup>
            </Col>

            
          </>
          :
          <Alert className='text-center mt-5' variant={"danger"}>
            Product not found pls try another product
          </Alert>
        }
      </Row>
    </Container>
  ) 
}

export default ProductDetails
