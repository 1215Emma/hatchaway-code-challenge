import ExpandScoresBtn from './ExpandScoresBtn'
import NewTag from './NewTag';
const StudentInfoContainer = ({ setStudentIds, studentIds, students, studentProfiles, setStudentProfiles }) => {
  const grades = students.grades.map((grade) => {
    return parseInt(grade, 10);
  });
  const ids = students.id
  const average = (grade) =>
    grade.reduce((a, b) => a + b) / students.grades.length;
  return (
    <div className="individual-students-container">
      <ExpandScoresBtn
        setStudentIds={setStudentIds}
        studentIds={studentIds}
        ids={ids}
      />
      <div className="individual-students-container-img">
        <img src={students.pic} alt="students avatar" />
      </div>
      <div className="individual-students-container-no-img">
        <h2>{`${students.firstName.toUpperCase()} ${students.lastName.toUpperCase()}`}</h2>
        <h2>{`Email: ${students.email}`}</h2>
        <h2>{`Company: ${students.company}`}</h2>
        <h2>{`Skill: ${students.skill}`}</h2>
        <h2>{`Average: ${average(grades)}%`}</h2>

        {studentIds.includes(ids) ? (
          <div className="test-scores">
            {grades.map((tests, index) => {
              return (
                <div key={`${tests}${index}`} className="test-score">
                  <h3>{`Test ${index + 1}:`}</h3>
                  <h3>{` ${tests}%`}</h3>
                </div>
              );
            })}
          </div>
        ) : (
          <></>
        )}
        <NewTag
          key={`${ids}tag`}
          students={students}
          setStudentProfiles={setStudentProfiles}
          studentProfiles={studentProfiles}
          ids={ids}
        />
      </div>
    </div>
  );
};

export default StudentInfoContainer;
