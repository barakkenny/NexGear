import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    firstName: {
        type: string,
        required: true
    },
    lastName: {
        type: string,
        required: true
    }
})