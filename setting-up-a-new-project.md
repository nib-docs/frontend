# Setting up a new project

## Creating a prototype

Use our [CodePen](http://codepen.io/pen?template=OXaRjb&editors=0010) template if you're creating a small, visual 
prototype.

## Creating a static site

Use the [static site generator](https://git.nib.com.au/jnewell/generator-react-static-site) if you're creating a 
traditional website where:

- all users are served the same content on each page
- pages are not updated frequently
- pages are not part of a flow
- SEO is important 

For example:
- landing pages like `/do-it-for-them/` and `/offer/basic-hospital/nsw`
- content pages like `/nib-news` and `/health-information`

> Note: SEO might not be a deciding factor anymore if you your app adheres to the various specifications for crawlable 
"AJAX applications". See [Google](https://developers.google.com/webmasters/ajax-crawling/docs/learn-more) and 
[Bing](https://blogs.bing.com/webmaster/2013/03/21/search-engine-optimization-best-practices-for-ajax-urls/) documentation.

## Creating an app

Use the [app generator](https://git.nib.com.au/frontend/generator-react-app/)* if you're creating dynamic website 
where:
- users may see user-specific content
- pages are part of a flow
- ???

For example:
- public apps e.g. `/health-insurance/choose-cover/hospital` and `/health-insurance/join/personal-details`
- portal apps e.g. `my.nib.com.au` and `one.nib.com.au`

*Note: We're planning to update the generator over the coming weeks.