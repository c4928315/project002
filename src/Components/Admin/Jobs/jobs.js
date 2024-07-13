import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import customIcons from "../../../Icons/customIcons";
import useFetch from "../../../Hooks/useFetch";
import EditCompany from "../Forms/EditCompany/editCompany";
import AddJobs from "../Forms/AddJobs/addJobs";

function DisplayJobs() {
  const [editCompanId, setEditCompanyId] = useState(null);
  const [showAddCompany, setShowAddCompany] = useState(false);
  const [showEditCompany, setShowEditCompany] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const { data: allJobs } = useFetch(
    "https://efmsapi-staging.azurewebsites.net/api/Jobs/getAllJobsByCategory?jobCategoryId=0"
  );

  const closeForm = () => {
    setShowAddCompany(!showAddCompany);
  };

  const closeEditForm = () => {
    setShowEditCompany(!showEditCompany);
  };

  const handleDelete = async (jobId) => {
    try {
      const response = await fetch(
        `https://efmsapi-staging.azurewebsites.net/api/Jobs/deleteJob?jobsId=${jobId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        console.log(`Job ${jobId} deleted successfully!`);
      } else {
        console.error(`Failed to delete job ${jobId}:`, response.statusText);
      }
    } catch (error) {
      console.error(`Error deleting job ${jobId}:`, error.message);
    }
  };

  const handleEdit = (company) => {
    setSelectedCompany(company);
    setShowEditCompany(true);
  };

  const deleteExpiredJobsInBatches = async (jobs, batchSize = 10) => {
    for (let i = 0; i < jobs.length; i += batchSize) {
      const batch = jobs.slice(i, i + batchSize);
      await Promise.all(batch.map(job => handleDelete(job.jobsId)));
    }
  };

  const checkAndDeleteExpiredJobs = async () => {
    const currentTime = new Date().getTime();
    const expiredJobs = allJobs.filter(job => new Date(job.endDate).getTime() <= currentTime);

    if (expiredJobs.length > 0) {
      await deleteExpiredJobsInBatches(expiredJobs);
    }
  };

  useEffect(() => {
    const runCheck = async () => {
      await checkAndDeleteExpiredJobs();
    };

    const intervalId = setInterval(runCheck, 24 * 60 * 60 * 1000);

    // Run the initial check immediately
    runCheck();

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [allJobs]);

  console.log("allJobs", allJobs)

  return (
    <div className="companiesContainer">
      <div className="companiesInner">
        <div className="companiesTop">
          <Link onClick={closeForm}>New Job Openings</Link>
          <h1>Jobs</h1>
        </div>

        <div className="tbl-header">
          <table cellPadding="0" cellSpacing="0" border="0">
            <thead>
              <tr>
                <th>Name</th>
                <th>Headquarters</th>
                <th>Email</th>
                <th>Phone No.</th>
                <th>Location</th>
                <th className="actions"></th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="tbl-content">
          <table cellPadding="0" cellSpacing="0" border="0">
            <tbody>
              {allJobs.map((item, i) => (
                <tr key={i}>
                  <td>{item.jobName}</td>
                  <td>{item.headQuarters}</td>
                  <td>{item.email}</td>
                  <td>{item.phoneNumber}</td>
                  <td>{item.location}</td>
                  <td className="actions">
                    <span
                      className="actionsKebab"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <customIcons.kebab size={18} />
                    </span>
                    <div className="dropdown">
                      <ul className="dropdown-menu">
                        <li>
                          <Link
                            className="dropdown-item"
                            onClick={() => handleEdit(item)}
                          >
                            <customIcons.edit />
                            <span>Edit</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            onClick={() => handleDelete(item.jobsId)}
                          >
                            <customIcons.delete />
                            <span>Delete</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {showAddCompany && (
        <div className="showForm">
          <div className="showFormFixed">
            <div className="showFormFixedScroll">
              <AddJobs close={closeForm} />
            </div>
          </div>
        </div>
      )}
      {showEditCompany && (
        <div className="showForm">
          <div className="showFormFixed">
            <div className="showFormFixedScroll">
              <EditCompany close={closeEditForm} companyData={selectedCompany} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DisplayJobs;
