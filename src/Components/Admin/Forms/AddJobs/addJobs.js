import React, { useState } from "react";
import useFetch from "../../../../Hooks/useFetch";
import "./addJobs.css";

function AddJobs({ close }) {
  const [formData, setFormData] = useState({
    jobs: {
      endDate: "",
      jobName: "",
      jobDescription: "",
      companyId: 0,
      language: "",
      jobCategoriesId: 0,
    },
    createdBy: "",
    jobsAndSections: [
      {
        id: 0,
        sectionName: "",
        sectionDescription: "",
        jobTypesId: 0,
        dateCreated: "",
        dateModified: "",
        modifiedBy: "",
        isActive: true,
        isDeleted: true,
      },
    ],
  });

  const { data: companyDropdown } = useFetch(
    "https://efmsapi-staging.azurewebsites.net/api/Companies/getCompaniesDropDown"
  );

  const { data: jobCategoryDropdown } = useFetch(
    "https://efmsapi-staging.azurewebsites.net/api/JobsCategory/getJobsCategoriesDropDown"
  );

  const addSection = () => {
    setFormData((prevData) => ({
      ...prevData,
      jobsAndSections: [
        ...prevData.jobsAndSections,
        {
          id: 0,
          sectionName: "",
          sectionDescription: "",
          jobTypesId: 0,
          dateCreated: "",
          dateModified: "",
          modifiedBy: "",
          isActive: true,
          isDeleted: true,
        },
      ],
    }));
  };

  const handleInputChange = (e, sectionIndex) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      jobsAndSections: prevData.jobsAndSections.map((section, index) =>
        index === sectionIndex ? { ...section, [name]: value } : section
      ),
    }));
  };

  console.log(companyDropdown);
  return (
    <div className="postForm addCompanyLabel">
      <div className="input-group-array">
        <div className="postFormInputContainer">
          <label>Job Name</label>
          <input
            type="text"
            className="postFormInput"
            placeholder="Input Value"
          />
        </div>
        <div className="postFormInputContainer">
          <label>Company Description</label>
          <textarea className="postFormInput postFormInputTextarea"></textarea>
        </div>
      </div>
      <div className="input-group-array">
        <div className="postFormInputContainer">
          <label>Company</label>
          <select class="form-select" aria-label="Default select example">
            <option selected>select</option>
            {companyDropdown.map((item, i) => {
              return (
                <option key={i} value={item.value}>
                  {item.label}
                </option>
              );
            })}
          </select>
        </div>
        <div className="postFormInputContainer">
          <label>Language</label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div className="postFormInputContainer postFormInputContainer50">
        <label>Job Category</label>
        <select class="form-select" aria-label="Default select example">
          <option selected>select</option>
          {jobCategoryDropdown.map((item, i) => {
            return <option value={item.value}>{item.label}</option>;
          })}
        </select>
      </div>
<hr/>
      {formData.jobsAndSections.map((section, index) => (
        <div key={index} className="sectionContainer">
          <h3 className="sectionH3">Sections</h3>
          <div className="postFormInputContainer">
            <div className="input-group-array">
              <div className="input-group-block">
                <label>Section Name</label>
                <input
                  type="text"
                  className="postFormInput"
                  placeholder="Input Value"
                  name="sectionName"
                  value={section.sectionName}
                  onChange={(e) => handleInputChange(e, index)}
                />
              </div>
              <div className="input-group-block">
                <label>Section Description</label>
                <textarea
                  className="postFormInput postFormInputTextarea"
                  name="sectionName"
                  value={section.sectionName}
                  onChange={(e) => handleInputChange(e, index)}
                ></textarea>
              </div>
            </div>
            <label>Section Type</label>
            <input
              type="text"
              className="postFormInput"
              placeholder="Input Value"
              name="sectionName"
              value={section.sectionName}
              onChange={(e) => handleInputChange(e, index)}
            />
          </div>
        </div>
      ))}
      <div className="btnContainerSection">
      <button className="addCompanyBTN" onClick={addSection}>Add Section</button>
      </div>
      <div className="allFormBtnContainers">
        <button>Add Company</button>
        <button onClick={close}>Cancel</button>
      </div>
    </div>
  );
}

export default AddJobs;
