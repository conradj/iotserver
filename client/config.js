System.config({
  "baseURL": "./",
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js"
  },
  "bundles": {
    "build": [
      "lib/display-room",
      "lib/ajax",
      "lib/sockets",
      "lib/display-rooms",
      "lib/bootstrap",
      "lib/main"
    ]
  }
});

