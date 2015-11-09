# IOTServer
Node.js, loopback.js, JSPM, Aurelia, Gulp + Azure

API and web front end for IoT devices

Loopback.io for the Node.JS API so first do:
`npm install -g strongloop`

AAAAnd [http://jspm.io/](JSPM) for front end package management, ES6 compilation and bundling so do:
`npm install jspm -g`

1. `npm install` for server dependencies
2. `jspm install` for client dependencies
3. `gulp watch` and navigate to `http://localhost:4000`

PRODUCTION (or... "Production")

Included is an Azure deployment file which sets it up in production and create a JSPM bundle of JS.
