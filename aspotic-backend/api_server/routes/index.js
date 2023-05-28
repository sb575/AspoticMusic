var express = require('express');
var router = express.Router();

var middleware = require('../controllers/middleware'); 
var ctrlAuth = require('../controllers/auth'); 
var ctrlTrack = require('../controllers/track'); 


/**
 * @swagger
 * /token:
 *   get:
 *     summary: Get Spotify API token
 *     tags:
 *       - tracks
 *     description: Retrieves an access token for the Spotify API using client credentials.
 *     responses:
 *       '200':
 *         description: The access token for the Spotify API has been generated successfully.
 *       '500':
 *         description: An error occurred while retrieving the access token.
 */
router.get('/token', middleware.getAuth); 

/**
 * @swagger
 * /search/track/{name}:
 *   get:
 *     summary: Search for tracks on Spotify
 *     tags:
 *       - tracks
 *     parameters:
 *       - in: path
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: Name of the song to search for
 *       - in: query
 *         name: offset
 *         schema:
 *           type: integer
 *         description: The offset for pagination.
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: The maximum number of tracks to retrieve.
 *     responses:
 *       200:
 *         description: OK. Returns the tracks corresponding to the search name
 *       '500':
 *         description: An error occurred while searching for tracks.
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     Album:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         name:
 *           type: string
 *         artists:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               name:
 *                 type: string
 *         images:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               height:
 *                 type: integer
 *               url:
 *                 type: string
 *               width:
 *                 type: integer
 *         release_date:
 *           type: string
 *         release_date_precision:
 *           type: string
 *         total_tracks:
 *           type: integer
 *     Track:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         album:
 *           $ref: '#/components/schemas/Album'
 *         name:
 *           type: string
 *         duration_ms:
 *           type: integer
 *         spotifyId:
 *           type: string
 *         preview_url:
 *           type: string
 *         comments:
 *           type: array
 *           items:
 *           $ref: '#/components/schemas/Comment'
 *         latitude:
 *           type: number
 *         longitude:
 *           type: number
 *         accuracy:
 *           type: number
 *     Comment:
 *       type: object
 *       properties:
 *         rating:
 *           type: number
 *         author:
 *           type: string
 *         comment:
 *           type: string
 *         createdOn:
 *           type: string
 *           format: date-time
 *         latitude:
 *           type: number
 *         longitude:
 *           type: number
 *         accuracy:
 *           type: number
 *         userId:
 *           type: string
 *       required:
 *         - rating
 *         - author
 *         - comment
 *         - createdOn
 */
router.get('/search/track/:name', ctrlTrack.searchTrackSpotify);

/**
 * @swagger
 * /recomendations:
 *   get:
 *     summary: get recomendation tracks
 *     tags:
 *       - tracks
 *     responses:
 *       200:
 *         description: Lista de recomendaciones de canciones
 *       500:
 *         description: Error interno del servidor
 */

router.get('/recomendations', ctrlTrack.getRecomendations);


/**
 * @swagger
 * /tracks/{id}:
 *   get:
 *     summary: Get a track by ID
 *     description: Retrieve a track by its ID.
 *     tags:
 *       - tracks
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the track to retrieve.
 *     responses:
 *       '200':
 *         description: OK. Returns the track.
 *       '404':
 *         description: Track not found.
 *       '500':
 *         description: Internal Server Error.
 */
router.get('/tracks/:id', ctrlTrack.getTrackById);

/**
 * @swagger
 * /getTracks:
 *   get:
 *     summary: Get all tracks
 *     tags:
 *       - tracks
 *     responses:
 *       200:
 *         description: Retrieve tracks successfully
 *       404:
 *         description: Tracks not found
 *       500:
 *         description: Internal server error
 */
router.get('/getTracks', ctrlTrack.trackFindAll);


router.get('/users/me', middleware.ensureAuthenticated, ctrlTrack.getUser);

/**
 * @swagger
 * /tracks/searchArtistName/{artist}:
 *   get:
 *     summary: Get tracks by artist name
 *     description: Retrieve tracks by the name of the artist.
 *     tags:
 *       - tracks
 *     parameters:
 *       - in: path
 *         name: artist
 *         schema:
 *           type: string
 *         required: true
 *         description: The name of the artist to search for.
 *     responses:
 *       '200':
 *         description: OK. Returns the tracks matching the artist.
 *       '500':
 *         description: Internal Server Error.
 */
router.get('/tracks/searchArtistName/:artist', ctrlTrack.getTracksByArtist);

/**
 * @swagger
 * /tracks/searchTrackName/{name}:
 *   get:
 *     summary: Get tracks by name
 *     description: Retrieve tracks by the name.
 *     tags:
 *       - tracks
 *     parameters:
 *       - in: path
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: The name of the track to search for.
 *     responses:
 *       '200':
 *         description: OK. Returns the tracks matching the name.
 *       '500':
 *         description: Internal Server Error.
 */
router.get('/tracks/searchTrackName/:name', ctrlTrack.getTracksByName);

/**
 * @swagger
 * /tracks/searchTrackDate/{date}:
 *   get:
 *     summary: Get tracks by release date
 *     description: Retrieve tracks by the release date.
 *     tags:
 *       - tracks
 *     parameters:
 *       - in: path
 *         name: date
 *         schema:
 *           type: string
 *         required: true
 *         description: The release date of the tracks to search for.
 *     responses:
 *       '200':
 *         description: OK. Returns the tracks matching the release date.
 *       '500':
 *         description: Internal Server Error.
 */
router.get('/tracks/searchTrackDate/:date', ctrlTrack.getTracksByDate);


/**
 * @swagger
 * /tracks:
 *   post:
 *     summary: Add selected tracks
 *     tags:
 *       - tracks
 *     security:
 *       - Authorization: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tracks:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       description: Track ID
 *                     name:
 *                       type: string
 *                       description: Track name
 *                     releaseDate:
 *                       type: string
 *                       description: Release date
 *                     album:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: string
 *                           description: Album ID
 *                         name:
 *                           type: string
 *                           description: Album name
 *                     genres:
 *                       type: array
 *                       items:
 *                         type: string
 *                       description: Track genres
 *                     artists:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: string
 *                             description: Artist ID
 *                           name:
 *                             type: string
 *                             description: Artist name
 *                     images:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           height:
 *                             type: number
 *                             description: Image height
 *                           url:
 *                             type: string
 *                             description: Image URL
 *                           width:
 *                             type: number
 *                             description: Image width
 *                     duration_ms:
 *                       type: number
 *                       description: Track duration in milliseconds
 *                     total_tracks:
 *                       type: number
 *                       description: Total tracks
 *                     spotifyId:
 *                       type: string
 *                     preview_url:
 *                       type: string
 *                     comments:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           // Define properties for comments here
 *                     latitude:
 *                       type: number
 *                       description: Latitude
 *                     longitude:
 *                       type: number
 *                       description: Longitude
 *                     accuracy:
 *                       type: number
 *                       description: Accuracy
 *                     userId:
 *                       type: string
 *                       description: User ID
 *     responses:
 *       201:
 *         description: Tracks added successfully
 *       500:
 *         description: Internal server error
 */
router.post('/tracks', middleware.ensureAuthenticated, ctrlTrack.addSelectedTracks);

/**
 * @swagger
 * /track:
 *   post:
 *     summary: Create a new track
 *     tags:
 *       - tracks
 *     security:
 *       - Authorization: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Track'
 *     responses:
 *       201:
 *         description: Track created successfully
 *       400:
 *         description: Bad request - missing track data
 *       500:
 *         description: Internal server error
 */
router.post('/track', middleware.ensureAuthenticated, ctrlTrack.createTrack);

/**
 * @swagger
 * /tracks/{id}/comments:
 *   post:
 *     summary: Add a comment to a track
 *     tags: [tracks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the track
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Comment'
 *     responses:
 *       '201':
 *         description: Successful operation. Returns the added comment.
 *       '404':
 *         description: Track not found.
 *       '500':
 *         description: Internal Server Error.
 */
router.post('/tracks/:id/comments', ctrlTrack.addCommentsToTrack);

/**
 * @swagger
 * /tracks/{trackId}/comments/{commentId}:
 *   delete:
 *     summary: Delete a comment from a track
 *     description: Delete a specific comment from a track.
 *     tags: [tracks]
 *     parameters:
 *       - in: path
 *         name: trackId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the track containing the comment.
 *       - in: path
 *         name: commentId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the comment to be deleted.
 *     responses:
 *       '200':
 *         description: OK. The comment was successfully deleted.
 *       '404':
 *         description: Not Found. Either the track or the comment was not found.
 *       '500':
 *         description: Internal Server Error.
 */
router.delete('/tracks/:trackId/comments/:commentId', ctrlTrack.deleteComment)

/**
 * @swagger
 * /track/{id}:
 *   delete:
 *     summary: Delete a track
 *     description: Delete a specific track by ID.
 *     tags: [tracks]
 *     security:
 *       - Authorization: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the track to be deleted.
 *     responses:
 *       '200':
 *         description: OK. The track was successfully deleted.
 *       '404':
 *         description: Not Found. The track was not found.
 *       '500':
 *         description: Internal Server Error.
 */
router.delete('/track/:id', middleware.ensureAuthenticated,ctrlTrack.deleteTrack);

/**
 * @swagger
 * /track/{id}:
 *   put:
 *     summary: Edit a track
 *     description: Edit a specific track by ID.
 *     tags: [tracks]
 *     security:
 *       - Authorization: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the track to be edited.
 *       - in: body
 *         name: trackData
 *         description: The updated data for the track.
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/Track'
 *     responses:
 *       '200':
 *         description: OK. The track was successfully updated.
 *       '400':
 *         description: Bad Request. Missing track data.
 *       '404':
 *         description: Not Found. The track was not found.
 *       '500':
 *         description: Internal Server Error.
 */
router.put('/track/:id', middleware.ensureAuthenticated, ctrlTrack.editTrack);



/**
 * @swagger
 * /signout/{id}:
 *   post:
 *     summary: Sign out user by ID
 *     tags:
 *       - auth
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully signed out
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
router.post('/auth/signout/:id', ctrlAuth.signout); 

/**
 * @swagger
 * /auth/signup:
 *   post:
 *     summary: Create a new user
 *     tags:
 *       - auth
 *     description: Create a new user with the username and password provided
 *     parameters:
 *       - in: body
 *         name: body
 *         description: Username and password for the new user
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             username:
 *               type: string
 *             password:
 *               type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Token generated for the created user
 *         schema:
 *           type: object
 *           properties:
 *             token:
 *               type: string
 *       400:
 *         description: Failed to create the user
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 */

router.post('/auth/signup', ctrlAuth.signup); 

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Sign in
*     tags:
 *       - auth
 *     description: Sign in with username and password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - username
 *               - password
 *     responses:
 *       200:
 *         description: Successful sign in
 *       401:
 *         description: Invalid credentials
 */
router.post('/auth/login', ctrlAuth.login);

module.exports = router;

