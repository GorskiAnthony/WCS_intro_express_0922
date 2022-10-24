const express = require("express");
const app = express();
const PORT = 5500;

/**
 * Fake data
 */

const students = [
  {
    id: 1,
    name: "Anthony Le BG",
    category: "teacher",
  },
  {
    id: 2,
    name: "Benoît Le BG",
    category: "teacher",
  },
  {
    id: 3,
    name: "Lana La BG",
    category: "student",
  },
  {
    id: 4,
    name: "Laure La BG",
    category: "student",
  },
  {
    id: 5,
    name: "Alicia La BG",
    category: "student",
  },
  {
    id: 6,
    name: "Victoire La BG",
    category: "student",
  },
  {
    id: 7,
    name: "Malik Le BG",
    category: "student",
  },
  {
    id: 8,
    name: "Christopher Le BG",
    category: "student",
  },
  {
    id: 9,
    name: "Valentin Le BG",
    category: "student",
  },
  {
    id: 10,
    name: "Elie Le BG",
    category: "student",
  },
  {
    id: 11,
    name: "Sébastien Le BG",
    category: "student",
  },
  {
    id: 12,
    name: "Julien Le BG",
    category: "student",
  },
  {
    id: 13,
    name: "Mathieu Le BG",
    category: "student",
  },
  {
    id: 14,
    name: "Yohan Le BG",
    category: "student",
  },
  {
    id: 15,
    name: "Quentin Le BG",
    category: "student",
  },
  {
    id: 16,
    name: "Vivien Le BG",
    category: "student",
  },
  {
    id: 17,
    name: "Mustapha Le BG",
    category: "student",
  },
];

/**
 * Création des routes
 */

/**
 * Retourne toutes les informations students
 */
app.get("/users", (req, res) => {
  const { limit, name, category } = req.query;

  if (limit) {
    return res.send(students.slice(0, limit));
  } else if (name) {
    const filterStudent = students.filter(
      (student) =>
        student.name.split(" ")[0].toLocaleLowerCase() === name.toLowerCase()
    );
    return res.send(filterStudent);
  } else if (category) {
    const filterStudent = students.filter(
      (student) => student.category === category
    );
    return res.send(filterStudent);
  } else {
    res.send(students.slice(0, 10));
  }
});

/**
 * Retourne 1 seul student
 */

app.get("/users/:id", (req, res) => {
  const student = students.find(
    (student) => student.id === parseInt(req.params.id)
  );

  if (!student) {
    res.status(404).json({ message: "user not found", error: 404 });
  } else {
    res.send(student);
  }
});

/**
 * Lancement du server express
 */

app.listen(PORT, (err) => {
  if (err) {
    console.error("Bug quelque part");
  } else {
    console.log(`Le server tourne sur le port ${PORT}`);
  }
});
