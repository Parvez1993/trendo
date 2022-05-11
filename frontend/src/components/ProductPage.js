import React, { useEffect, useReducer } from "react"
import { Col, Container, Row,Card,Badge,Button,Form } from 'react-bootstrap';
import axios from 'axios'
import Rating from "./Rating";


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

const ProductPage = () => {

  const [{loading,product,error}, dispatch] = useReducer(reducer,{
    loading: false,
    product: [],
    error: '',
  });
  useEffect(()=>{
    async function fetchData() {
      dispatch({type: 'FETCH_REQUEST'})
      try{
        let product = await axios.get('http://localhost:4000/products/loadProducts')
        dispatch({type: 'FETCH_SUCCESS', payload: product.data})
      }catch(err){
        dispatch({type: 'FETCH_FAILS', payload: err.message})
      }
    }
    fetchData()
  },[])

  return (
    <Container>
      <Row className="mt-2 mb-2" >
        {product.map((item)=>(
          <Col lg={3} >
            <Card style={{height: 630, marginTop: 10, marginBottom: 10}}>
            <Card.Img variant="top" src={item.img} />
            <Card.Body className='py-0'
                style={{height: 40}}
            >
                <Card.Title className='mt-3 '>
                    {/* <Link to={`/products/${item.slug}`}>
                        <h4 className='title'>{item.title}</h4> {' '}
                    </Link> */}
                    <h4 className='title'>{item.name}</h4> {' '}
                </Card.Title>
                <h5 className='model'>
                  Category: {item.model}
                </h5>
                <Card.Text>
                    <Rating 
                        ratings={item.ratings} 
                        numberOfRatings={item.numberOfRatings} 
                    />
                </Card.Text>
                <Card.Text className='description'>
                    {item.description}
                </Card.Text>
            
                <Card.Text>
                    <h5 className='price'>
                      Price: ${item.price}
                    </h5>
                </Card.Text>
            </Card.Body>
            <Card.Body className="mt-2">
              {item.stock == 0
              ?
                <Button 
                  className='mt-5 w-100'
                  variant="danger"
                  >
                  Out of Stock
                </Button>
              :
                <Button 
                  className='mt-5 w-100 '
                  // onClick={()=> handleAddToCart(item)}
                  variant="info"
                  >
                  Add to Card
                </Button>
              }
          </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default ProductPage
