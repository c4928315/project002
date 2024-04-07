import React from 'react'

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
    const pageNumbers = [];
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Display range for page numbers
    const maxPagesToShow = 5;
    let startPage, endPage;

    if (totalPages <= maxPagesToShow) {
        startPage = 1;
        endPage = totalPages;
    } else {
        const halfMaxPagesToShow = Math.floor(maxPagesToShow / 2);
        if (currentPage <= halfMaxPagesToShow) {
            startPage = 1;
            endPage = maxPagesToShow;
        } else if (currentPage + halfMaxPagesToShow >= totalPages) {
            startPage = totalPages - maxPagesToShow + 1;
            endPage = totalPages;
        } else {
            startPage = currentPage - halfMaxPagesToShow;
            endPage = currentPage + halfMaxPagesToShow;
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    return (
        <ul className='pagination'>
            {currentPage > 1 && (
                <li className='page-item'>
                    <button onClick={() => paginate(1)} className='page-link paginationBTN2'>First</button>
                </li>
            )}
            {currentPage > 1 && (
                <li className='page-item'>
                    <button onClick={() => paginate(currentPage - 1)} className='page-link paginationBTN2'>Previous</button>
                </li>
            )}
            {pageNumbers.map(number => (
                <li key={number} className={`${currentPage === number ? 'active' : ''}`}>
                    <button onClick={() => paginate(number)} className='page-link paginationBTN'>
                        {number}
                    </button>
                </li>
            ))}
            {currentPage < totalPages && (
                <li className='page-item'>
                    <button onClick={() => paginate(currentPage + 1)} className='page-link paginationBTN2'>Next</button>
                </li>
            )}
            {currentPage < totalPages && (
                <li className='page-item'>
                    <button onClick={() => paginate(totalPages)} className='page-link paginationBTN2'>Last</button>
                </li>
            )}
        </ul>
    );
};

export default Pagination
