import React from 'react'
import { act, renderIntoDocument } from 'react-dom/test-utils'

type TestRunner = (root: HTMLElement) => void

export function testComponent(reactElement: React.ReactElement<any, any>, callback: TestRunner) {
  let wrapperNode: HTMLElement | null = null;
  const testWrapper = React.createElement(
    "div",
    {
      ref: node => (wrapperNode = node!)
    },
    reactElement
  )

  act(() => {
    renderIntoDocument(testWrapper)
  });

  if (!wrapperNode) {
    throw 'Could not extract a DOM Element from your React Element'
  }

  if (callback) {
    callback(((wrapperNode as any) as HTMLElement).firstElementChild as HTMLElement)
  }
}
