import React from 'react'

const NewTag = ({
  students,
  setStudentProfiles,
  studentProfiles,
  ids
}) => {
  const handleKeyPress = (e, event) => {
    if (e.key === "Enter") {
      e.target.value = "";
      const newStudentProfiles = [...studentProfiles];
      newStudentProfiles[ids - 1].tags = [...newStudentProfiles[ids - 1].tags, event];
      setStudentProfiles(newStudentProfiles);
    };
  }
  return (
    <div className="tag-container">
      <div className="all-tags">
      {students.tags !== undefined ? (
        students.tags.map((tag) => {
          return (
            <div key={`${ids}${tag}`} className="tags">
              {tag}
            </div>
          );
        })
        ) : (
          <></>
          )}
          </div>
      <input
        key={`${ids}searchByTag`}
        id={ids}
        type="text"
        name={ids}
        // value={searchByTag}
        // onChange={(e) => setSearchByTag(e.target.value)}
        onKeyPress={(e) => { handleKeyPress(e, e.target.value) }}
        placeholder="Add a tag"
        className="add-tag-input"
      />
    </div>
  );
};

export default NewTag
