const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookData = new Schema ({
    title : {type: String, required: true},
    author :{
        firstName : {type: String, required: true},
        lastName  :  {type: String, required: true},
    }, 
    language : {type: String, required: true},
    genre  : {type: String, required: true},
    currency : {type: String, required: true},
    price : {type: String, required: true},
    //lender : {type: String, required: true},
    replacementCost  : {type: String, required: true},
    rented : {type:Boolean, default : false},
    rentDate :{type :Date, default: null}
    /*renter : {
        type : Schema.Types.ObjectId,
        ref : 'userDataCol'
    }*/
});

const bookDataCol = mongoose.model('bookDataCol',bookData);

module.exports = bookDataCol;