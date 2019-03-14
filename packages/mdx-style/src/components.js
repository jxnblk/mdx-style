// base mdx components
import styled from '@emotion/styled'
import system from './system'

const a = styled.a(system({
  color: 'primary',
  textDecoration: 'none',
  '&:hover': {
    color: 'secondary',
    textDecoration: 'underline',
  }
}))

// [](/ 'button') or <a title='button'> is converted to this component
const button = styled.a(system({
  display: 'inline-block',
  alignSelf: 'center',
  textDecoration: 'none',
  px: 3,
  py: 2,
  color: 'white',
  bg: 'primary',
  borderRadius: 6,
  '&:hover': {
    bg: 'secondary',
  }
}))

const img = styled.img({
  maxWidth: '100%',
  height: 'auto',
})

const Heading = styled.h1(system({
  fontFamily: 'heading',
  fontWeight: 'heading',
  lineHeight: 'heading',
  my: 1,
}))

const heading = (tag, styles) =>
  styled(Heading)(system(styles)).withComponent(tag)

const h1 = heading('h1', { fontSize: 6 })
const h2 = heading('h2', { fontSize: 5 })
const h3 = heading('h3', { fontSize: 4 })
const h4 = heading('h4', { fontSize: 3 })
const h5 = heading('h5', { fontSize: 2 })
const h6 = heading('h6', { fontSize: 1 })

const code = styled.code(system({
  fontFamily: 'monospace',
}))

const inlineCode = styled.code(system({
  fontFamily: 'monospace',
}))

const pre = styled.pre(system({
  fontFamily: 'monospace',
  p: 3,
}))

export const components = {
  a,
  button,
  img,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  code,
  pre,
  inlineCode,
}

export default components
