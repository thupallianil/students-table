import { useState, useEffect } from "react";

function StudentForm({ addStudent, editStudent, updateStudent }) {

  const [form, setForm] = useState({
    name: "",
    email: "",
    age: ""
  });

  useEffect(() => {

    if (editStudent) {
      setForm(editStudent);
    }

  }, [editStudent]);

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!form.name || !form.email || !form.age) {
      alert("All fields are required");
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;

    if (!emailRegex.test(form.email)) {
      alert("Invalid email format");
      return;
    }

    if (editStudent) {
      updateStudent(form);
    } else {
      addStudent(form);
    }

    setForm({
      name: "",
      email: "",
      age: ""
    });

  };

  return (

    <form onSubmit={handleSubmit} style={{marginBottom:"20px"}}>

      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) =>
          setForm({...form, name:e.target.value})
        }
      />

      <input
        placeholder="Email"
        value={form.email}
        onChange={(e) =>
          setForm({...form, email:e.target.value})
        }
      />

      <input
        placeholder="Age"
        value={form.age}
        onChange={(e) =>
          setForm({...form, age:e.target.value})
        }
      />

      <button type="submit">
        {editStudent ? "Update Student" : "Add Student"}
      </button>

    </form>
  );
}

export default StudentForm;