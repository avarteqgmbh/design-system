import React from 'react'
import { Tooltip as MuiTooltip, TooltipProps } from '@mui/material'

export function Tooltip(props: TooltipProps): JSX.Element {
  return <MuiTooltip {...props} />
}

// TODO: - adding Customized tooltips
//         https://mui.com/components/tooltips/#customized-tooltips
