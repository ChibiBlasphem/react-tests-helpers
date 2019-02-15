# React Tests Helpers

React Test Helpers is a library that helps you test your React Components.

Since React 16.6 - with `React.lazy`, `React.memo` and even more now with hooks - testing libraries like Enzyme tends to have trouble keeping up.

This problem comes from the fact that those libraries try to reimplement some internal workings of React.

React Test Helpers does not. It is built on top React and only provides helpers which reduce the boilerplate code needed to test a component.


## API

### `ReactTestHelpers.testComponent(reactElement: ReactElement, callback: Function)`

Let you test your component by rendering it in a in-memory DOM Element and providing you the DOM Node of your component in the first parameter of the callback function

```javascript
import React, { useState, useCallback } from 'react'
import { testComponent } from 'react-tests-helpers'

function Counter(props) {
  const [count, setCount] = useState(0)
  const clickHandler = useCallback(() => setCount(c => c+1), [])

  return (
    <div>
      <button onClick={clickHandler}>{ count }</button>
    </div>
  )
}

it('Should have a button', () => {
  testComponent(<Counter />, root => {
    expect(root.querySelector('button')).not.toBeNull()
  })
})
```

### `ReactTestHelpers.find(node: HTMLElement, testSelector: string): HTMLElement | null`

Let you select a specific element with a "data-test" selector 

```javascript
import React, { useState, useCallback } from 'react'
import { testComponent, find } from 'react-tests-helpers'

function Counter(props) {
  const [count, setCount] = useState(0)
  const clickHandler = useCallback(() => setCount(c => c+1), [])

  return (
    <div>
      <button data-test="counter-button" onClick={clickHandler}>{ count }</button>
    </div>
  )
}

it('Should have a button', () => {
  testComponent(<Counter />, root => {
    expect(find(root, 'counter-button')).not.toBeNull()
  })
})
```



### `ReactTestHelpers.act(callback: Function)`

see: https://reactjs.org/blog/2019/02/06/react-v16.8.0.html#testing-hooks