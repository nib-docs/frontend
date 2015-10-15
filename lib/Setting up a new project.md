# Setting up a new project

Setting up the frontend structure and tooling of a new project is time consuming and error prone. We've spent a bunch 
of time experimenting to work out the ideal frontend structure and tooling to suit the majority of our public web projects 
at nib. From these learnings we've created a [generator](https://www.npmjs.com/package/generator-fed) to speed up the 
creation of new projects and to keep our projects more consistent across teams.

## Project setup

> Get in touch with Shannon if you're building a .NET MVC project, he's building a scaffolding tool for .NET MVC projects 
and it will perform the following setup.

1. Install gulp, yo and the most recent version of the frontend generator

        npm install -g gulp yo generator-fed@latest
   
2. Create a directory for your project's frontend to live in

        mkdir -p src/Nib.Content.HomePage.Web/Content
        cd src/Nib.Content.HomePage.Web/Content
    
3. Run the frontend generator to scaffold out the frontend in a new project

        yo fed --name nib.content.homepage.web
    
    > Use the `--static` switch if you wish to create a static site.
    
4. Install the frontend build tools

        npm install --production --no-optional
    
    > The install will take a couple of minutes.

    > You'll probably run into issues where the firewall/proxy causes the install to fail. You can:
    
    > - switch to the `Developer` WIFI where Bitbucket and S3 aren't blocked and then install from the public registry (because the [http://npm:8080](http://npm:8080) isn't accessible on this network)
        `npm install --registry https://registry.npmjs.com`
    > - add some entries to your `hosts` file to send requests for certain hostnames via an alternate proxy.
    
5. Build the project

        gulp all
    
    > You'll need to be on the `Corp` WIFI and have npm setup to use the internal npm registry (`npm config set registry http://npm:8080`) in order for any of our `@nib-*` components to install.
    
6. Because the assets get cache busted, if you're not creating a static site you'll need to use a helper to reference your script, style and image assets from your templates. 

    > Use use [this](http://ntlvmbld01:7990/projects/NC/repos/nib-common-revisioned-asset-helper/browse) helper for .NET MVC.

    > Turn [this](https://github.com/jameslnewell/ruby-frontend/blob/master/app/helpers/asset_helper.rb) and [this](https://github.com/jameslnewell/ruby-frontend/blob/e7014bc5ffdc3a77d05f125d60c00fbbc69be437/config/initializers/asset_manifest.rb) classes into a gem for Ruby on Rails.
    
7. Configure Bamboo to use the test results in `./dist/__reports__/mocha.json`