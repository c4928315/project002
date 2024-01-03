import React, { useState } from 'react'
import useFetch from '../../../../Hooks/useFetch';
import "./addCompany.css"

function AddCompany({close}) {
    const [startDate, setStartDate] = useState(new Date());

    const [formData, setFormData] = useState({
      name: "",
      headQuarters: "",
      email: "",
      phoneNumber: "",
      description: "",
      location: "",
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handlePostJob = async () => {
      try {
        const response = await fetch(
          "https://efmsapi-staging.azurewebsites.net/api/Companies/addCompanies",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...formData,
              createdBy: "string",
              modifiedBy: "string",
            }),
          }
        );
  
        if (response.ok) {
          console.log("Job posted successfully!");
          close();
        } else {
          console.error("Failed to post job:", response.statusText);
        }
      } catch (error) {
        console.error("Error posting job:", error.message);
      }
    };
  
    const { data: companyDropdown } = useFetch(
      "https://efmsapi-staging.azurewebsites.net/api/Companies/getCompaniesDropDown"
    );
  
    console.log(companyDropdown);
  return (
   <div className="postForm addCompanyLabel">
    <h3 className="sectionH3">Add Companies</h3>
        <div className="postFormInputContainer">
          <label>Company Name</label>
          <input
            type="text"
            className="postFormInput"
            placeholder="Input Value"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="postFormInputContainer">
          <label>Company Headquaters</label>
          <input
            type="text"
            className="postFormInput"
            placeholder="Input Value"
            name="headQuarters"
            value={formData.headQuarters}
            onChange={handleInputChange}
          />
        </div>
        <div className="postFormInputContainer">
          <label>Company Contact Email</label>
          <input
            type="email"
            className="postFormInput"
            placeholder="Input Value"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="postFormInputContainer">
          <label>Company Contact Phone</label>
          <input
            type="text"
            className="postFormInput"
            placeholder="Input Value"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="postFormInputContainer">
          <label>Company Description</label>
          <input
            type="text"
            className="postFormInput"
            placeholder="Input Value"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="postFormInputContainer">
          <label>Location</label>
          <input
            type="text"
            className="postFormInput"
            placeholder="Input Value"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
          />
        </div>

        <div className="allFormBtnContainers">
          <button  onClick={handlePostJob}>Add Company</button>
          <button  onClick={close}>Cancel</button>
        </div>
      </div> 
  )
}

export default AddCompany
