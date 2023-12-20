import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useFetch from "../../../Hooks/useFetch";
import "./postJob.css";

function PostJob() {
  const [startDate, setStartDate] = useState(new Date());

  const {data: companyDropdown} = useFetch("https://efmsapi-staging.azurewebsites.net/api/Companies/getCompaniesDropDown")

  console.log(companyDropdown)
  return (
    <div className="postJob">
      <div className="postForm">
        <div className="postFormInputContainer">
          <label>Company Name</label>
           <select className="form-select postFormInput" aria-label="Default select example">
              <option defaultValue>Select</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
        </div>
        <div className="postFormInputContainer">
          <label>Company Headquaters</label>
          <input
            type="text"
            className="postFormInput"
            placeholder="Input Value"
          />
        </div>
        <div className="postFormInputContainer">
          <label>Company Contact Email</label>
          <input
            type="email"
            className="postFormInput"
            placeholder="Input Value"
          />
        </div>
        <div className="postFormInputContainer">
          <label>Company Contact Phone</label>
          <input
            type="text"
            className="postFormInput"
            placeholder="Input Value"
          />
        </div>
        <div className="postFormInputContainer">
          <label>Company Description</label>
          <input
            type="text"
            className="postFormInput"
            placeholder="Input Value"
          />
        </div>
        <div className="postFormInputContainer">
          <label>Job Title</label>
          <input
            type="text"
            className="postFormInput"
            placeholder="Input Value"
          />
        </div>
        <div className="postFormInputContainer">
          <label>Job Description</label>
          <input
            type="text"
            className="postFormInput"
            placeholder="Input Value"
          />
        </div>
        <div className="postFormInputContainer">
          <label>Compensation and Perks</label>
          <input
            type="text"
            className="postFormInput"
            placeholder="Input Value"
          />
        </div>
        <div className="postFormInputContainer">
          <label>Deadline</label>
          <DatePicker
          className="postFormInputDate"
            showIcon
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            icon="fa fa-calendar-o"
          />
        </div>

        <div className="postFormBtn">
          <button>Post</button>
        </div>
      </div>
    </div>
  );
}

export default PostJob;
