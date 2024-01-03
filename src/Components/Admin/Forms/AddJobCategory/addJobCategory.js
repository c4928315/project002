import React, { useState } from 'react'
import useFetch from '../../../../Hooks/useFetch';

function AddJobCategory({close}) {

  const authData = localStorage.getItem('auth');
  const currentUser = authData ? JSON.parse(authData) : null;

    const [formData, setFormData] = useState({
      id: 0,
      name: "",
      description: "",
      createdBy: currentUser.userName,
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    console.log(currentUser)
    const handlePostCategory = async () => {
      try {
        const response = await fetch(
          "https://efmsapi-staging.azurewebsites.net/api/JobsCategory/addJobsCategories",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...formData,
              modifiedBy: "string",
            }),
          }
        );
  
        if (response.ok) {
          console.log("Job posted successfully!");
        } else {
          console.error("Failed to post job:", response.statusText);
        }
      } catch (error) {
        console.error("Error posting job:", error.message);
      }
    };
  
  return (
   <div className="postForm addCompanyLabel">
    <h3 className="sectionH3">Add Job Categories</h3>
        <div className="postFormInputContainer">
          <label>Category Name</label>
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
          <label>Category Description</label>
          <input
            type="text"
            className="postFormInput"
            placeholder="Input Value"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>

        <div className="allFormBtnContainers">
          <button  onClick={handlePostCategory}>Add Company</button>
          <button  onClick={close}>Cancel</button>
        </div>
      </div> 
  )
}

export default AddJobCategory

