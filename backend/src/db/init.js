import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'

export async function initDatabase() {
  const DATABASE_URL = process.env.DATABASE_URL

  // Use MongoDB Memory Server for development if connecting to localhost fails
  let connectionUrl = DATABASE_URL

  if (DATABASE_URL && DATABASE_URL.includes('localhost')) {
    try {
      // Try to connect to local MongoDB first
      await mongoose.connect(DATABASE_URL, { serverSelectionTimeoutMS: 2000 })
      console.info('successfully connected to local database:', DATABASE_URL)
      return
    } catch (error) {
      console.info(
        'Local MongoDB not available, starting MongoDB Memory Server...',
      )
      const mongod = await MongoMemoryServer.create()
      connectionUrl = mongod.getUri()
    }
  }

  mongoose.connection.on('open', () => {
    console.info('successfully connected to database:', connectionUrl)
  })

  const connection = mongoose.connect(connectionUrl)
  return connection
}
