# NodeJS library import example
Consumes [es2015-publish-template](https://github.com/setheen/es2015-publish-template) project using npm via github registry and [lodash](https://github.com/lodash/lodash) via npm

##Running this example
Make sure you have typings installed globally first
```sh
npm install typings -g
```
```sh
npm install
typings install
node app.js
```

## Mechanisms utilized
- npm
    - github registry
    - npm registry
- typings
    - lodash
    
## Scenario
The key takeaway with this example is we are able to display intellisense module _"d.ts"_ declaration files within our IDE. 
For lodash, we can rely on the public _"typings"_ registry.  Simple enough right?  What about our own library project?

Stepping out of this example project, let's pretend we're about to publish our library for the world to consume.
We'd like to generate a d.ts definition file for coding ease.  Here are some popular options:

1. upload to [DefinitelyTyped](http://definitelytyped.org/tsd/) for eventual consumption via command _"tsd"_  
2. upload to [the typings registry](https://github.com/typings/registry) for eventual consumption via command _"typings"_
3. keep it within our source, exposed within package.json's _"typings"_ property

It turns out, option 1 is [deprecated](https://github.com/DefinitelyTyped/tsd) as mentioned [here](https://github.com/DefinitelyTyped/tsd/issues/269).
Option 2 might be nice if we had a large, heavily relied upon public codebase and we were willing to undergo [submission collaboration](https://github.com/typings/registry/labels/typings%20request).
This example actually relies on option 2 for loading lodash definitions.
Option 3 looks most reasonable for our small library.

Option 3 is pretty simple too.  It's just one step.  From library project to be published, point package.json _"typings"_ property to your generated index.d.ts

```json
{
    "typings": "dist/es2015/index.d.ts"
}
```

That's it!  Packages deployed with the _"typings"_ property will enable the IDE to provide helpful intellisense. 