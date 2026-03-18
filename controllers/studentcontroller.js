const Student= require('../models/studentModel')

exports.CreateStudent=async(req,res)=>{
 try{

  const student = await Student.create(req.body)

  res.status(201).json({
   message:"Student created",
   data:student
  })

 }catch(err){
  res.status(500).json({error:err.message})
 }
}



exports.ReadStudent=async(req,res)=>{
    
    try{
        const student=await Student.find();
    res.json({
        message:"all students",
        data:student
      })
    }catch(err){
  res.status(500).json({error:err.message})
 }   
}


exports.ReadSingledataStudent=async(req,res)=>{
try{

    const student = await Student.findById(req.params.id);

    res.json({
        message:"Single student",
        data:student
    })

}catch(err){
res.status(500).json({error:err.message})
}
}



exports.UpdateStudent=async(req,res)=>{
try{
const student = await Student.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true}
);

res.json({
    message:"sucessfully updated",
    data:student
})

}catch(err){
res.status(500).json({error:err.message})
}
}

exports.DeleteStudent=async(req,res)=>{
    try{
        const student = await Student.findByIdAndDelete(req.params.id);
        res.status(202).json({
            message : "student data deleted by id"
        })

    }catch(err){
        res.status(500).json({
            err: err.message
        })

    }
}
