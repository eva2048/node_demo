var mongoose=require('mongoose');
var contactSchema=new mongoose.Schema({
	'phone':String,
	'wechat':String,
	'desc':String,
	'createTime':String
});
module.exports=mongoose.model('Contact',contactSchema);