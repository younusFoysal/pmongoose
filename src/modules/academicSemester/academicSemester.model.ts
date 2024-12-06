import {Schema, Model, model} from "mongoose";
import {TAcademicSemester, TAcademicSemesterCode, TAcademicSemesterName, TMonths} from "./academicSemester.interface";
import {AcademicSemesterCode, AcademicSemesterName, Months} from "./academicSemester.constant";




const academicSemesterSchema = new Schema<TAcademicSemester>({
    name: { type: String, required: true, enum: AcademicSemesterName },
    code: { type: String, required: true, enum: AcademicSemesterCode },
    year: { type: String, required: true },
    startMonth: {
        type: String,
        required: true,
        enum: Months,
    },
    endMonth: {
        type: String,
        required: true,
        enum: Months,
    },
},{timestamps: true});


export const AcademicSemester = model<TAcademicSemester>('AcademicSemester', academicSemesterSchema);