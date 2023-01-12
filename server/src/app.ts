import express from "express";
const app = express();

app.get("/", (req, res) => {
  return res.send("DoHung");
});
app.listen(3000, () => {
  console.log("Application is running on https://localhost:3000");
});
