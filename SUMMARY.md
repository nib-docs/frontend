# Summary

- [Methodology](./methodology/index.md)

  - [Testing](./methodology/testing.md)

- Tooling

- [Frameworks](./frameworks/index.md)

  - [React](./frameworks/react/index.md)
    - [How to](./frameworks/react/how-to.md)
    - [Testing](./frameworks/react/testing.md)

  - [Redux](./frameworks/redux/index.md)
    - [Testing](./frameworks/redux/testing.md)

- [Styling](./styling/index.md)

- Appendix
    - [Migrating from the old grid](./appendix/migrating-from-the-old-grid.md)


    TODO:
    - binding in the constructor
    - using mapDispatchToProps to make testing simpler

    Learning CSS:
      SCSS syntax (concentrate on variables, functions, mixins and the root selector)
      Knowing what BEM is and understanding the reasons behind it
      The grid we use
    Learning JS:
      ES6/7 syntax (concentrate on syntax rather than new objects – sets, symbols etc)
      Promises
      npm
      Semver
    Learning React:
      General react usage (fundamentals)
      Knowing what Higher Order Components are
      Knowing what Container/Smart vs Dumb components are
      Stateless functional components
      Shallow rendering for unit testing
    Learning Redux:
      Watching Dan Ambrov’s Egghead tutorials
      Using our tooling:
      Use the generator to create various app types (note: nib specific one can be found here but requires private npm access to npm install all our packages)

    https://medium.com/@shaunbent/css-at-bbc-sport-part-1-bab546184e66#.wg1myy957


Be careful of using cascading styles (those that are inherited by child elements) e.g. color, font-size. Limit usage
to BEM elements rather than blocks which apply the style for all the things.


## Component conventions
- use singlar words for component name e.g. `<Alert/>` `<Button/>`
- don't use the component name to distinguish variants, use a property instead e.g. <Alert type="info"/> <Button
color="primary"/> instead of `<InfoAlert/>`, `<YelloButton/>`
- use standard color names for values of `color` properties
- use `xs`, `sm`, `md`, `lg` and `xl` for `size` properties (except `<Heading/>` where there is a long running
convention)