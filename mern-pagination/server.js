const dotenv = require("dotenv");
const express = require("express");
const connectDB = require("./config/db");
const postRoutes = require("./routes/postRoutes");


dotenv.config();

connectDB();

const app = express();


app.use(express.json());

// app.get('/',(req,res)=>{
//     res.send('AA GYA TU')
// })

app.use("/api/v1/posts", postRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
