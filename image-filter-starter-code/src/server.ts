import express from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';

(async () => {

  const app = express();
  const networkPort = process.env.PORT || 8082;

  /* Middleware for post requests */
  app.use(bodyParser.json());

  /*
   * GET /filteredimage?image_url={{URL}}
   * endpoint to filter an image from a public url.
   * IT SHOULD
   * QUERY PARAMATERS
   *    image_url: URL of a publicly accessible image
   * RETURNS
   *   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]
   */
  app.get( "/filteredimage", async ( req, res ) => {
    var imgUrl = req.query.image_url;

    if (!imgUrl){
      return res.status(400).send({ message: 'File url is required' });
    }

    const filteredUrl = await filterImageFromURL(imgUrl);

    res.status(200).sendFile(filteredUrl, () => deleteLocalFiles([filteredUrl]));

  } );

  /* Endpoint instructions */
  app.get( "/", async ( req, res ) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );

  app.listen( networkPort, () => {
    console.log( `server running http://localhost:${ networkPort }` );
    console.log( `press CTRL+C to stop server` );
  } );
})();
