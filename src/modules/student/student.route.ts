import express from "express";
import {StudentControllers} from "./student.controller";

const router = express.Router();

// Will Call controller function

router.get('/', StudentControllers.getAllStudents);
router.get('/:studentId', StudentControllers.getSingleStudent);
router.delete('/:studentId', StudentControllers.deleteSingleStudent);


export const StudentRoutes =  router;