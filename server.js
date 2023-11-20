import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import postsRoutes from './routes/posts.js'
import dotenv from "dotenv"
const app = express()
dotenv.config()
// Set up middleware
app.use(cors())
app.use(bodyParser.json({ limit:'20mb', extended:true}))
app.use(bodyParser.urlencoded({limit:'20mb', extended:true}))

// Define routes
app.use('/posts', postsRoutes)

const DB_URI = process.env.DB_URI
const PORT = process.env.PORT || 5200

// Connect to database using async/await
const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI)
    console.log(`Database connected successfully!`)
  } catch (error) {
    console.error('Error connecting to database:', error)
    process.exit(1)
  }

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
  })
}
connectDB()
// Handle shutdown gracefully
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Database connection closed.')
    process.exit(0)
  })
})
