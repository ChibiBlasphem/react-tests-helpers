import React from 'react'
import { testComponent, find } from '../src/index'

it('should call the callback with dom element', () => {
  let el
  const reactElement = <div ref={n => el = n}>foo</div>
  const callback = jest.fn()

  testComponent(reactElement, callback)

  expect(callback).toBeCalledTimes(1)
  expect(callback).toBeCalledWith(el)
})

it('should find a testable node', () => {
  let el
  const reactElement = <div><span data-test="el" ref={n => el = n}>foo</span></div>
  const callback = root => {
    expect(find(root, 'el')).toBe(el)
  }

  testComponent(reactElement, callback)
})