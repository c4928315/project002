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
import OpenJobs from "../../Components/OpenJobs/openJobs";
import ViewService from "../../Components/ViewService/viewService";
import ViewLinkedIn from "../../Components/ViewService/viewLinkedIn";
import ViewInterview from "../../Components/ViewService/viewInterview";
import ViewStudentPack from "../../Components/ViewService/viewStudentPack";
import ViewCoachingSesh from "../../Components/ViewService/viewCoachingSession";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { data: recent } = useFetch(
    "https://efmsapi-staging.azurewebsites.net/api/Jobs/getAllJobsByCategory?jobCategoryId=0"
  );

  const idsToExclude = [ 30, 31, 32, 33, 34, 35, 36, 38 ];

  const filteredData = recent.filter(item => !idsToExclude.includes(item.jobsId));


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
          <Route path="/" element={<Home data={filteredData}/>} />
          <Route path="/jobs/:id/:jobTitle" element={<JobDetail />} />
          
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          
          <Route path="/jobs/results" element={<JobResults />} />
          <Route path="/allJobs/results" element={<AllJobResults data={filteredData}/>} />
          <Route path="/addCompany" element={<AddCompany />} />
          <Route path="/editCompany/:id" element={<EditCompany />} />
          <Route path="/openJobs" element={<OpenJobs data={filteredData}/>} />
          <Route path="/viewService" element={<ViewService/>} />
          <Route path="/viewLinkedIn" element={<ViewLinkedIn/>} />
          <Route path="/viewInterview" element={<ViewInterview/>} />
          <Route path="/viewLStudentPack" element={<ViewStudentPack/>} />
          <Route path="/viewCoachingSesh" element={<ViewCoachingSesh/>} />

        </Route>
      </Routes>
      {!isExcludeFooter && <Footer />}
    </div>
  );
}

export default App;
