import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../../Hooks/useFetch";
import customIcons from "../../../Icons/customIcons";
import AddJobCategory from "../Forms/AddJobCategory/addJobCategory";
import EditEntity from "../Forms/EditCompany/editEntity";

function JobCategory() {
  const { data: jobCategory } = useFetch(
    "https://efmsapi-staging.azurewebsites.net/api/JobsCategory/getAllJobsCategories"
  );

  const [showAddCategory, setShowAddCategory] = useState(false);
  const [showEditCategory, setShowEditCategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categoryFields = [
    { name: "name", label: "Category Name", required: true },
    { name: "description", label: "Category Description" },
  ];

  const closeForm = () => {
    setShowAddCategory(!showAddCategory);
  };

  const closeEditForm = () => {
    setShowEditCategory(!showEditCategory);
  };

  const handleEdit = (category) => {
    setSelectedCategory(category);
    setShowEditCategory(true);
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
        `https://efmsapi-staging.azurewebsites.net/api/JobsCategory/deleteJobsCategory?id=${companyId}`,
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

  return (
    <div className="">
      <div className="companiesInner">
        <div className="companiesTop">
          <Link onClick={closeForm}>New Category</Link>
          <h1>Job Categories</h1>
        </div>

        <div className="tbl-header">
          <table cellpadding="0" cellspacing="0" border="0">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>created By</th>
                <th className="actions"></th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="tbl-content">
          <table cellpadding="0" cellspacing="0" border="0">
            <tbody>
              {jobCategory.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.createdBy}</td>
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
      {showAddCategory && (
        <div className="showForm">
          <div className="showFormFixed">
            <div className="showFormFixedScroll">
              <AddJobCategory close={closeForm} />
            </div>
          </div>
        </div>
      )}
      {showEditCategory && (
        <div className="showForm">
          <div className="showFormFixed">
            <div className="showFormFixedScroll">
              <EditEntity
                initialData={selectedCategory}
                apiEndpoint="https://efmsapi-staging.azurewebsites.net/api/JobsCategory/updateJobsCategory"
                fields={categoryFields}
                onUpdate={closeEditForm}
                onCancel={closeEditForm}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default JobCategory;
