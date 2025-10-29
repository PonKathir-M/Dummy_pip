import React, { useState } from "react";

export default function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addStudent = () => {
    if (!name || !age) return;
    if (editIndex !== null) {
      const updated = [...students];
      updated[editIndex] = { name, age };
      setStudents(updated);
      setEditIndex(null);
    } else {
      setStudents([...students, { name, age }]);
    }
    setName("");
    setAge("");
  };

  const editStudent = (i) => {
    setName(students[i].name);
    setAge(students[i].age);
    setEditIndex(i);
  };

  const deleteStudent = (i) => {
    setStudents(students.filter((_, index) => index !== i));
  };

  return (
    <div>
      <h3>Student Record Manager</h3>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={addStudent}>{editIndex !== null ? "Update" : "Add"}</button>

      <ul>
        {students.map((s, i) => (
          <li key={i}>
            {s.name} (Age: {s.age}){" "}
            <button onClick={() => editStudent(i)}>Edit</button>
            <button onClick={() => deleteStudent(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
