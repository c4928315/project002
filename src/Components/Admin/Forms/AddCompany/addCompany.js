import React, { useEffect, useState } from 'react'
import useFetch from '../../../../Hooks/useFetch';
import "./addCompany.css"

function AddCompany({close}) {
    const [startDate, setStartDate] = useState(new Date());
    const [AttachedFile, setAttachedFile] = useState(null);

    const [formData, setFormData] = useState({
      name: "",
      headQuarters: "",
      email: "",
      phoneNumber: "",
      description: "",
      location: "",
      imageUrl: null,
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);

    const handleImageChange = (e) => {
      const selectedFile = e.target.files[0]; // Only consider the first selected file
  
      if (selectedFile) {
        if (selectedFile.size > 2 * 1024 * 1024) {
          alert(`File "${selectedFile.name}" exceeds the 2MB size limit.`);
        } else {
          const reader = new FileReader();
          reader.onload = (event) => {
            const base64Data = event.target.result.split(',')[1]; // Extract base64 data
            setAttachedFile(base64Data); // Set AttachedFile with the base64 string
          };
          reader.readAsDataURL(selectedFile);
        }
      }
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
              attachment: AttachedFile,
              attachmentName: AttachedFile ? getFileName() : null,
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

    const getFileName = () => {
      const selectedFile = document.querySelector('input[type="file"]').files[0];
      return selectedFile ? selectedFile.name : null;
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
        <div className="postFormInputContainer">
          <label>Image Url</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="postFormInput"
            placeholder="Input Image URL"
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



