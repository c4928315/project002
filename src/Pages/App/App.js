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
import AddCompany from "../../Components/Admin/Forms/AddCompany/addCompany";
import EditCompany from "../../Components/Admin/Forms/EditCompany/editCompany";
import AllJobResults from "../../Components/allJobs";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { data: recent } = useFetch(
    "https://efmsapi-staging.azurewebsites.net/api/Jobs/getAllJobsByCategory?jobCategoryId=0"
  );

  const handleLogin = () => {
    setIsAuthenticated(true);
    console.log("Logged");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const location = useLocation();

  const excludeNav = ["/login", "/AdminArea"]
  const excludeFooter = ["/login", "/jobs/results", "/AdminArea"]

  const isExcludeNav = excludeNav.includes(location.pathname)
  const isExcludeFooter = excludeFooter.includes(location.pathname)

  return (
    <div className="App">
      {!isExcludeNav && <Nav />}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<RequireAuth/>}>
          <Route path="/AdminArea" element={<PostJob />} />
          </Route>
          <Route path="/" element={<Home data={recent}/>} />
          <Route path="/jobs/:id/:jobTitle" element={<JobDetail />} />
          
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          
          <Route path="/jobs/results" element={<JobResults />} />
          <Route path="/allJobs/results" element={<AllJobResults data={recent}/>} />
          <Route path="/addCompany" element={<AddCompany />} />
          <Route path="/editCompany/:id" element={<EditCompany />} />

        </Route>
      </Routes>
      {!isExcludeFooter && <Footer />}
    </div>
  );
}

export default App;
