import express, { Request, Response } from "express";
const app = express();
app.use(express.json());

app.get("/", (rreq: Request, res: Response) => {
  return res.send("DoHung");
});
app.post("/api/data", (req: Request, res: Response) => {
  console.log(req.body);
  return res.sendStatus(200);
});
app.all("/api/all", (req: Request, res: Response) => {
  return res.sendStatus(200);
});
app.listen(3000, () => {
  console.log("Application is running on https://localhost:3000");
});
