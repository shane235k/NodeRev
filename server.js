const express = require("express");
const pool = require("./db");

const app = express();
const PORT = 5000;

// Middleware to read JSON body
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Express + PostgreSQL API is running 🚀");
});

/*
====================================
2. CREATE STUDENT
POST /students

rows=[ {} ]
rows[0]={}
====================================
*/
app.post("/students", async (req, res) => {
  try {
    const { name, age, branch, marks } = req.body;

    const newStudent = await pool.query(
      "INSERT INTO students (name, age, branch, marks) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, age, branch, marks]
    );

    res.status(201).json({
      message: "Student added successfully",
      student: newStudent.rows,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Server error" });
  }
});

/*
====================================
3. GET ALL STUDENTS
GET /students
====================================
*/
app.get("/students", async (req, res) => {
  try {
    const allStudents = await pool.query("SELECT * FROM students ORDER BY id ASC");

    res.status(200).json(allStudents.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Server error" });
  }
});

/*
====================================
4. GET SINGLE STUDENT
GET /students/:id
====================================
*/
app.get("/students/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const student = await pool.query(
      "SELECT * FROM students WHERE id = $1",
      [id]
    );

    if (student.rows.length === 0) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json(student.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Server error" });
  }
});

/*
====================================
5. UPDATE STUDENT
PUT /students/:id
====================================
*/
app.put("/students/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age, branch, marks } = req.body;

    const updatedStudent = await pool.query(
      "UPDATE students SET name = $1, age = $2, branch = $3, marks = $4 WHERE id = $5 RETURNING *",
      [name, age, branch, marks, id]
    );

    if (updatedStudent.rows.length === 0) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({
      message: "Student updated successfully",
      student: updatedStudent.rows[0],
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Server error" });
  }
});

/*
====================================
6. DELETE STUDENT
DELETE /students/:id
====================================
*/
app.delete("/students/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedStudent = await pool.query(
      "DELETE FROM students WHERE id = $1 RETURNING *",
      [id]
    );

    if (deletedStudent.rows.length === 0) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({
      message: "Student deleted successfully",
      student: deletedStudent.rows[0],
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Server error" });
  }
});

/*
====================================
START SERVER
====================================
*/
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});