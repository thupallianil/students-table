import DownloadExcel from "./DownloadExcel";

function StudentTable({ students, deleteStudent, setEditStudent }) {

  const handleDelete = (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (confirmDelete) {
      deleteStudent(id);
    }

  };

  return (

    <div>

      <DownloadExcel students={students} />

      <table>

        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {students.map((student) => (

            <tr key={student.id}>

              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.age}</td>

              <td>

                <button
                  className="edit-btn"
                  onClick={() => setEditStudent(student)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(student.id)}
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );
}

export default StudentTable;