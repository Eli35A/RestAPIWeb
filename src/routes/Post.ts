import { Router } from "express";
import { addPost, getPostById, getPosts, updatePost } from "../controllers/Post";
const router = Router();

router.post("/", addPost);
router.get("/", getPosts);
router.get("/:postId", getPostById);
router.put("/:postId", updatePost);
export default router;
