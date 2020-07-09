import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import express from "express";
import { router } from "./src/routes/loginRoutes";

const app = express();

// middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["asasas"] }));
// routes
app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
