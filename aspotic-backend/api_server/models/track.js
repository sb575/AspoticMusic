var mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;


const commentSchema = new mongoose.Schema({
    _id: { type: ObjectId, auto: true },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        required: true
      },
    author: { type: String, required: true },
    comment: { type: String, required: true },
    createdOn: {type: Date, "default": Date.now },
    latitude: Number,
    longitude: Number,
    accuracy: Number,
    userId: { type: String}
});

var trackSchema = mongoose.Schema({ 
    album: {
        id: String,
        name: String,
        artists: [{
            _id: false,
            id: String,
            name: String,
        }],
        images: [{
            _id: false,
            height: Number,
            url: String,
            width: Number,
        }],
        release_date: String,
        release_date_precision: String,
        total_tracks: Number,
    },
    spotifyId: String,
    name: String,
    duration_ms: Number,
    preview_url: String,
    comments: [commentSchema],
    genres: [{type: String}],
    latitude: Number,
    longitude: Number,
    accuracy: Number,
    userId: { type: String}
});

mongoose.model('Track', trackSchema);
mongoose.model('CommentData', commentSchema);