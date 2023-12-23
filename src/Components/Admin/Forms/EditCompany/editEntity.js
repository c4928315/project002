import React, { useState, useEffect } from "react";
import './editCompany.css';

function EditEntity({ initialData, apiEndpoint, fields, onUpdate, onCancel }) {
  const [entity, setEntity] = useState(initialData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEntity((prevEntity) => ({
      ...prevEntity,
      [name]: value,
    }));
  };

  console.log(entity)

  const handleUpdateEntity = async () => {
    const requiredFields = fields.filter(field => field.required);
    const missingRequiredFields = requiredFields.filter(field => !entity[field.name]);

    if (missingRequiredFields.length > 0) {
      console.error("Please fill in all required fields");
      return;
    }

    try {
      const response = await fetch(
        `${apiEndpoint}?id=${entity.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(entity),
        }
      );

      if (response.ok) {
        console.log("Entity updated successfully!");
        onUpdate();
      } else {
        console.error("Failed to update entity:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating entity:", error.message);
    }
  };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           `${apiEndpoint}/get?id=${initialData.id}`
//         );
//         if (response.ok) {
//           const data = await response.json();
//           setEntity(data);
//         } else {
//           console.error("Failed to fetch entity data:", response.statusText);
//         }
//       } catch (error) {
//         console.error("Error fetching entity data:", error.message);
//       }
//     };

//     fetchData();
//   }, [apiEndpoint, initialData.id]);

  return (
    <div className="editContainer">
      <form className="postForm">
        <h2 className="mainHeaderEdit">Edit {entity.name}</h2>
        {fields.map((field) => (
          <div key={field.name} className="postFormInputContainer">
            <label className="allFormLabels">{field.label}</label>
            <input
              type={field.type || "text"}
              className="postFormInput allFormInputs"
              placeholder={field.placeholder || "Input Value"}
              name={field.name}
              value={entity[field.name]}
              onChange={handleInputChange}
            />
          </div>
        ))}
        <div className="allFormBtnContainers">
          <button type="button" onClick={handleUpdateEntity}>
            Update {entity.name}
          </button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditEntity;
