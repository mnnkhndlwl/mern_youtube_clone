import express from "express";
import { getAllIssues, reportIssue } from "../controllers/report.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//GET ALL ISSUES
router.get("/", getAllIssues);

//REPORT ISSUE
router.post("/new", verifyToken, reportIssue);

export default router;
