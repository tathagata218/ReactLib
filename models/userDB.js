const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userData = new Schema ({
    Name: {
        firstName : {type: String, required: true},
        lastName :{type: String, required:true}
    },
    
    spouceName:{
        firstName : {type: String, required: true},
        lastName :{type: String, required:true}
        },
    
        Email:{type : String, required: true, unique: true},
    
        validMebership : {type: Boolean},
        
        password : {type: String, required: true},

        admin : {type:Boolean, default : false},
    
        memberDate : {type:Date},
    
        checkDetails :{type:String},
    
        booksCheckedout : {type:Array,validate:[(data) => {
            return data.length <= 3
        },`{PATH} exceeds the limit of 3`]},
    
        dvdCheckedOut: {type:Array,validate:[(data) => {
            return data.length <= 3
        },`{PATH} exceeds the limit of 3`]}
   


    
});
//---------------------------------This is the validate function
const itemValidate = (data) => {
    return data.length <= 3
}
//--------------------------------This is the validate function

const userDataCol = mongoose.model("userDataCol", userData);

module.exports = userDataCol;


