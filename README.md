# Frontend

This document will guide you through the methodologies, tools and frameworks used for Frontend Development at nib.

## Overview

### Methodologies

- unix
- bem
- ui "components"

### Tools

#### nodejs

[Node.js](https://nodejs.org/en/) is the JavaScript runtime on which our frontend toolset runs. 

Node.js uses the [CommonJS](http://wiki.commonjs.org/wiki/Modules/1.1) module pattern. In the CommonJS module pattern a JavaScript file is called a "module". 
Modules that export variables, functions and/or objects using the special `exports` object can be `require`d by other modules.

`add.js`
  
    module.exports = function(a, b) {
      return a+b;
    };
    
`app.js`

    var add = require('./add.js');
    console.log('1+1 = '+add(1, 1)); //prints: 1+1 = 2

Learn more about modules in Node.js [here](https://nodejs.org/docs/latest/api/modules.html).

#### npm

[npm](https://www.npmjs.com/) is the package manager used for downloading, installing and managing our frontend tools and dependencies.

A "package" consists of one or more files (and isn't limited to just JavaScript files) and a [manifest file](https://docs.npmjs.com/files/package.json) that contains meta data about the package.

#### browserify

Browsers don't have any concept of modules. We use [browserify](http://browserify.org/) to convert our CommonJS modules into a single static file that contains all of our scripts and all of their dependencies.

> [Webpack](https://webpack.github.io/) is the most suitable competing tool for bundling scripts (and more). We chose browserify because:
>
> - it uses convention over configuration (but is still highly configurable) making it easier to setup for most cases
> - its module philosophy - transforms are configured by the package owner, not the project owner - the project owner shouldn't have to figure out which transforms are required by each of their dependencies
> - it doesn't break nodejs conventions (e.g. `require('coffee!./cup.coffee')`)

#### sass-composer



#### gulp

### Project structure
    
    dist/
    
      bundled.css
      bundled.js
      
      __reports__/
        mocha.json
        coverage/
          index.html

    src/
        
      package.json
      gulpfile.js
    
      assets/
        package.json
        index.js
        index.scss
        test/
          index.js
      
      content/
        img/
        
    tasks/



### Frameworks

#### Testing
- mocha/browserify-test
- assert
- sinon