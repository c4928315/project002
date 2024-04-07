import React, { useState, useEffect } from "react";
import "./editCompany.css";

function EditCompany({ companyData, close }) {
  const [initialCompanyValues, setInitialCompanyValues] = useState({
    id: 0,
    name: companyData.name,
    description: companyData.description,
    phoneNumber: companyData.phoneNumber,
    headQuarters: companyData.headQuarters,
    email: companyData.email,
    location: companyData.location,
    createdBy: companyData.createdBy,
    modifiedBy: companyData.modifiedBy,
    attachment: ""
  });
  

  const [company, setCompany] = useState(initialCompanyValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCompany((prevCompany) => ({
      ...prevCompany,
      [name]: value,
    }));
  };

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  const handleUpdateCompany = async () => {
    if (
      !company.name ||
      !company.headQuarters ||
      !company.email ||
      !company.phoneNumber
    ) {
      console.error("Please fill in all required fields");
      return;
    }

    try {
      const response = await fetch(
        `https://efmsapi-staging.azurewebsites.net/api/Companies/updateCompany?id=${companyData.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(company),
        }
      );

      if (response.ok) {
        console.log("Company updated successfully!");
        close();
      } else {
        console.error("Failed to update company:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating company:", error.message);
    }
  };

  console.log(company.name);

  return (
    <div className="editContainer">
      <form className="postForm">
        <h2 className="mainHeaderEdit">Edit Company {companyData.name}</h2>
        <div className="postFormInputContainer">
          <label className="allFormLabels">Company Name</label>
          <input
            type="text"
            className="postFormInput allFormInputs"
            name="name"
            value={company.name}
            onChange={handleInputChange}
          />
        </div>

        <div className="postFormInputContainer">
          <label className="allFormLabels">Company Headquaters</label>
          <input
            onChange={handleInputChange}
            type="text"
            className="postFormInput allFormInputs"
            placeholder="Input Value"
            name="headQuarters"
            value={company.headQuarters}
          />
        </div>
        <div className="postFormInputContainer">
          <label className="allFormLabels">Company Contact Email</label>
          <input
            onChange={handleInputChange}
            type="email"
            className="postFormInput allFormInputs"
            placeholder="Input Value"
            name="email"
            value={company.email}
          />
        </div>
        <div className="postFormInputContainer">
          <label className="allFormLabels">Company Contact Phone</label>
          <input
            onChange={handleInputChange}
            type="text"
            className="postFormInput allFormInputs"
            placeholder="Input Value"
            name="phoneNumber"
            value={company.phoneNumber}
          />
        </div>
        <div className="postFormInputContainer">
          <label className="allFormLabels">Company Description</label>
          <input
            onChange={handleInputChange}
            type="text"
            className="postFormInput allFormInputs"
            placeholder="Input Value"
            name="description"
            value={company.description}
          />
        </div>
        <div className="postFormInputContainer">
          <label className="allFormLabels">Location</label>
          <input
            onChange={handleInputChange}
            type="text"
            className="postFormInput allFormInputs"
            placeholder="Input Value"
            name="location"
            value={company.location}
          />
        </div>
        <div className="allFormBtnContainers">
          <button type="button" onClick={handleUpdateCompany}>
            Update Company
          </button>
          <button type="button" onClick={close}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditCompany;
