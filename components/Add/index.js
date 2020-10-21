import {
  Button
} from './styles'

export default ({children, style, ...params}) => (
  <Button style={style} {...params}>{children}</Button>
)
