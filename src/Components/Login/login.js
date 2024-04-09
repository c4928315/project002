import React, { useEffect, useState } from "react";
import "./login.css";
import customIcons from "../../Icons/customIcons";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useLocalContext from "../../Hooks/useLocalContext";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

function Login({ onLogin }) {
  const { auth, setAuth } = useLocalContext();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    // Check if the user is already authenticated
    if (auth.user) {
      navigate(from, { replace: true });
    }
  }, [auth, from, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError(null);

      if (!userName || !password) {
        setError("Username and password are required");
        return;
      }

      const response = await axios.post(
        "https://efmsapi-staging.azurewebsites.net/api/Login/jobLogin",
        {
          email: userName,
          password,
        }
      );

      const bearerToken = response?.data?.bearerToken;
      const user = response?.status === 200;
      const claims = response?.data?.claims;
      setData(response)

      setAuth({ email: userName, user, password, bearerToken, claims });

      localStorage.setItem(
        "auth",
        JSON.stringify({ email: userName, user, bearerToken, claims })
      );

      onLogin();
      console.log(response);

      setUserName("");
      setPassword("");

      navigate(from, { replace: true });
    } catch (error) {
      setError("Invalid username or password");
    } finally {
      setLoading(false);
    }
  };

  console.log("data", data);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formStatus, setFormStatus] = useState(true);

  const [email, setEmail] = useState("");
  const [key, setKey] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");

  console.log(email);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError(null);

      // You can perform validation here before sending the request
      const response = await axios.post(
        "https://efmsapi-staging.azurewebsites.net/api/Login/addUser",
        {
          roleId: 0,
          email: email,
          password: key,
          firstName: firstName,
          lastName: lastName,
          phoneNumber: number,
          isActive: true,
          isDeleted: true,
        }
      );

      console.log(response);

      // Optionally, you can auto-login the user after registration
      // For example:
      // setAuth({ userName: email, user: true }); // Assuming the response returns the user details

      // Clear registration form fields after successful registration
      setEmail("");
      setKey("");
      setFirstName("");
      setLastName("");
      setNumber("");

      // Redirect the user to a login page or any other page as per your app's flow
      // navigate("/login"); // Redirect to login page after successful registration
    } catch (error) {
      setError("Registration failed. Please try again."); // Handle registration failure
    } finally {
      setLoading(false);
    }
  };

  function handlecallbackresponse(response) {
    console.log("Encoded JWT ID token" + response);
  }

  return (
    <>
      {formStatus ? (
        <div className="loginContainer">
          <div className="loginLeft">
            <div className="loginLeftInner">
              <div className="loginLeftPosition">
                <div className="loginBrand">
                  <h4>Brand</h4>
                </div>
                <div className="loginHeader">
                  <h1>Welcome to Your Brand</h1>
                </div>
                <div className="loginP">
                  <p>
                    Seamless connections, soaring careers. Elevate yours with
                    comapany name!
                  </p>
                </div>
                <div className="loginForm">
                  <form onSubmit={handleSubmit}>
                    <div className="loginInputsContainer">
                      <span>
                        <customIcons.email size={18} />
                      </span>
                      <input
                        type="email"
                        className="loginInputs"
                        placeholder="enter email"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                      />
                    </div>

                    <div className="loginInputsContainer">
                      <span>
                        <customIcons.passWord size={18} />
                      </span>
                      <input
                        type="password"
                        className="loginInputs"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>

                    <div className="loginFormBtnContainer">
                      <button type="submit" className="loginBtn loginBtn1">
                        Login
                      </button>
                      <div className="loginOr">
                        <p>or</p>
                        <div className="loginLine"></div>
                      </div>
                      <GoogleLogin
                        style={{ width: "500px" }}
                        onSuccess={async (credentialResponse) => {
                          try {
                            setLoading(true);
                            setError(null);

                            const credentialResponseDecode = jwtDecode(
                              credentialResponse.credential
                            );

                            setAuth({
                              email: credentialResponseDecode.email,
                              user: true,
                              bearerToken: credentialResponse.credential,
                              claims: {},
                            });

                            localStorage.setItem(
                              "auth",
                              JSON.stringify({
                                email: credentialResponseDecode.email,
                                user: true,
                                bearerToken: credentialResponse.credential,
                                claims: {},
                              })
                            );

                            navigate(from, { replace: true });
                          } catch (error) {
                            setError(
                              "Failed to authenticate via Google. Please try again."
                            );
                          } finally {
                            setLoading(false);
                          }
                        }}
                        onError={() => {
                          console.log("Login Failed");
                        }}
                      />

                      <div className="inquiry">
                        <p>
                          don't have an account{" "}
                          <b
                            onClick={() => setFormStatus(false)}
                            style={{ cursor: "pointer" }}
                          >
                            sign up
                          </b>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="loginUsers">
              <div className="loginUsersInner">
                <div className="loginUserImgContainer">
                  <div className="loginUserImg">
                    <img
                      src="https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt=""
                    />
                  </div>
                  <div className="loginUserImg loginUserImgAb1">
                    <img
                      src="https://images.pexels.com/photos/1370719/pexels-photo-1370719.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt=""
                    />
                  </div>
                  <div className="loginUserImg loginUserImgAb2">
                    <img
                      src="https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt=""
                    />
                  </div>
                </div>
                <div className="loginUsersInnerText">
                  <h5>Join our family of 200+ users</h5>
                  <p>all the connection you need</p>
                </div>
              </div>
              <div className="loginUsersInnerIcon">
                <customIcons.downRight size={23} />
              </div>
            </div>
          </div>
          <div className="loginRight"></div>
        </div>
      ) : (
        <div className="MainSignUp">
          <div className="signUpLeft">
            <div className="signUpMainHeaderCo">
              <h1>Create your account. No credit card needed.</h1>
              <div className="loginP loginP2">
                <p>
                  Send your first emails in a few minutes. Already have an
                  account?
                  <Link
                    style={{
                      color: "rgb(44, 85, 92)",
                      textDecoration: "underline",
                      textTransform: "capitalize",
                    }}
                    onClick={() => setFormStatus(true)}
                  >
                    Login
                  </Link>
                </p>
              </div>
            </div>
            <form>
              <div className="mainSignUpFormDiv">
                <input
                  className="signUpInput signUpInputReal"
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mainSignUpFormDiv">
                <input
                  className="signUpInput signUpInputReal"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setKey(e.target.value)}
                />
              </div>
              <div className="mainSignUpFormDiv">
                <input
                  className="signUpInput signUpInputReal"
                  type="text"
                  placeholder="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="mainSignUpFormDiv">
                <input
                  className="signUpInput signUpInputReal"
                  type="text"
                  placeholder="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="mainSignUpFormDiv">
                <input
                  className="signUpInput signUpInputReal"
                  type="text"
                  placeholder="Phone Number"
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>

              <div className="loginFormBtnContainer">
                <div className="loginOr loginOr2">
                  <p className="signUpPLine">OR</p>
                </div>
                <div className="mainSignUpFormDiv">
                  <button
                    className="loginBtn loginBtn2"
                    style={{ width: "90%", borderRadius: "12px" }}
                  >
                    <span>
                      <customIcons.googleC />
                    </span>
                    <span>Sign Up with Google</span>
                  </button>
                </div>

                <br />
                <br />
                <div className="mainSignUpFormDiv">
                  <button
                    type="submit"
                    className="signUpInput signUpInputBtn"
                    onClick={handleRegister}
                  >
                    submit
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="signUpRight"></div>
        </div>
      )}
    </>
  );
}

export default Login;
