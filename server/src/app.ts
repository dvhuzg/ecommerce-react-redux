import express from "express";
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  return res.send("DoHung");
});
app.post("/api/data", (req, res) => {
  console.log(req.body);
  return res.sendStatus(200);
});
app.all("/api/all", (req, res) => {
  return res.sendStatus(200);
});
app.listen(3000, () => {
  console.log("Application is running on https://localhost:3000");
});
