// App.js

import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "../../Components/Footer/footer";
import Layout from "../../Components/Layout/layout";
import Login from "../../Components/Login/login";
import Nav from "../../Components/Nav/nav";
import RequireAuth from "../../Components/RequireAuth";
import Home from "../Home/home";
import JobDetail from "../JobDetail/jobDetail";
import "./App.css";
import useFetch from "../../Hooks/useFetch";
import JobResults from "../../Components/JobSearchResults/JobResults";
import PostJob from "../../Components/Forms/PostJob/postJob";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { data: recent } = useFetch(
    "https://intra-deco.onrender.com/openPositions"
  );

  const handleLogin = () => {
    setIsAuthenticated(true);
    console.log("Logged");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const location = useLocation();

  const excludeNav = ["/login"]
  const excludeFooter = ["/login", "/jobs/results"]

  const isExcludeNav = excludeNav.includes(location.pathname)
  const isExcludeFooter = excludeFooter.includes(location.pathname)

  return (
    <div className="App">
      {!isExcludeNav && <Nav />}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<RequireAuth/>}>
            <Route path="/jobs/:id/:jobTitle" element={<JobDetail />} />
          </Route>
          <Route path="/" element={<Home data={recent}/>} />
          
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/AdminArea" element={<PostJob />} />
          <Route path="/jobs/results" element={<JobResults />} />

        </Route>
      </Routes>
      {!isExcludeFooter && <Footer />}
    </div>
  );
}

export default App;
