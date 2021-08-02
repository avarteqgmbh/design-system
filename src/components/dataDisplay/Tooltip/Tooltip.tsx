import React from 'react'
import {
  Tooltip as MuiTooltip,
  TooltipProps,
  makeStyles
} from '@material-ui/core'
import { Theme } from '../../../theme/types'

export function Tooltip(props: TooltipProps): JSX.Element {
  const classes = useStyles()
  return <MuiTooltip className={classes.root} {...props} />
}

// TODO: - adding Customized tooltips
//         https://material-ui.com/components/tooltips/#customized-tooltips

const useStyles = makeStyles<Theme>(() => {
  return {
    root: {}
  }
})
