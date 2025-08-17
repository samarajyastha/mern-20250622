# React

- The library for web and native user interfaces.
- Built by Facebook
- Used to build single page application.
- Uses virtual DOM for rendering.
- The most popular frontend framework.
- Huge community
- Maintained by Facebook
- Job opportunities
- One way data flow

## Virtual DOM

- Light weight copy or real DOM
- Whenever state changes:
  - React updates the virtual DOM
  - Compares with the previous DOM (Diffing)
  - Updates only the changed parts in the Real DOM (Reconciliation)
- Faster rendering
- Better performance

## Component

- UI block
- Reusable
- Functional Component, Class Component
- Stateful component: State/UI can be updated
- Stateless component: State can be updated, UI cannot be changed.
- Hooks

## JSX

- JS/HTML code

## Props

- Properties of a component
- Similar to HTML element attributes

## State

- Object (mutable/changeable)
- State is updated on user interaction, event triggers or API calls
- Whenever state value changes, UI is re-rendered

## Hooks

- Special function
- It enables us to make functional component stateful.
- Using hooks, we can implement state management in Functional component.

1. useState: local state management
2. useEffect: side effect
3. useRef: accessing DOM elements
4. Custom hooks

## Lifecycle methods

1. Component create
2. Component update
3. Component delete

componentDidMount
componentDidUpdate
componentWillUnmount

### Props drilling

## Redux

The core concepts of redux:

1. Store: Stores state data, only one store, to maintain single source of truth
2. Action: Function that is dispatched on user interaction, event trigger, api call (to change state)
3. Reducer: Binds store and action, stores state data, responsible for UI transition

## React Router

- Route is a URL endpoint, that defines which component/page to load/show on URL match

