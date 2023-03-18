const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const expenseSchema=new Schema({
    amount:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    reason:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
})

module.exports=mongoose.model('Expense',expenseSchema);



