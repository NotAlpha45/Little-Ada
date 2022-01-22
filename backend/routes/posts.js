import express from "express";

import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  likePost,
  deletePost,
} from "../controllers/posts.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getPosts);

// Update and deleting posts requires auth confirmation, which will be done
// by the auth middleware. And, calling a middleware before a specific action
// enables all the values from the middleware to be embedded in the request.
router.post("/", auth, createPost);
router.get("/:id", auth, getPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.patch("/:id/likePost", auth, likePost);

export default router;
