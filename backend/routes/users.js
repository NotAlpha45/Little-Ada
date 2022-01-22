import express from 'express';
import {signin, signup} from "../controllers/user.js"

const router = express.Router()

// Sign in is sending data, hence post
router.post('/signin', signin)
router.post('/signup', signup);

export default router;