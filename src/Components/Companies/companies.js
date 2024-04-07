// import React, { useContext } from 'react'
// import LocalContext from '../../Context/contextProvider';
// import Loader from '../Loader/loader';
// import "./companies.css"
// import CompanyCard from './companyCard'

// function Companies() {

//     const { companies, loadingCompany } = useContext(LocalContext);

//   return (
//     <div className='mainComapnyDiv'>
//       {loadingCompany ? (
//         <Loader />
//       ) : (
//         <div className="companies">
//           <CompanyCard data={companies} />
//         </div>
//       )}
//     </div>
//   );
// }

// export default Companies

import React, { useContext, useEffect, useState } from "react";
import LocalContext from "../../Context/contextProvider";
import Loader from "../Loader/loader";
import Pagination from "../pagination";
import "./companies.css";
import CompanyCard from "./companyCard";

function Companies() {
  const { companies, loadingCompany } = useContext(LocalContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = companies.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className="mainCompanyDiv">
      {loadingCompany ? (
        <Loader />
      ) : (
        <>
          <div className="companies">
            <CompanyCard data={currentItems} />
          </div>
          <div className="companyPagination">
            <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={companies.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Companies;
