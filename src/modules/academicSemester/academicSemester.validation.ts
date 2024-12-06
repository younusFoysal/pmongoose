import { z } from "zod";
import {AcademicSemester} from "./academicSemester.model";
import {AcademicSemesterCode, AcademicSemesterName, Months} from "./academicSemester.constant";
import {TAcademicSemesterName, TMonths} from "./academicSemester.interface";


const createAcademicSemesterValidationSchema = z.object({
    body: z.object({
        name: z.enum([...AcademicSemesterName] as [string, ...string[]] ),
        year: z.string(),
        code: z.enum([...AcademicSemesterCode] as [string, ...string[]] ),
        startMonth: z.enum([...Months] as [string, ...string[]] ),
        endMonth: z.enum([...Months] as [string, ...string[]] ),

    })
})

export const AcademicSemesterValidations = {
    createAcademicSemesterValidationSchema,
}
