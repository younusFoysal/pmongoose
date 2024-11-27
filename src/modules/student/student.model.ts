import { Schema, model } from "mongoose";
import {Guardian, LocalGuardian, Student, UserName} from "./student.interface";

// TODO: 2. Create schema
const userNameSchema = new Schema<UserName>({
    firstName: { type: String, required: true },
    middleName: { type: String,},
    lastName: { type: String, required: true }
});

const guardianSchema = new Schema<Guardian>({
    fatherName: { type: String, required: true },
    fatherEmail: { type: String, required: true },
    fatherPhone: { type: String, required: true },
    fatherOccupation: { type: String, required: true },
    motherName: { type: String, required: true },
    motherEmail: { type: String, required: true },
    motherPhone: { type: String, required: true },
    motherOccupation: { type: String, required: true },
});

const localGuardianSchema = new Schema<LocalGuardian>({
    name: { type: String, required: true },
    occupation: { type: String, required: true },
    contactNo: { type: String, required: true },
    address: { type: String, required: true },
});

const studentSchema = new Schema<Student>({
    id: {type: String},
    name: userNameSchema,
    gender: ["male", "female"],
    dateOfBirth: String,
    email: {type: String, required: true },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    bloodGroup: ["A+", "A-", "AB-", "B-", "O-"],
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    guardian: guardianSchema,
    localGuardian: localGuardianSchema,
    profileImg: { type: String },
    isActive:  ["active", "blocked"]
});


// TODO: 3. Create model
export const StudentModel = model<Student>('Student', studentSchema);

