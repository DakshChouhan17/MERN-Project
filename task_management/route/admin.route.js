import express from "express";
import { signIn, singInPage, signUp, signUpPage } from "../controller/admin.controller.js";

const router = express.Router();

router.get("/sign-in",singInPage);
router.post("/sign-in",signIn);
router.get("/sign-up", signUpPage);
router.post("/sign-up", signUp);
export default router;