const express = require("express");
const app = express();
const port = 3000;

const users = [
  {
    firstName: "Davaadalai",
    secondName: "Amar",
    userId: "1",
    password: "zxc123"
  },
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.use(express.json());

app.post("/users", (req, res) => {
  const { firstName, secondName } = req.body;
  console.log(req.body);

  users.push({ firstName, secondName });
  res.send("User data received");
});

app.put("/users", (req, res) => {
  users.push({
    firstName: "Munkh",
    secondName: "Bat",
    userId: "3",
    password: "1000-7"
  });
  res.send(users);
});

app.delete("/users", (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    return res.status(400).send("userId is required");
  }

  const index = users.findIndex((user) => user.userId === userId);

  if (index !== -1) {
    users.splice(index, 1);
    res.send(`User with userId ${userId} deleted`);
  } else {
    res.status(404).send(`User with userId ${userId} not found`);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
