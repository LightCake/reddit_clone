const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const config = require("./config");
const connect = require("./utils/db");
const userRouter = require("./api/user/user.router");
const postRouter = require("./api/post/post.router");

const app = express();

// MIDDLEWARES
// Allows another domain (client) request resources from this domain (server).
app.use(cors());
// Parses incoming requests with JSON payloads.
app.use(express.json());
// Parses incoming requests with urlencoded (ASCII format) payloads.
app.use(express.urlencoded({ extended: true }));
// Outputs console message for every HTTP request.
app.use(morgan("dev"));
// Parse Cookie header and populate req.cookies with an object keyed by the cookie names
app.use(cookieParser());

// REST API
app.use("/api/user", userRouter);
app.use("/api/post", postRouter);

const start = async () => {
  try {
    // Establish connection to MongoDB.
    await connect();
    // Start the server.
    app.listen(config.port, () =>
      console.log(`Server running on port ${config.port}`)
    );
  } catch (e) {
    console.error(e);
  }
};

start();
