const express = require('express'); // Importing the Express framework
const cors = require('cors'); // Importing CORS middleware for handling cross-origin requests
const helmet = require('helmet'); // Importing Helmet for securing HTTP headers
const morgan = require('morgan'); // Importing Morgan for logging HTTP requests
//const { connectDB } = require('./config/db'); // Importing the database connection function

require('dotenv').config(); // Importing dotenv to load environment variables

const app = express(); // Creating an instance of an Express application

app.use(helmet()); // Using Helmet middleware for security
app.use(cors()); // Using CORS middleware to allow cross-origin requests
app.use(express.json()); // Middleware to parse JSON request bodies
app.use(morgan('dev')); // Using Morgan middleware for logging requests in 'dev' format

app.get('/', (req, res) => { // Root endpoint
  res.send(['Welcome to the backend server!',
    "This is a simple Express server running with CORS enabled.",
]); // Sending a welcome message
} );

// Starting the server on the port specified in environment variables or defaulting to 3000
const PORT = process.env.PORT || 3000; // Setting the port to listen on
app.listen(PORT, () => { // Starting the server
  console.log(`Server is running on port http://localhost:${PORT}`); // Logging the port to the console
});


/*
app.get("/health", (_req, res) => res.json({ ok: true }));

app.use("/api", api);

const PORT = process.env.PORT || 8080;

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(PORT, () => console.log(`🚀 API on http://localhost:${PORT}`));
  } catch (err) {
    console.error("Failed to start:", err);
    process.exit(1);
  }
};

start();
*/