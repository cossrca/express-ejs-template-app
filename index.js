
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  const today = new Date();
  const day = today.getDay();

  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const dayName = dayNames[day];

  const isWeekend = day === 0 || day === 6;
  const message = `Today is ${dayName}. ${isWeekend ? "It's the weekend!" : "It's a weekday."}`;

  res.render("index", { message });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});