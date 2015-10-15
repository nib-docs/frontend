# Setting up a new project


Setting up your the build tools and project structure is time consuming and error prone. We've created a generator to get you coding sooner and to keep all of our projects more consistent.


## Setup

> Get in touch with Shannon if you're building a .NET MVC project, he's building a scaffolding tool which will include the following steps.


1. Install the most recent version of the generator:
    `npm install -g gulp yo generator-fed@latest`
   
2. Create a directory for your frontend to live in:
    `mkdir -p src/Nib.Content.Web/Content`
    `cd src/Nib.Content.Web/Content`
    
3. Run the generator to scaffold out the project:
    `yo fed --name nib.content.web`
    
    > Use the `--static` switch if you wish to create a static site.
    
4. Install the build tools:
    `npm install --production --no-optional`
    
    > The install will take a couple of minutes.

    > You'll probably run into issues where the firewall/proxy causes the install to fail. You can:
    > - switch to the `Developer` WIFI where Bitbucket and S3 aren't blocked and install from the public registry (because the internal registry isn't available on this network)
    > `npm install --registry https://registry.npmjs.com`)
    > - add some entries to your `hosts` file to send requests for certain hostnames via an alternate proxy.
    
5. Build the project:
    `gulp all`
    
    > You'll need to be on the `Corp` WIFI and have npm setup to use the internal npm registry (`npm config set registry http://npm:8080`) in order for any of our `@nib-*` components to install.
    
6. Because the assets get cache busted, if you're not creating a static site you'll need to use a helper to include your script, style and image assets into your templates. 

    > Use use [this](http://ntlvmbld01:7990/projects/NC/repos/nib-common-revisioned-asset-helper/browse) helper for .NET MVC.

    > Turn [this](https://github.com/jameslnewell/ruby-frontend/blob/master/app/helpers/asset_helper.rb) and [this](https://github.com/jameslnewell/ruby-frontend/blob/e7014bc5ffdc3a77d05f125d60c00fbbc69be437/config/initializers/asset_manifest.rb) classes into a gem for Ruby on Rails.
    
7. Configure Bambo to use the test results in `./dist/__reports__/mocha.json`