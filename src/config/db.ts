import mongoose from 'mongoose';

async function connectDB(connection) {
    try {
        const dbConnection = await mongoose.connect(connection);
        console.log("MongoDB connected successfully");
        return dbConnection;
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("Database connection failed:", error.message);
        }
        process.exit(1)
    }
    
}


export default connectDB;