const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);
const runtimeOpts = {
        timeoutSeconds: 300,
         memory: '1GB'

	// memory: '2GB'
}


exports.helloWorld = functions.region('asia-northeast1').runWith(runtimeOpts).https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});


exports.user = functions.https.onRequest((request, response) => {
        response.json(  {
                "title": "The Basics - Networking",
                "description": "Your app fetched this from a remote endpoint!",
                "movies": [
                  { "id": "1", "title": "Star Wars", "releaseYear": "1977" },
                  { "id": "2", "title": "Back to the Future", "releaseYear": "1985" },
                  { "id": "3", "title": "The Matrix", "releaseYear": "1999" },
                  { "id": "4", "title": "Inception", "releaseYear": "2010" },
                  { "id": "5", "title": "Interstellar", "releaseYear": "2014" }
                ]
              });
       });

       
exports.helloContent =functions.https.onRequest( (req, res) => {
        let name;
      
        switch (req.get('content-type')) {
          // '{"name":"John"}'
          case 'application/json':
            name = req.body.name;
            break;
      
          // 'John', stored in a Buffer
          case 'application/octet-stream':
            name = req.body.toString(); // Convert buffer to a string
            break;

          // 'John'
          case 'text/plain':
            name = req.body;
            break;
      
          // 'name=John' in the body of a POST request (not the URL)
          case 'application/x-www-form-urlencoded':
            name = req.body.name;
            break;
        }
      
        res.status(200).send(`Hello ${escapeHtml(name || 'World')}!`);
      });