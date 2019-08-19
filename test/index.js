import React from 'react'
import TestRenderer from 'react-test-renderer'
import MDXStyle, { withComponents } from '../src'

const renderJSON = el => TestRenderer.create(el).toJSON()

describe('MDXStyle', () => {
  test('renders', () => {
    expect(() => {
      renderJSON(
        <MDXStyle />
      )
    }).not.toThrow()
  })

  test('renders with styles', () => {
    const json = renderJSON(
      <MDXStyle
        styles={{
          root: {
            color: 'tomato'
          },
          h1: {
            fontSize: '32px'
          }
        }}>
        <h1>Hello</h1>
      </MDXStyle>
    )
    expect(json).toMatchSnapshot()
  })
})
