import express from "express";
import { contact, courseRequest, getDashboardStats } from "../controllers/Dashboard.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/Auth.js";
const router=express.Router();
router
  .route("/admin/stats")
  .get(isAuthenticated, authorizeAdmin, getDashboardStats);
  router.route("/contact").post(contact);

// Request form
router.route("/courserequest").post(courseRequest);


export default router;