import { Schema, model } from "mongoose";

const departmentSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            unique: true,
            max: [100, 'Department name cannot exceed 100 characters']
        },
        head: {
            type: String,
            required: true,
            trim: true
        },
        facultyCount: {
            type: Number,
            trim: true,
            required: true,
        }
    }
);

export const Department = model('Department', departmentSchema);
