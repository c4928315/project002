import { createContext, useState, useEffect } from "react";
import useFetch from "../Hooks/useFetch";

const LocalContext = createContext({});

export const LocalProvider = ({ children }) => {
  const initialAuth = JSON.parse(localStorage.getItem("auth")) || {};

  const [auth, setAuth] = useState(initialAuth);

  const initialJobCategoryId = parseInt(localStorage.getItem("jobCategoryId"))!=null ?  parseInt(localStorage.getItem("jobCategoryId")): 0;

  const initialCompanyId = parseInt(localStorage.getItem("companyId"))
  const initialJobCategoryCompanyId = parseInt(localStorage.getItem("jobCategoryCompany"))


  const [jobCategoryId, setJobCategoryId] = useState(initialJobCategoryId);
  const [jobCategoryCompany, setJobCategoryCompany] = useState(initialJobCategoryCompanyId);
  const [companyId, setCompanyId] = useState(initialCompanyId);
  const [name, setName] = useState("");

  let [filteredData, setFilteredData] = useState([])

  const { data, isLoading, error } = useFetch(
    `https://efmsapi-staging.azurewebsites.net/api/Jobs/getAllJobsByCompany?jobCategoryId=${jobCategoryId}`
  );



  const {
    data: companies,
    isLoading: loadingCompany,
    error: errorCompany,
  } = useFetch(
    "https://efmsapi-staging.azurewebsites.net/api/Companies/getAllCompanies"
  );

  const { data: category } = useFetch("https://efmsapi-staging.azurewebsites.net/api/JobsCategory/getJobsCategoriesDropDown");

  const idsToExclude = [30, 31, 32, 33, 34, 35, 36, 38];

  filteredData = data.filter(
    (item) => !idsToExclude.includes(item.jobsId)
  );


  useEffect(() => {
    localStorage.setItem("companyId", companyId);
  }, [companyId]);

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(auth));
  }, [auth]);

  useEffect(() => {
    localStorage.setItem("filteredData", JSON.stringify(filteredData));
  }, [filteredData]);
  
  useEffect(() => {
    localStorage.setItem("category", JSON.stringify(category));
  }, [category]);
  
  useEffect(() => {
    localStorage.setItem("companies", JSON.stringify(companies));
  }, [companies]);
  
  // Retrieve data from localStorage on component mount
  useEffect(() => {
    const storedFilteredData = JSON.parse(localStorage.getItem("filteredData"));
    if (storedFilteredData) {
      setFilteredData(storedFilteredData);
    }
  }, []);

  return (
    <LocalContext.Provider
      value={{
        auth,
        setAuth,
        setJobCategoryId,
        jobCategoryId,
        data: filteredData,
        filteredData,
        isLoading,
        category,
        error,
        companies,
        loadingCompany,
        companyId, 
        setCompanyId,
        name, 
        setName,
        jobCategoryCompany, 
        setJobCategoryCompany
      }}
    >
      {children}
    </LocalContext.Provider>
  );
};

export default LocalContext;
