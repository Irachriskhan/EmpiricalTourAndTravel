// import { useState, useContext } from "react";
// import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
// import { Link, useNavigate } from "react-router-dom";
// import "../styles/login.css";
// import loginImg from "../assets/images/login.png";
// import userIcon from "../assets/images/user.png";
// import { AuthContext } from "./../context/AuthContext";
// import { BASE_URL } from "./../utils/config";

// const Login = () => {
//   const [credentials, setCredentials] = useState({
//     email: "",
//     password: "",
//   });

//   const { dispatch } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
//   };

//   const handleClick = async (e) => {
//     e.preventDefault();
//     dispatch({ type: "LOGIN_START" });

//     try {
//       const res = await fetch(`${BASE_URL}/auth/login`, {
//         method: "post",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         credentials: "include",
//         body: JSON.stringify(credentials),
//       });

//       const result = await res.json();
//       console.log(result);
//       if (!res.ok) {
//         alert(result.message);
//         dispatch({ type: "LOGIN_FAILURE", payload: result.message });
//         return;
//       }

//       dispatch({ type: "LOGIN_SUCCESS", payload: result.data });

//       if (result.role === "admin") {
//         navigate("/admin");
//       } else {
//         navigate("/");
//       }
//     } catch (err) {
//       dispatch({ type: "LOGIN_FAILURE", payload: err.message });
//     }
//   };

//   return (
//     <section>
//       <Container>
//         <Row>
//           <Col lg="8" className="m-auto">
//             <div className="login__container d-flex justify-content-between">
//               <div className="login__img">
//                 <img src={loginImg} alt="" />
//               </div>

//               <div className="login__form">
//                 <div className="user">
//                   <img src={userIcon} alt="" />
//                 </div>
//                 <h2>Login</h2>

//                 <Form onSubmit={handleClick}>
//                   <FormGroup>
//                     <input
//                       type="email"
//                       placeholder="Email"
//                       required
//                       id="email"
//                       value={credentials.email}
//                       onChange={handleChange}
//                     />
//                   </FormGroup>
//                   <FormGroup>
//                     <input
//                       type="password"
//                       placeholder="Password"
//                       required
//                       id="password"
//                       value={credentials.password}
//                       onChange={handleChange}
//                     />
//                   </FormGroup>
//                   <Button className="btn secondary__btn auth__btn" type="submit">
//                     Login
//                   </Button>
//                 </Form>
//                 <p>
//                   Don't have an account? <Link to="/register">Create</Link>
//                 </p>
//                 <p>
//                   Forgot your password? <Link to="/forgot-password">Reset it</Link>
//                 </p>
//               </div>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };
// export default Login;
import { useState, useContext } from 'react';
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login.css';
import loginImg from '../assets/images/login.png';
import userIcon from '../assets/images/user.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import the icons
import { AuthContext } from './../context/AuthContext';
import axios from 'axios';
import { BASE_URL } from './../utils/config';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
   
  const [showPassword, setShowPassword] = useState(false)
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });

    try {
      const res = await axios.post(`${BASE_URL}/auth/login`, credentials);
      console.log('Response data:', res.data);

      if (res.data && res.data.data && res.data.token && res.data.role) {
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: { user: res.data.data, token: res.data.token, role: res.data.role },
        });

        if (res.data.role === 'admin') {
          navigate('/admin');
        } else {
          navigate('/');
        }
      } else {
        throw new Error('Invalid response data structure');
      }
    } catch (err) {
      console.error('Login error:', err);
      const errorMessage = err.response?.data?.message || 'An error occurred during login';
      alert(errorMessage);
      dispatch({ type: 'LOGIN_FAILURE', payload: errorMessage });
    }
  };

  const toggleShowPassword = () =>{
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={loginImg} alt="" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Login</h2>

                <Form onSubmit={handleClick}>
                  <FormGroup >
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      id="email"
                      value={credentials.email}
                      onChange={handleChange}
                    />
                  
                    </FormGroup>
                  <FormGroup className='position-relative'>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      required
                      id="password"
                      value={credentials.password}
                      onChange={handleChange}
                    />
                      <span
                    onClick={toggleShowPassword}
                    className='position-absolute'
                    style={{ top:'50%', right: '10px', transform: 'translateY(-50%)', cursor: 'pointer'}}
                  >
                  {showPassword ? <FaEyeSlash /> : <FaEye/>}
                    </span>
                  </FormGroup>
                  <Button className="btn secondary__btn auth__btn" type="submit">
                    Login
                  </Button>
                </Form>
                <p>
                  Don't have an account? <Link to="/register">Create</Link>
                </p>
                <p>
                  Forgot your password? <Link to="/forgot-password">Reset it</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;




