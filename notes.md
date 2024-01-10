- Props are read only
- State is something that can potentially change. In contrast, a component cannot change its props. State is fluid and ever-changing while props are not.

- Only define a component as a class if it absolutely requires state.
- Whenever we want to change state in React, we need to use the `setState()` method. 
  - It takes an object as an argument. The object contains a key-value pair describing which slice of state should be updated and with what value.
  ```javascript
  this.setState({property: update})
  ```
  - Calling `setState()` updates the state value and triggers a re-render of the component that contains the state slice.
  - Don' do this!
    ```javascript
    this.state.property = "new value";
    ```
  - Most of the time we'll pass an object as an argument to `setState()` as above. Alternatively, you can also pass an arrow function `(state, props) => stateChange` that takes current state and props as arguments. In the Help Queue we do this when we create the `handleClick()` method that we add as a click handler to the button for toggling between the TicketList and NewTicketForm components:

  ```javascript
  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }
  ```
  - Methods for altering state should always be arrow functions because they preserve the meaning of `this` within the scope in which they're created (a concept called binding).
    - Do this:

    ```javascript
    handleClick = () => {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
    ```
    - Not this:
    ```javascript
    handleClick(){
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
    ```