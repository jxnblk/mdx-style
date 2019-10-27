import React from 'react'
import MDXStyle from '../src'
import Typography from './typography.mdx'
import { base } from '../src/themes'

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
    <MDXStyle>
      <Typography />
    </MDXStyle>
  </div>
