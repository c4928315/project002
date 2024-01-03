import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import useFetch from "../../../../Hooks/useFetch";
import "./addJobs.css";

function AddJobs({ close }) {
  const [startDate, setStartDate] = useState(new Date());
  const [formData, setFormData] = useState({
    error: {
      errorMessage: "string",
      errorCode: "string",
      errorTitle: "string",
    },
    jobs: {
      endDate: "",
      jobName: "",
      jobDescription: "",
      companyId: 0,
      language: "",
      jobCategoriesId: 0,
    },
    createdBy: "rtyui",
    jobsAndSections: [
      {
        id: 0,
        sectionName: "",
        sectionDescription: "",
        jobTypesId: 0,
        jobsId: 0,
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
    if (
      name === "jobName" ||
      name === "jobDescription" ||
      name === "companyId" ||
      name === "language" ||
      name === "jobCategoriesId"
    ) {
      // Update the jobs object
      setFormData((prevData) => ({
        ...prevData,
        jobs: {
          ...prevData.jobs,
          [name]: value,
        },
      }));
    } else {
      // Update the jobsAndSections array
      setFormData((prevData) => ({
        ...prevData,
        jobsAndSections: prevData.jobsAndSections.map((section, index) =>
          index === sectionIndex
            ? {
                id: section.id,
                sectionName:
                  name === "sectionName" ? value : section.sectionName,
                sectionDescription:
                  name === "sectionDescription"
                    ? value
                    : section.sectionDescription,
                jobTypesId: name === "jobTypesId" ? value : section.jobTypesId,
                jobsId: section.jobsId,
                dateCreated: section.dateCreated,
                dateModified: section.dateModified,
                createdBy: section.createdBy,
                modifiedBy: section.modifiedBy,
                isActive: section.isActive,
                isDeleted: section.isDeleted,
              }
            : section
        ),
      }));
    }
  };

  const submitForm = async () => {
    try {
      const response = await fetch(
        "https://efmsapi-staging.azurewebsites.net/api/Jobs/addJobs",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        // Handle the error here
        console.error("Error:", response.statusText);
        return;
      }

      // Handle the successful response here
      const data = await response.json();
      console.log("Success:", data);

      // Optionally, you can perform actions based on the response, e.g., close the form
      close();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  console.log(companyDropdown);
  return (
    <div className="postForm addCompanyLabel">
      <h3 className="sectionH3">Add Jobs</h3>
      <div className="input-group-array">
        <div className="postFormInputContainer">
          <label>Job Name</label>
          <input
            type="text"
            className="postFormInput"
            placeholder="Input Value"
            name="jobName" // Added name attribute
            onChange={(e) => handleInputChange(e, 0, true)} // Passing true to indicate it's a job field
            // Assuming this is the first section
          />
        </div>
        <div className="postFormInputContainer">
          <label>Company Description</label>
          <textarea
            className="postFormInput postFormInputTextarea"
            name="jobDescription" // Added name attribute
            onChange={(e) => handleInputChange(e, 0, true)} // Passing true to indicate it's a job field
            // Assuming this is the first section
          ></textarea>
        </div>
      </div>
      <div className="input-group-array">
        <div className="postFormInputContainer">
          <label>Company</label>
          <select
            className="form-select"
            aria-label="Default select example"
            name="companyId"
            onChange={(e) => handleInputChange(e, 0, true)} // Passing true to indicate it's a job field
          >
            <option value="" selected disabled>
              Select
            </option>
            {companyDropdown.map((item, i) => (
              <option key={i} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
        <div className="postFormInputContainer">
          <label>Language</label>
          <select
            className="form-select"
            aria-label="Default select example"
            name="language"
            onChange={(e) => handleInputChange(e, 0, true)} // Passing true to indicate it's a job field
          >
            <option value="" selected disabled>
              Open this select menu
            </option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div class="input-group-array">
        <div className="postFormInputContainer50">
          <label className="allLabelsInForm">Job Category</label>
          <select
            className="form-select"
            aria-label="Default select example"
            name="jobCategoriesId"
            onChange={(e) => handleInputChange(e, 0, true)} // Passing true to indicate it's a job field
          >
            <option value="" selected disabled>
              Select
            </option>
            {jobCategoryDropdown.map((item, i) => (
              <option key={i} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>

        <div className="datepicker postFormInputContainer50">
        <label className="allLabelsInForm">Date Created</label>
          <DatePicker
            className="inputDatePicker"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
      </div>
      <hr />
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
                  onChange={(e) => handleInputChange(e, index)}
                />
              </div>
              <div className="input-group-block">
                <label>Section Description</label>
                <textarea
                  className="postFormInput postFormInputTextarea"
                  name="sectionDescription"
                  onChange={(e) => handleInputChange(e, index)}
                ></textarea>
              </div>
            </div>
            <label>Section Type</label>
            <input
              type="text"
              className="postFormInput"
              placeholder="Input Value"
              name="jobTypesId"
              onChange={(e) => handleInputChange(e, index)}
            />
          </div>
        </div>
      ))}
      <div className="btnContainerSection">
        <button className="addCompanyBTN" onClick={addSection}>
          Add Section
        </button>
      </div>
      <div className="allFormBtnContainers">
        <button onClick={submitForm}>Add Company</button>
        <button onClick={close}>Cancel</button>
      </div>
    </div>
  );
}

export default AddJobs;
