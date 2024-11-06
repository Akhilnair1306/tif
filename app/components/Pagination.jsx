import React from 'react';

const Pagination = ({ currentPage, totalPages, nextPage, prevPage }) => {
  return (
    <div>
      <ol className="flex items-center justify-center gap-1 text-xs font-medium">
        <li>
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <span className="sr-only">Prev Page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </li>

        <li className="flex items-center">
          <span className='text-black'>{currentPage} /</span>
        </li>
        <li className="flex items-center">
          <span className="text-black">{totalPages}</span>
        </li>

        <li>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className={`inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <span className="sr-only">Next Page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </li>
      </ol>
    </div>
  );
};

export default Pagination;
