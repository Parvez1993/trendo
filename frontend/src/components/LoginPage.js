import axios from "axios";
import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Store } from "../Store";
import "react-toastify/dist/ReactToastify.css";
function LoginPage() {
  const { search } = useLocation();
  const redirectURL = new URLSearchParams(search).get("redirect");
  console.log(redirectURL);
  const { dispatch, userState, userDispatch } = useContext(Store);

  let redirect = redirectURL ? redirectURL : "";

  console.log(redirect);

  // console.log(redirect);
  const [isMember, setIsMember] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isMember) {
      if (!email || !password) {
        console.log("email", "password");
        return toast("Fill out all the forms");
      }
      userDispatch({ type: "LOGIN_BEGIN" });
      try {
        const { data } = await axios.post(`http://localhost:4000/users/login`, {
          email,
          password,
        });

        console.log("paisi", data);

        userDispatch({
          type: "LOGIN_SUCCESS",
          payload: { email, password },
        });

        localStorage.setItem("userInfo", JSON.stringify(data));
        if (data) {
          navigate(`/${redirect}`);
        }
      } catch (error) {
        userDispatch({
          type: "LOGIN_FAIL",
          payload: { error: error.response.data.msg },
        });
        toast.error(error.response.data.msg);
      }
    } else {
      if (!email || !password || !name) {
        return toast("Fill out all the forms");
      }
      userDispatch({ type: "REGISTER_BEGIN" });
      try {
        const { data } = await axios.post(
          `http://localhost:4000/users/register`,
          {
            email,
            password,
            name,
          }
        );

        userDispatch({
          type: "REGISTER_SUCCESS",
          payload: { email, password, name },
        });

        localStorage.setItem("userInfo", JSON.stringify(data));

        if (data) {
          navigate(`/${redirect}`);
        }
      } catch (error) {
        userDispatch({
          type: "REGISTER_FAIL",
          payload: { error: error.response.data.msg },
        });
        toast.error(error.response.data.msg);
      }
    }
  };
  return (
    <Container>
      {userState.loading ? toast.warning("Please wait !!!") : ""}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="login">
        <div className="w-50 mx-auto border rounded">
          <form className="p-3">
            <h3 className="text-center my-3">
              {isMember ? "Sign in" : "Register"}
            </h3>

            {!isMember ? (
              <div className="form-group">
                <label>Name</label>
                <input
                  type="name"
                  className="form-control"
                  placeholder="Enter name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            ) : (
              ""
            )}
            <div className="form-group my-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group my-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              className="btn btn-dark btn-md w-100 btn-block my-3"
              onClick={handleSubmit}
            >
              {!isMember ? "Register" : "Sign in"}
            </button>
            <p className="text-right" onClick={() => setIsMember(!isMember)}>
              {isMember
                ? "Don't have an account? Click here"
                : "Already have an account click here"}
              {/* <a href={`/signup?redirect=${redirect}`}>password?</a> */}
            </p>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default LoginPage;
