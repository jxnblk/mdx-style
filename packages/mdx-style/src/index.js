import styled from '@emotion/styled'
import {
  space,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  compose,
} from 'styled-system'
import merge from 'lodash.merge'
import omit from 'lodash.omit'
import system from './system'

// maybe not such a great idea...
const createButtonLink = (Link, Button) => ({
  title,
  ...props
}) =>
  (title === 'button')
    ? <Button {...props} />
    : <Link title={title} {...props} />

export const mergeComponents = (...overrides) => base => {
  const components = { ...base }
  overrides.forEach(obj => {
    for (const key in obj) {
      const override = obj[key]
      if (!override) continue
      if (typeof override === 'function') {
        components[key] = override
      } else if (typeof override === 'object') {
        components[key] = styled(components[key] || key)(system(override))
      }
    }
  })
  components.a = createButtonLink(components.a || 'a', components.button || 'button')
  return components
}

export { system } from './system'
export { components } from './components'
