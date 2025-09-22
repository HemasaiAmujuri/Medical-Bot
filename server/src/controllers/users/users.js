const  userSchema = require("../../models/users/users");
import bcrypt from 'bcrypt'



const createUser = async(req,res) => {
    const data = req.body;
    const saltRounds = 10;
    try{
    const hashedPassword = await bcrypt.hash(data.basicDetails.password, saltRounds)
    data.basicDetails.password = hashedPassword;
    const user = await userSchema(data)
    return res.status(200).json({ success : true, data : user, message : "data Saved Successfully"})
    }catch(err){
       res.status(500).json({ error : err.message})
    }
};



const getUsers = async(req,res) => {
    try{
    const users = await userSchema.find();
    return res.status(200).json({success : true, data : users, message : "data Retrieved Successfully"});
}catch(err){
    return res.status(500).json({ success : false, message : err.message })
}
}


const getUserById = async(req,res) => {
    try{
       const id = req.params.id;
       const user = await userSchema.findById(id);
       if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }
       return res.status(200).json({ success : true, data : user, message : "data retrieved successfully"})
    }catch(err){
        return res.status(500).json({ success : false, message : err.message})
    }
}



const updateUser = async(req,res) => {
    try{
        const id = req.params.id;
        const data = req.body;
         const user = await userSchema.findByIdAndUpdate(id, data, {
          new: true,      
       });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }
        return res.status(200).json({ success : true, data : user, message : "data updated successfully"})
    }catch(err){
        return res.status(500).json({ success : false, message : err.message})
    }
}


const deleteUser = async(req,res) => {
     try{
        const id = req.params.id;
        const user = await userSchema.findByIdAndUpdate(  id,{ isDeleted : true, new : true } );

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }


        return res.status(200).json({ success : true, data : user, message : "data deleted successfully" })
     }catch(err){
        return res.status(500).json({ success : false, message : err.message })
     }
}



const userLogin = async(req,res) => {
    try{
        const { email, password } = req.body;
        const user = await userSchema.find( { email : email });
        if(!user){
            return res.status(200).json({ success : true, message : "User not found"})
        }
        const userPassword = user.basicDetails.password;
        const match = bcrypt.compare(userPassword,password)
        if(!match){
            return res.status(403).json({ message : "Incorrect password, please enter valid password!"})
        }
        return res.status(200).json({ success : true, message : "Login Successfully"})
    }catch(err){
        return res.status(500).json({ succes : false, message : err.message })
    }
}



module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
    userLogin
}