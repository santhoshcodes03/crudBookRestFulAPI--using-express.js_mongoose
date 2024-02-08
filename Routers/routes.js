const express=require("express");
const router=express.Router();
const controller=require("../controller/bookController");


router.get("/",controller.getAllBooks)
router.get("/:id",controller.getBookById)
router.post("/",controller.postBooks)
router.put("/:id",controller.postBookById)
router.delete("/:id",controller.deleteBookById)

module.exports=router;