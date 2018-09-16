const lightgray = '#f6f6ff'
const gray = '#e6e6ef'
const text = '#000'
const blue = '#07c'

export default {
  root: {
    fontFamily: 'system-ui, sans-serif',
    lineHeight: 1.625,
    color: 'var(--text, #000)',
    '--text': text,
    '--lightgray': lightgray,
    '--gray': gray,
    '--link': blue,
    '--code': blue,
    '--pre': blue,
    // testing
    '--bp1': '40em',
  },
  h1: {
    fontSize: '32px',
    lineHeight: 1.25,
    marginTop: '32px',
    marginBottom: '16px',
    '@media screen and (min-width: var(--bp1))': {
      fontSize: '48px',
    }
  },
  h2: {
    fontSize: '24px',
    lineHeight: 1.25,
    marginTop: '32px',
    marginBottom: '16px',
    '@media screen and (min-width: var(--bp1))': {
      fontSize: '32px',
    }
  },
  h3: {
    fontSize: '20px',
    lineHeight: 1.25,
    marginTop: '32px',
    marginBottom: '16px',
  },
  h4: {
    fontSize: '16px',
    lineHeight: 1.25,
    marginTop: '32px',
    marginBottom: '16px',
  },
  h5: {
    fontSize: '14px',
    lineHeight: 1.25,
    marginTop: '16px',
    marginBottom: '16px',
  },
  h6: {
    fontSize: '12px',
    lineHeight: 1.25,
    marginTop: '16px',
    marginBottom: '16px',
  },
  p: {
    marginTop: '16px',
    marginBottom: '16px',
  },
  ul: {},
  ol: {},
  blockquote: {},
  // how should these work?
  // pre: {},
  code: {
    fontFamily: 'Menlo, monospace',
    fontSize: '14px',
    padding: '16px',
    marginTop: '32px',
    marginBottom: '32px',
    color: 'var(--code)',
    backgroundColor: 'var(--lightgray)',
  },
  inlineCode: {
    fontFamily: 'Menlo, monospace',
    color: 'var(--code)'
  },
  img: {
    maxWidth: '100%',
    height: 'auto',
    marginTop: '32px',
    marginBottom: '32px',
  },
  hr: {
    border: 0,
    height: '2px',
    marginTop: '32px',
    marginBottom: '32px',
    backgroundColor: 'var(--gray)'
  },
  table: {
    '& th': {},
    '& td': {},
  }
}
