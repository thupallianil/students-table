import "./App.css";
import { useState, useEffect } from "react";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";

function App() {

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editStudent, setEditStudent] = useState(null);

  // Fetch students from backend
  const fetchStudents = async () => {
    const res = await fetch("http://localhost:5000/students");
    const data = await res.json();
    setStudents(data);
    setLoading(false);
  };

  // Load students when app starts
  useEffect(() => {
    fetchStudents();
  }, []);

  // Add student
  const addStudent = async (student) => {

    await fetch("http://localhost:5000/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(student)
    });

    fetchStudents();
  };

  // Update student
  const updateStudent = async (student) => {

    await fetch(`http://localhost:5000/students/${student.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(student)
    });

    setEditStudent(null);
    fetchStudents();
  };

  // Delete student
  const deleteStudent = async (id) => {

    await fetch(`http://localhost:5000/students/${id}`, {
      method: "DELETE"
    });

    fetchStudents();
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