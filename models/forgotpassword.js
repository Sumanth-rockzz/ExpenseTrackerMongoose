
const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const forgotPasswordSchema=new Schema({
    id:{
        type:Schema.Types.UUID
    },
    isactive:{
        type:Boolean
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
})
module.exports=mongoose.model('ForgotPassword',forgotPasswordSchema);

// const Sequelize=require('sequelize');

// const sequelize=require('../util/database');


// const Forgotpassword=sequelize.define('forgotpasswordrequest',{

//     id:{
//         type:Sequelize.UUID,
//         allowNull:false,
//         primaryKey:true,
//     },
//     isactive:Sequelize.BOOLEAN
// });

// module.exports=Forgotpassword;