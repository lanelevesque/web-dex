

This repo contains 2 packages, one for the front end with React + TypeScript, and one for the backend running Node + ExpressJS.

To simplify things, I included PM2 to manage starting/stopping/checking status of both packages at once.

To begin, please clone the repo.

```
https://github.com/lanelevesque/web-dex.git
```

Once cloned, navigate to your new web-dex directory and install the dependencies.

```
cd web-dex
npm install
```

Now, run the following commands to install the dependencies for both packages, then return to the root folder.

```
cd react-pokedex && npm install
cd ../express-pokedex && npm install
cd ../
```

Installation is complete! Please use the following commands from the root folder:

```
npm start //Starts both packages
npm stop //Stops both packages
npm run status //Check the current status of both processes
```

When started, the front end is accessible at: 

```
http://localhost:5173/
```

While the backend is accessible at:

```
http://127.0.0.1:3000
```
