import React, { useState, useEffect } from "react";
import "./App.css";
import StudentInfoContainer from "./Components/StudentInfoContainer";

function App() {
  const [studentProfiles, setStudentProfiles] = useState([]);
  const [search, setSearch] = useState({ name: "", tag: "" });
  const [studentIds, setStudentIds] = useState([]);
  // Fetches student info on render
  useEffect(() => {
    fetch("https://api.hatchways.io/assessment/students", {
      method: "GET",
      mode: "cors",
    }).then((response) => {
      response.json().then((data) => {
        const newData = Object.entries(data.students).map((obj) => ({
          ...obj[1],
          tags: [],
        }));
        setStudentProfiles(newData);
      });
    });
  }, [setStudentProfiles]);

  // function to import student info with all its props
  const propImports = (students) => {
    return (
      <StudentInfoContainer
        key={students.id}
        setStudentIds={setStudentIds}
        studentIds={studentIds}
        students={students}
        setStudentProfiles={setStudentProfiles}
        studentProfiles={studentProfiles}
      />
    );
  };
  if (studentProfiles) {
    return (
      <div className="app">
        <div className="all-students-container">
          <div className="search search-sticky">
            <input
              type="text"
              name="name-search"
              onChange={(e) =>
                setSearch({ ...search, name: e.target.value.toLowerCase() })
              }
              placeholder="Search by name"
              className="search-input"
            />
          </div>
          <div className="search search-sticky-tag">
            <input
              type="text"
              name="tag-search"
              onChange={(e) =>
                setSearch({ ...search, tag: e.target.value.toLowerCase() })
              }
              placeholder="Search by tag"
              className="search-input"
            />
          </div>

          <div className="student-cards">
            {Object.values(studentProfiles).map((students) => {
              const name = `${students.firstName} ${students.lastName}`;
              const tags = students.tags.join("");
              if (
                search.name !== "" &&
                search.tag === "" &&
                name.toLowerCase().includes(search.name)
              ) {
                return propImports(students);
              } else if (
                search.tag !== "" &&
                search.name === "" &&
                tags.includes(search.tag)
              ) {
                return propImports(students);
              } else if (
                search.name !== "" &&
                search.tag !== "" &&
                name.toLowerCase().includes(search.name) &&
                tags.includes(search.tag)
              ) {
                return propImports(students);
              } else if (search.name === "" && search.tag === "") {
                return propImports(students);
              }
              return <div key={students.id} />;
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default App;
