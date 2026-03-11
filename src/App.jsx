import "./App.css";
import { useState, useEffect } from "react";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";
import studentsData from "./data/students.json";

function App() {

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editStudent, setEditStudent] = useState(null);

  useEffect(() => {

    setTimeout(() => {
      setStudents(studentsData);
      setLoading(false);
    }, 1500);

  }, []);

  const addStudent = (student) => {

    const newStudent = {
      ...student,
      id: Date.now()
    };

    setStudents([...students, newStudent]);
  };

  const updateStudent = (student) => {

    setStudents(
      students.map((s) =>
        s.id === student.id ? student : s
      )
    );

    setEditStudent(null);
  };

  const deleteStudent = (id) => {

    setStudents(
      students.filter((s) => s.id !== id)
    );
  };

  return (
    <div className="container">

      <h1>Students Table</h1>

      <StudentForm
        addStudent={addStudent}
        editStudent={editStudent}
        updateStudent={updateStudent}
      />

      {loading ? (
        <h3 className="loading">Loading students...</h3>
      ) : (
        <StudentTable
          students={students}
          deleteStudent={deleteStudent}
          setEditStudent={setEditStudent}
        />
      )}

    </div>
  );
}

export default App;