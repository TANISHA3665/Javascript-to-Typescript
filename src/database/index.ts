import mongoose from "mongoose";
import { db } from "../config";

const dbURI = `mongodb://${db.host}:${db.port}`;

mongoose
  .connect(dbURI)
  .then(() => "MongoDB Connected")
  .catch(err => console.log(err));
