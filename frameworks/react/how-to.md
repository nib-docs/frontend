# How to?

## Restrict access to routes

The most obvious way of restricting access to a route is the [`onEnter` hook](https://github.com/reactjs/react-router/blob/master/docs/API.md#onenternextstate-replace-callback) of a `react-router` route. For example:

```javascript
<Route path="my-secret-dashboard" component={MySecretDashboard} onEnter={(nextState, replace) => {
  if (!store.getState().isAuthenticated) {
    replace('/login');
  }
}}/>
````
