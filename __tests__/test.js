import React from 'react'
import { testComponent } from '../src/index'

it('should call the callback with dom element', () => {
  let el
  const callback = jest.fn()
  const reactElement = React.createElement('div', { ref: n => el = n }, 'foo')

  testComponent(reactElement, callback)

  expect(callback).toBeCalledTimes(1)
  expect(callback).toBeCalledWith(el)
})