# Performance Target

## Metrics

### Time To First Byte

The time from the start of the initial navigation until the first byte of the base HTML page is received by the browser (after following redirects). This is a good approximation of the time it took your server to generate the HTML on the server and then deliver it over the network to the user's browser.

`TTFB` should be `<500ms` on a `3G` or better connection.

> Note: TTFB can affect SEO ranking.
> Note: TTFB is a meaningless metric if your body isn't delivered with the first byte. See [CloudFlare](https://blog.cloudflare.com/ttfb-time-to-first-byte-considered-meaningles/)'s blog for more information.

### Start render

The Start Render time is measured as the time from the start of the initial navigation until the first non-white content is painted to the browser display. Any CSS and blocking JS you have on the page has to be downloaded and parsed by the browser before it can render anything to screen. This is called the critical rendering path and the Start Render metric is very important in understanding how long users have to wait before anything is displayed on screen.

`Start Render` should be `<3s` on a `3G` or better connection.

### Time To Interactive

> We're unable to measure TTI with SpeedCurve :slightly_frowning_face: 

### Visually complete

Visually complete is the time at which all the content in the viewport has finished rendered and nothing changed in the viewport after that point as the page continued loading. It's a great measure of the user experience as the user show now see a full screen of content and be able to engage with the content of your site.

`Visually complete` should be `<5s` on a `3G` or better connection.

## Guidelines

### HTML

- HTML should be minified

#### Use Server Side Rendering

To improve perceived performance, all projects should render some form of HTML on the server.

For content pages, render actual content as HTML on the server (or even better, at build time).

For apps, render placeholder content as HTML on the server (or even better, at build time). Placeholder content should 
not be specific to any user (so it can be cached) and should not require actual data 
(waiting for actual data will increase `TTFB` and `SR`).

### Scripts and Styles

- Run `npm dedupe` before bundling to avoid bundling multiple versions of the same package where possible
- Use a bundle analyzer to check for large or duplicate packages
- Should be loaded from within the `body` using the `defer` attribute

#### The `app` bundle

This bundle is required. It should contain project specific code.

> Example: `MyComponent` is a `react` component re-used on every page in your project. 

- This bundle should be served using gzip compression
- When gzipped, this bundle should be less than `75KB` for JS and `20KB` for CSS
- This bundle should be served with an `Expires` header greater than or equal to 1 year in the future
- This bundle should be finger-printed using the contents of the bundle e.g. `app.ae12fd09.js` 

> If your `app` bundle starts to get large, use code splitting to move all code unnecessary for initialisation into a
dynamically loaded bundle. Use `<link rel="preload" href="./dynamically-loaded-bundle.js"/>`

#### The `common` bundle

This bundle is optional. It should contain project specific code that is used by *every* page in your project and that 
can be shared across multiple pages in order to improve performance.

> Example: `MyComponent` is a `react` component re-used on every page in your project. 
 
- This bundle should be served using gzip compression
- When gzipped, this bundle should be less than `150KB` for JS and `40KB` for CSS
- This bundle should be served with an `Expires` header greater than or equal to 1 year in the future
- This bundle should be finger-printed using the contents of the bundle e.g. `common.ae12fd09.js` 

#### The `vendor` bundle

This bundle is optional. It should contain non-project specific code that is used by *every* page in your project, that changes infrequently,
 that can shared across multiple projects and that can be cached across multiple releases in order to improve performance.

> Example: `react`, `react-dom`, `react-router`, `redux` and `react-redux` are packages that you aren't likely to 
 upgrade for a number of months/years in your project.
 
- This bundle should be served using gzip compression
- When gzipped, this bundle should be less than `150KB` for JS and `40KB` for CSS
- This bundle should be served with an `Expires` header greater than or equal to 1 year in the future
- This bundle should be finger-printed using the contents of the bundle e.g. `vendor.ae12fd09.js` 
 
 > In the future, we plan to re-use common `vendor` bundles across multiple projects. This will save the client from downloading
 duplicate copies of the same libraries/frameworks across the multiple projects that make up our website.

### Images

- max size for hero type images
- retina images
- per-device images
