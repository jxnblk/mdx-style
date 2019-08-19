import React from 'react'
import { jsx, ThemeProvider, useThemeUI } from 'theme-ui'
import merge from 'deepmerge'

const createStyles = ({
  margin,
  headings,
  fontFamily,
  lineHeight,
  fontWeight,
  maxWidth,
}) => ({
  maxWidth,
})

export const MDXStyle = ({
  margin = 32,
  headings = [ 12, 14, 16, 20, 24, 32 ],
  fontFamily = 'system-ui, sans-serif',
  monospace = 'Menlo, monospace',
  lineHeight = 1.5,
  styles,
  children,
}) => {
  const outer = useThemeUI()
  const theme = merge({
    fontSizes: headings,
    fonts: {
      body: fontFamily,
      heading: 'inherit',
    },
    text: {
      heading: {
        fontFamily: 'heading',
        fontWeight: 'heading',
        lineHeight: 'heading',
        marginBottom: margin,
      },
    },
    styles: merge({
      root: {
      },
      h1: {
        variant: 'text.heading',
        fontSize: 5,
      },
      h2: {
        variant: 'text.heading',
        fontSize: 4,
      },
      h3: {
        variant: 'text.heading',
        fontSize: 3,
      },
      h4: {
        variant: 'text.heading',
        fontSize: 2,
      },
      h5: {
        variant: 'text.heading',
        fontSize: 1,
      },
      h6: {
        variant: 'text.heading',
        fontSize: 0,
      },
      p: {
        marginBottom: margin,
      }
    }, styles),
  }, outer.theme)

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export default MDXStyle
