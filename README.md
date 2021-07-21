# Installation
### Node and npm is required

## Dependencies
### install node and ts-node
```console
$ npm install -g ts-node
$ npm install -g tsc
```

# Deployment
## Create file src/ts/globals.ts
```TypeScript
    export let TOKEN : string = '';
    export let QUOTEROOM : string = '';
```
## Commands to run
### run from src folder
```console
$ npm install
$ tsc
```

### Now the compiler has created a dist folder with all the javascript needed, now host in pm2 or any other place