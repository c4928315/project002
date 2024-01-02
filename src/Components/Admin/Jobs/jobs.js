import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import customIcons from "../../../Icons/customIcons";
import useFetch from "../../../Hooks/useFetch";
// import AddCompany from "../../Forms/AddCompany/addCompany";
import EditCompany from "../Forms/EditCompany/editCompany";
import AddJobs from "../Forms/AddJobs/addJobs";

function DisplayJobs() {
  const [editCompanId, setEditCompanyId] = useState(null);
  const [showAddCompany, setShowAddCompany] = useState(false);
  const [showEditCompany, setShowEditCompany] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const { data: allCompanies } = useFetch(
    "https://efmsapi-staging.azurewebsites.net/api/Companies/getAllCompanies"
  );

  const closeForm = () => {
    setShowAddCompany(!showAddCompany);
  };

  const closeEditForm = () => {
    setShowEditCompany(!showEditCompany);
  };

  const handleDelete = async (companyId) => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this company?"
    );

    if (!shouldDelete) {
      return;
    }
    try {
      const response = await fetch(
        `https://efmsapi-staging.azurewebsites.net/api/Companies/deleteCompany?id=${companyId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        console.log("Company deleted successfully!");
      } else {
        console.error("Failed to delete company:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting company:", error.message);
    }
  };

  const handleEdit = (company) => {
    setSelectedCompany(company);
    setShowEditCompany(true); 
  };

  return (
    <div className="companiesContainer">
      <div className="companiesInner">
        <div className="companiesTop">
          <Link onClick={closeForm}>New Company</Link>
          <h1>Companies</h1>
        </div>

        <div class="tbl-header">
          <table cellpadding="0" cellspacing="0" border="0">
            <thead>
              <tr>
                <th>Name</th>
                <th>Headquaters</th>
                <th>Email</th>
                <th>Phone No.</th>
                <th>Location</th>
                <th className="actions"></th>
              </tr>
            </thead>
          </table>
        </div>
        <div class="tbl-content">
          <table cellpadding="0" cellspacing="0" border="0">
            <tbody>
              {allCompanies.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>{item.name}</td>
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

                      <div class="dropdown">
                        <ul class="dropdown-menu">
                          <li>
                            <Link
                              class="dropdown-item"
                              onClick={() => handleEdit(item)}
                            >
                              <customIcons.edit />
                              <span>Edit</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              class="dropdown-item"
                              onClick={() => handleDelete(item.id)}
                            >
                              <customIcons.delete />
                              <span>Delete</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                );
              })}
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
              <EditCompany close={closeEditForm} companyData={selectedCompany}/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DisplayJobs;
