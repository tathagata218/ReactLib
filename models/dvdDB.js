const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dvdData = new Schema ({
    title : {type: String, required: true},
    direction : {type: String, required: true},
    leads : {type: String, required: true},
    comments : {type: String, required: true},
    rented : {type:Boolean, default : false},
    rentDate :{type :Date, default: null}
    /*renter : {
        type : Schema.Types.ObjectId,
        ref : 'userDataCol'
    }*/
});

const dvdDataCol = mongoose.model('dvdDataCol',dvdData);

module.exports = dvdDataCol;