# es2015-publish-template
Write typescript es2015 modules and bundle for npm, bower and jspm

##Running examples
This project is to serve as a simple library authoring template and to provide examples on how you might consume this library.
You would not install and run the project at the root directory directly but instead review its makeup and build/run projects
within the [_"examples"_](examples/) directory. 

###Projects
- [Consume library with NodeJS via npm](examples/01_node)
- [Consume library with NodeJS via npm and jspm](examples/02_node_and_jspm)

##Suggestions for library authors
- Build your code and organize binaries in all intended formats (_"dist"_ directory?) before publishing
    - You'll eventually find relying on npm's _"postinstall"_ script is a bad idea when considering jspm, not to mention it takes longer to build your code than download it
- If writing in es2015, don't bundle your code with webpack/browserify
    - Package managers are getting better, modules in es2015 are nicely decoupled.  Bundlers like [jspm](http://jspm.io/docs/production-workflows.html) and [rollup](https://github.com/rollup/rollup) can intelligently analyze your module dependencies (tree-shaking) to spit out optimized and small binaries
    