import { useContext, useState } from "react";
import {
  Button,
  Offcanvas,
  Table,
  Badge
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Store } from "../Store.js";
import { FaMinus, FaPlus } from "react-icons/fa";


const Offcanvs = () => {
    const {
        state,
        dispatch: ctxDispatch,
    } = useContext(Store);
    const {
        cart: { cartItems },
    } = state;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let updateCart = (item, quantity) => {
        ctxDispatch({
          type: "CART_ADD_ITEMS",
          payload: { ...item, quantity },
        });
    };
    
    let handleRemoveItem = (id) => {
    console.log(id);
    ctxDispatch({
        type: "CART_REMOVE_ITEMS",
        payload: id,
    });
    };



  return (
    <>
        <Button variant="primary" onClick={handleShow} className="me-2 sidebar">
          Cart
        </Button>

        <Offcanvas 
          show={show} 
          onHide={handleClose} 
          placement="end"   /* ete nije theke add korte hbe */
          >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
                <h2  style={{textAlign: "center"}}>Shopping Cart</h2>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Table striped bordered hover size="sm">
                  {state.cart.cartItems.length > 0 ? (
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Quanity </th>
                        <th>Total </th>
                        <th>Remove</th>
                      </tr>
                    </thead>
                  ) : (
                    <p className="text-center">No items in cart</p>
                  )}

                  {state.cart.cartItems.map((item) => {
                    return (
                      <>
                        <tr>
                          <td>{item.name}</td>
                          <td>
                            <img
                              src={item.img}
                              alt={item.name}
                              style={{ width: "100px" }}
                            />
                          </td>
                          <td>{item.price}</td>
                          <td>
                            <div className="d-flex align-items-center gap-2 justify">
                              <Button
                                onClick={() =>
                                  updateCart(item, item.quantity + 1)
                                }
                                disabled={
                                  item.quantity >= item.stock ? true : false
                                }
                              >
                                <FaPlus />
                              </Button>
                              <h6>{item.quantity}</h6>
                              <Button
                                variant="warning"
                                onClick={() =>
                                  updateCart(item, item.quantity - 1)
                                }
                                disabled={item.quantity <= 1 ? true : false}
                              >
                                <FaMinus />
                              </Button>
                            </div>
                          </td>
                          <td>{item.quantity * item.price}</td>
                          <td>
                            <div>
                              <Button
                                variant="danger"
                                onClick={() => {
                                  handleRemoveItem(item._id);
                                }}
                              >
                                Delete
                              </Button>
                            </div>
                          </td>
                        </tr>
                      </>
                    );
                  })}
            </Table>
            <Link to="/cartpage">
            <div className="text-center">
                {state.cart.cartItems.length > 0 ? (
                    <Button className="primary w-100">Go to Cart</Button>
                ) : (
                    ""
                )}
            </div>
            </Link>
            

            

          </Offcanvas.Body>
        </Offcanvas>
        <div className="my-2">
            {" "}
            <Badge pill bg="success">
            {state.cart ? state.cart.cartItems.length : 0}
            </Badge>
        </div>
    </>
  )
}

export default Offcanvs