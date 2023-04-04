import React from "react";

export default function Paginate({ paginate, currentPage, totalPages }) {
  return (
    <div className="">
      <ul className="">
        {totalPages &&
          totalPages.map((No) => (
            <button
              key={No}
              onClick={() => paginate(No)}
              className={currentPage === No ? `` : ``}
            >
              {No}
            </button>
          ))}
      </ul>
    </div>
  );
}
