# IOTServer

We use loopback.io for the Node.JS API so first do:
`npm install -g strongloop`

AAAAnd we're using [http://jspm.io/](JSPM) for front end package management, ES6 compilation and bundling so do:
`npm install jspm -g`

1. `npm install for server dependencies`
2. `jspm install for client dependencies`
3. `slc run`


PRODUCTION (or... "Production")

`jspm bundle-sfx lib/main app.js`
Include in index.html
Also need Traceur runtime if you are using ES6 features (hopefully not for long https://github.com/systemjs/builder/issues/46)


For heroku...

http://docs.strongloop.com/display/SL/Heroku

`heroku apps:create --buildpack https://github.com/strongloop/strongloop-buildpacks.git