var mongoose = require('mongoose');
var Track = mongoose.model('Track'); 
var User = mongoose.model('User'); // Importa el modelo de usuario
var CommentData = mongoose.model('CommentData'); 
const ObjectId = mongoose.Types.ObjectId;
const { trackFindAll } = require('../controllers/track'); // Asegúrate de proporcionar la ruta correcta al archivo donde se encuentra la función trackFindAll

var config = require('../config');
const axios = require('axios');
const { json } = require('express');

require('dotenv').config();

/* GET  api/getTracks */
module.exports.trackFindAll = function(req, res) {
    Track
    .find()
    .exec(function(err, tracks) {
      if (!tracks) {
        res.status(404).json({
          "message": "Tracks not found"
        });
        return;
      } else if (err) {
        console.log(err);
        res.status(500).json(err);
        return;
      }
      console.log(tracks);
      res.status(200).json(tracks);
    });
  };


  module.exports.getUser = function(req, res) {
    res.json(req.user);
  };

/* GET api/search/track/:name */
  module.exports.searchTrackSpotify = async function(req, res) {
    try {

       const offset = req.query.offset || 0;
       const limit = req.query.limit || 20;

       const response = await axios.get(`https://api.spotify.com/v1/search?query=${req.params.name}&type=track&offset=${offset}&limit=${limit}`, {
          headers: {
             'Authorization': `Bearer ${config.accessToken}`
          }
       });


       const tracks = response.data.tracks.items.map((item) => {
        return {
          id: item.id,
          album: {
            id: item.album.id,
            name: item.album.name,
            artists: item.album.artists.map((artist) => {
              return { id: artist.id, name: artist.name };
            }),
            images: item.album.images.map((image) => {
              return { height: image.height, url: image.url, width: image.width };
            }),
            release_date: item.album.release_date,
            release_date_precision: item.album.release_date_precision,
            total_tracks: item.album.total_tracks,
          },
          name: item.name,
          duration_ms: item.duration_ms,
          id: item.id,
          preview_url: item.preview_url,
          comments: [],
          latitude: item.latitude,
          longitude: item.longitude,
          accuracy: item.accuracy
        };
       });

       res.status(200).json(tracks);
       console.log(response.data);
       
    } catch (error) {
       console.error(error);
       res.status(500).json({ error: error.message });
    }
 }

 /* GET api/recomendations */
 module.exports.getRecomendations = async function(req, res) {
  try {
    const tracks = await Track.find().exec();

    if (tracks.length === 0) {
      return res.status(404).json({ error: 'No tracks found in the database.' });
    }
    const trackIds = await Promise.all(tracks.map(track => getSpotifyTrackId(track)));

    const filteredTrackIds = trackIds.filter(id => id !== null);

    if (filteredTrackIds.length === 0) {
      return res.status(404).json({ error: 'No tracks found in Spotify API.' });
    }

    const artistIds = tracks.reduce((ids, track) => {
      track.album.artists.forEach(artist => {
        if (!ids.includes(artist.id)) {
          ids.push(artist.id);
        }
      });
      return ids;
    }, []);

    const baseUrl = 'https://api.spotify.com/v1/recommendations';
    const seedQuery = `seed_tracks=${filteredTrackIds.join(',')}&seed_artists=${artistIds.join(',')}`;
    const apiUrl = `${baseUrl}?${seedQuery}`;

    const response = await axios.get(apiUrl, {
      headers: {
        'Authorization': `Bearer ${config.accessToken}`
      },
    });

    if (response.status === 200) {
      const recommendations = response.data.tracks;
      res.status(200).json(recommendations);
    } else {
      res.status(response.status).json({ error: 'Spotify API error.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal error on the server.' });
  }
};

async function getSpotifyTrackId(track) {
  try {
    const response = await axios.get('https://api.spotify.com/v1/search', {
      headers: {
        'Authorization': `Bearer ${config.accessToken}`
      },
      params: {
        q: track.id,
        type: 'track',
        limit: 1
      }
    });

    const spotifyTracks = response.data.tracks.items;
    if (spotifyTracks.length > 0) {
      return spotifyTracks[0].id;
    }
  } catch (error) {
    console.error(error);
  }

  return null;
}

/* POST api/tracks */
 module.exports.addSelectedTracks = async function(req, res) {
    try {
      const tracks = req.body.tracks;
  
      for (const track of tracks) {
        const newTrack = new Track({
            id: track.id,
            name: track.name,
            releaseDate: track.releaseDate,
            album: track.album,
            genres: track.genres,
            artists: track.artists,
            images: track.images,
            duration_ms: track.duration_ms,
            id: track.id,
            preview_url: track.preview_url,
            totalTracks: track.total_tracks,
            comments: track.comments,
            latitude: track.latitude,
            longitude: track.longitude,
            accuracy: track.accuracy,
            userId: track.userId
          });
  
        const savedTrack = await newTrack.save();
        console.log('Track added to the database:', savedTrack);
      }
  
      res.status(201).json({ message: 'Tracks added to the database.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };

/* POST api/track */
module.exports.createTrack = async (req, res) => {
  try {
    const trackData = req.body;

    if (!trackData) {
      return res.status(400).json({ error: 'Missing track data' });
    }

    const track = new Track({
      id: trackData.id,
      name: trackData.name,
      releaseDate: trackData.releaseDate,
      album: trackData.album,
      genres: trackData.genres,
      artists: trackData.artists,
      images: trackData.images,
      duration_ms: trackData.duration_ms,
      totalTracks: trackData.total_tracks,
      comments: trackData.comments,
      latitude: trackData.latitude,
      longitude: trackData.longitude,
      accuracy: trackData.accuracy,
      userId: trackData.userId
    });


    const savedTrack = await track.save();
    console.log('Track added to the database:', savedTrack);
    res.status(201).json({ message: 'Tracks added to the database.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

/* GET api/tracks/searchArtistName/:artist */
module.exports.getTracksByArtist = async function(req, res) {
  try {
    const artistName = req.params.artist;
    const regex = new RegExp(artistName, "i");
    const track = await Track.find({'album.artists.name': regex});

    res.status(200).json(track);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

/* GET api/tracks/searchTrackName/:name */
module.exports.getTracksByName = async function(req, res) {
  try {
    const trackName = req.params.name;
    
    const regex = new RegExp(trackName, "i");
    const track = await Track.find({name: regex});

    res.status(200).json(track);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

/* GET api/tracks/searchTrackDate/:date */
module.exports.getTracksByDate = async function(req, res) {
  try {
    const releaseDate = req.params.date;
    const regex = new RegExp(releaseDate, "i");
    const track = await Track.find({'album.release_date': regex});

    res.status(200).json(track);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

/* GET api/tracks/:id */
module.exports.getTrackById = async function(req, res) {
  try {
    const id = req.params.id;
    const track = await Track.findOne({ _id: ObjectId(id) });

    if (!track) {
      res.status(404).json({ error: 'Track not found' });
      return;
    }

    track.objectId = track._id.toString();

    res.status(200).json(track);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

/* POST api/tracks/{id}/comments */
module.exports.addCommentsToTrack = async (req, res) => {
  try {
    const track = await Track.findById(req.params.id);

    if (!track) {
      res.status(404).json({ error: 'Track not found' });
      return;
    }

    const comment = new CommentData({
      rating: req.body.rating,
      author: req.body.author,
      comment: req.body.comment,
      createdOn: req.body.createdOn,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      accuracy: req.body.accuracy,
      userId: req.body.userId
    });

    track.comments.push(comment);
    await track.save();

    res.status(201).json(comment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

/* DELETE api/track/:id */
exports.deleteTrack = async function(req, res) {
  try {
    const trackId = req.params.id;

    const track = await Track.findById(trackId);
    if (!track) {
      return res.status(404).json({ error: 'Track not found' });
    }

    await Track.findByIdAndDelete(trackId);

    console.log('Track removed from the database.');
    res.status(200).json({ message: 'Track removed from the database.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

/* DELETE api/tracks/:trackId/comments/:commentId */
module.exports.deleteComment = async (req, res) => {
  try {
    const trackId = req.params.trackId;
    const commentId = req.params.commentId;

    const track =  await Track.findById(trackId);

    if (!track) {
      return res.status(404).json({ error: 'Track not found' });
    }

    const commentIndex = track.comments.findIndex(comment => comment._id.toString() === commentId)

    if(commentIndex === -1){
      return res.status(404).json({ error: 'Comment not found' });
    }

    track.comments.splice(commentIndex, 1);
    await track.save();

    res.status(200).json({ message: 'Comment deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

/* PUT api/track/:id */
module.exports.editTrack = async (req, res) => {
  try {
    const trackId = req.params.id;
    const trackData = req.body;

    if (!trackData) {
      return res.status(400).json({ error: 'Missing track data' });
    }

    const updatedTrack = await Track.findByIdAndUpdate(
      trackId,
      {
        $set: trackData
      },
      { new: true }
    );

    console.log('Updated track in the database:', updatedTrack);
    res.status(200).json({ message: 'Updated track in the database.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};