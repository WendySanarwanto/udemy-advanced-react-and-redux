# udemy-advanced-react-and-redux

This repo contains coding exercises that were created when I followed Udemy's [Advanced React with Redux 2018](https://www.udemy.com/react-redux-tutorial/learn/v4/content) video courses, authored by [Stephen Grider](https://github.com/stephengrider).

## Coding exercises

- [testing](https://github.com/WendySanarwanto/udemy-advanced-react-and-redux/tree/master/testing) - Demonstrate how to create unit tests and integration test for a `React-Redux` web application which also interact with API endpoint(s). Takeaways:

  - Separate `redux`'s & `react-redux`'s `Provider`, `store`, `middleware` declaration & setups into the `Root` component.

  - Provide initial state into combined `reducers` during `store` creation through passing in the initial state to `createStore`'s 2nd arg.

  - Creating unit test for action creator by testing action's type and payload.

  - Creating unit test for testing reducer's behaviours when handling various action types.

  - Creating unit test against top level component (`App` component) to ensure their children components do exist below of it, by using `enzyme`'s [shallow](https://airbnb.io/enzyme/docs/api/ShallowWrapper/shallow.html) & [find](https://airbnb.io/enzyme/docs/api/ShallowWrapper/find.html) methods.

  - Creating unit test against children components to test their behavious by using these following `enzyme` methods: [mount](https://airbnb.io/enzyme/docs/api/ReactWrapper/mount.html), [unmount](https://airbnb.io/enzyme/docs/api/ReactWrapper/unmount.html), [update](https://airbnb.io/enzyme/docs/api/ReactWrapper/update.html), [simulate](https://airbnb.io/enzyme/docs/api/ReactWrapper/simulate.html), [find](https://airbnb.io/enzyme/docs/api/ShallowWrapper/find.html), [prop](https://airbnb.io/enzyme/docs/api/ReactWrapper/prop.html), [render](https://airbnb.io/enzyme/docs/api/ReactWrapper/render.html), and [text](https://cheerio.js.org/);

  - Creating integration test for component which made API Request call by using `Axios`, through mocking the API call by using `moxios`'s methods: `install`, `uninstall`, `stubRequest`, `wait`.

  - Apply navigation routes to each Components through using [react-router-dom](https://www.npmjs.com/package/react-router-dom)'s `Route` & `BrowserRouter` and render `Link` component for navigating to specific route's path. Note: This changes made the unit test & integration test are broken. We will fix these at end of course.

  - Inject extra logic on a component through creating `High Order Component`, a mere function which add custom logic into the passed in child component.

  - Replacing [redux-promise](https://www.npmjs.com/package/redux-promise) middleware with a custom middleware.
  
  - Set debug breakpoint by adding `debugger` line.
  
  - Create a custom middleware which does JSON schema validation against `redux state`, by using [JSON Schema](https://json-schema.org/) and [tv4](https://www.npmjs.com/package/tv4) validation library.

__TODO: Add more info here__
