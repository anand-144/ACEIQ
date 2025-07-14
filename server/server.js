require("dotenv").config();
const express  = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require('./config/db');

const app = express();

const authRoutes = require('./routes/authRoute.js')

// Middleware to handle cors
app.use(cors({
    origin : "http://localhost:5173", //Adjust this to your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
})
);

connectDB

// Middleware to parse JSON requests
app.use(express.json());


//Routes

app.use('/api/auth', authRoutes);
// app.use('/api/sessions' , sessionRoutes);
// app.use('api/questions', questionRoutes);

// app.use('/api/ai/generate-questions', protect , genrateInterviewQuestions);
// app.use('/api/ai/generate-explanations', protect , genrateInterviewExplanations);

//Server-side route to handle file uploads
app.use('/uploads', express.static(path.join(__dirname , 'uploads'), {}));

//Start the server

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));