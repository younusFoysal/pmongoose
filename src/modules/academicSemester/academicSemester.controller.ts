import catchAsync from "../../app/utils/catchAsync";
import sendResponse from "../../app/utils/sendResponse";
// @ts-ignore
import httpStatus from "http-status";
import {AcademicSemesterServices} from "./academicSemester.service";


const createAcademicSemester = catchAsync(async (req, res) => {
    // const {password,  student: studentData} = req.body;
    const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(req.body);


    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic Semester created successfully",
        data: result
    } )
})

const getAllAcademicSemesters = catchAsync(async (req, res) => {
    const result = await AcademicSemesterServices.getAllAcademicSemestersFromDB();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Academic semesters are retrieved successfully',
        data: result,
    });
});

const getSingleAcademicSemester = catchAsync(async (req, res) => {
    const { semesterId } = req.params;
    const result =
        await AcademicSemesterServices.getSingleAcademicSemesterFromDB(semesterId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Academic semester is retrieved successfully',
        data: result,
    });
});

const updateAcademicSemester = catchAsync(async (req, res) => {
    const { semesterId } = req.params;
    const result = await AcademicSemesterServices.updateAcademicSemesterIntoDB(
        semesterId,
        req.body,
    );

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Academic semester is updated successfully',
        data: result,
    });
});

export const AcademicSemesterControllers = {
    createAcademicSemester,
    getAllAcademicSemesters,
    getSingleAcademicSemester,
    updateAcademicSemester,
};

