
# MDX Style

Add styles to markdown elements in MDX

```sh
npm i mdx-style
```

```jsx
<MDXStyle
  margin={32}
  headings={[ 12, 14, 16, 20, 24, 32 ]}
  fontFamily='system-ui, sans-serif'
  monospace='Menlo, monospace'
  lineHeight={1.5}
/>
```

- headings
- paragraph
- lineHeights
- margins
- pre/code

```jsx
import React from 'react'
import MDXStyle from 'mdx-style'
import Doc from './doc.mdx'

export default () =>
  <MDXStyle
    styles={{
      root: {
        fontFamily: 'system-ui, sans-serif',
        lineHeight: 1.625,
        color: '#111'
      },
      h1: {
        fontSize: 48,
        color: 'purple'
      },
      a: {
        color: 'blue',
        '&:hover': {
          color: 'purple'
        }
      }
    }}>
    <Doc />
  </MDXStyle>
```

## Props

- `styles`

MIT License
