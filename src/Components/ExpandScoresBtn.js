import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function ExpandScoresBtn({ studentIds, setStudentIds, ids }) {

  const showAllTests = (id) => {
    setStudentIds((studentIds) => [...studentIds, id]);
  };
    const hideAllTests = (id) => {
      setStudentIds(studentIds.filter((index) => index !== id));
  };
  
  return (
    <div className="btn-container">
      {!studentIds.includes(ids) ? (
        <>
          <button
            type="button"
            onClick={() => {
              showAllTests(ids);
            }}
          >
            <AiOutlinePlus className="expand-btn" />
          </button>
        </>
      ) : (
        <>
          <button
            type="button"
            onClick={() => {
              hideAllTests(ids);
            }}
            className="minus"
          >
            <AiOutlineMinus className="expand-btn" />
          </button>
        </>
      )}
    </div>
  );
}

export default ExpandScoresBtn
