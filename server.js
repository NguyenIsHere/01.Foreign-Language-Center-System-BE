const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config() // Để load các biến môi trường từ file .env

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors()) // Cung cấp CORS
app.use(express.json()) // Giúp server hiểu các request với body là JSON

// Kết nối MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('MongoDB connection error:', err))

// Các route API
app.get('/', (req, res) => {
  res.send('Hello from Express and MongoDB API!')
})

// Lắng nghe server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
