var mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

var userSchema = mongoose.Schema({ 
    _id: { type: ObjectId, auto: true },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

mongoose.model('User', userSchema);
