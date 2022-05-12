import { useState,useReducer,useEffect, } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Container,Row,Col,Card,ListGroup,Alert,Badge } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async'
import Rating from './Rating';


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

  const [{loading,product,error}, dispatch] = useReducer(reducer,{
    loading: false,
    product: {},
    error: '',
  });


//erokom kemne pass hobe data apne bolen string e :id disen 
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
