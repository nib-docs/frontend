# Frameworks

We're currently using the `React` and `Redux` ecosystems to build frontend applications. Prior to using `React` and `Redux` we
built frontend applications in vanilla JS with a handful of "[components](https://github.com/component)" where necessary and
 followed the [Passive Screen](http://martinfowler.com/eaaDev/PassiveScreen.html) pattern.

Using the Passive Screen pattern meant that our views contained almost no logic, and that gave us some level of confidence - since we weren't unit-testing views
(we *were* unit-testing models and controllers but the views were rendered on the server (.NET) and were tightly coupled to the DOM which made them very difficult to test).
`React` solves some of these problems by providing efficient templating`^`, encapsulating markup in JS, and abstracting away the DOM. `^`mention that wiring up views (`document.querySelector()` and `el.textContent`) was pretty manual and time consuming

Our implementation the Passive Screen pattern resulted in our application state being split across multiple controllers
and dependent on a crazy web of event handlers. These factors combined made it difficult understand what would change
when an event was fired and what would be impacted by adding or removing new events. `Redux` alleviates some of these problems
by enforcing a single application store and synchronous updating of the state.
