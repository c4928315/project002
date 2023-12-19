import React, { useEffect, useState } from "react";
import "./login.css";
import customIcons from "../../Icons/customIcons";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import useLocalContext from "../../Hooks/useLocalContext";

function Login({onLogin}) {
  const { auth, setAuth } = useLocalContext();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/"


  useEffect(() => {
    // Check if the user is already authenticated
    if (auth.user) {
      navigate(from, { replace: true });
    }
  }, [auth, from, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setLoading(true);
      setError(null);

      if (!userName || !password) {
        setError("Username and password are required");
        return;
      }

      const response = await axios.post(
        "https://saharadeskrestapi.azurewebsites.net/api/Auth",
        {
          userName,
          password,
        }
      );

      const bearerToken = response?.data?.bearerToken;
      const user = response?.status === 200;
      const claims = response?.data?.claims;

      setAuth({ userName, user, password, bearerToken, claims });

      localStorage.setItem("auth", JSON.stringify({ userName, user, bearerToken, claims }));

      onLogin();
      console.log(response);

      setUserName("")
      setPassword("")

      navigate(from, { replace: true });
      
    } catch (error) {
      setError("Invalid username or password");
    } finally {
      setLoading(false);
    }
  };

  console.log(auth)

  return (
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
              Seamless connections, soaring careers. Elevate yours with comapany
              name!
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
                <button className="loginBtn loginBtn2">
                  <span>
                    <customIcons.googleC />
                  </span>
                  <span>Login with Google</span>
                </button>

                <div className="inquiry">
                  <p>
                    don't have an account <b>sign up</b>
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
  );
}

export default Login;
