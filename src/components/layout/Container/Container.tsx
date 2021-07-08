import {
  Container as MuiContainer,
  ContainerProps as MuiContainerProps,
  makeStyles
} from '@material-ui/core'
import { Theme } from '../../../theme/types'

export function Container(props: MuiContainerProps) {
  const classes = useStyles()
  return <MuiContainer className={`${classes.root}`} {...props} />
}

const useStyles = makeStyles<Theme>((theme) => ({
  root: {}
}))
