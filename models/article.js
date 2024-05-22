const mongoose =require("mongoose")
const articleSchema=mongoose.Schema({
designation:{ type: String, required: true,unique:true },
prix:{ type: Number, required: false },
qtestock:{ type: Number, required: false },
imageart:{ type: String, required: false },
})
module.exports=mongoose.model('article',articleSchema)