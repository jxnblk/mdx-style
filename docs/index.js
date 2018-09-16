import React from 'react'
import MDXStyle from '../src'
import Typography from './typography.mdx'

const theme = {
  root: {
    lineHeight: 1.625,
    // color: 'purple'
  },
  img: {
    maxWidth: '100%',
    height: 'auto'
  },
  h1: {
    fontSize: '48px',
    lineHeight: 1.25,
    marginTop: '32px',
    marginBottom: '16px',
  },
  h2: {
    fontSize: '32px',
    lineHeight: 1.25,
    marginTop: '32px',
    marginBottom: '16px',
    color: 'purple'
  },
  code: {
    fontFamily: 'Menlo, monospace',
    fontSize: '14px',
    padding: '16px',
    marginTop: '32px',
    marginBottom: '32px',
    color: '#c0c',
    backgroundColor: '#f6f6ff',
    borderRadius: '8px'
  },
  inlineCode: {
    fontFamily: 'Menlo, monospace',
    fontSize: '14px',
    color: '#09c'
  },
  table: {
  }
}

const heading = Tag => ({ id, children, ...props }) =>
  <Tag id={id} {...props}>
    <a
      href={'#' + id}
      children={children}
      style={{
        textDecoration: 'none',
        color: 'inherit'
      }}
    />
  </Tag>

const components = {
  pre: props => props.children,
  code: props => <pre {...props} />,
  h1: heading('h1'),
  h2: heading('h2'),
}

export default props =>
  <div>
    <h1>MDXStyle</h1>
    <MDXStyle
      components={components}
      css={theme}>
      <Typography />
    </MDXStyle>
  </div>
