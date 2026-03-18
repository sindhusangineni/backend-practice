const express=require('express');
const router=express.Router()
const{CreateStudent,ReadStudent,ReadSingledataStudent,UpdateStudent,DeleteStudent}=require('../controllers/studentcontroller');

router.post("/students",CreateStudent)
router.get("/students",ReadStudent)
router.get("/students/:id",ReadSingledataStudent)
router.put("/students/:id",UpdateStudent)
router.delete("/students/:id",DeleteStudent)

module.exports=router;