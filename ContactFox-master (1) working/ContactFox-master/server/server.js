// Bring in modules.
const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const cors = require("cors")

const app = express();

// Database connection.
connectDB();
app.use(cors({origin:'*'}))
// Express middleware.
app.use(express.json({ extended: false }));

// Define routes.
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

// Serve static assets in production.
if (process.env.NODE_ENV === "production") {
  // Sets static folder.
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

// Server port for the backend.
const PORT = process.env.PORT || 5050;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
