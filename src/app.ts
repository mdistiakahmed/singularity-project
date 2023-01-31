import express, { Application, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import fieldmarketRoutes from "./fieldmarket/FieldMarketOperations.routes";
const app: Application = express();

app.use(bodyParser.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  if (!res.get("Content-Type")) {
    res.set("Content-Type", "application/json");
  }
  next();
});

app.use("/api/v1/fieldmarket", fieldmarketRoutes);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("hello");
});

app.listen(5000, () => console.log("Server is running"));
