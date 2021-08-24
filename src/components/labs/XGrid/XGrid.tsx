import React from 'react'
import {
  XGrid as MuiXGrid,
  XGridProps as MuiXGridProps,
  GridToolbar
} from '@material-ui/x-grid'
import { makeStyles } from '@material-ui/core'
import { Theme } from '../../../theme/types'
import { GRID_DE_LOCALE_TEXT } from './locales'

export interface XGridProps extends MuiXGridProps {
  toolbar?: boolean
  language?: 'DE' | 'EN'
}

export function XGrid(props: XGridProps): JSX.Element {
  const { toolbar = false, autoHeight = true, language = 'EN' } = props
  const classes = useStyles()

  let lang = {}

  if (language === 'DE') {
    lang = GRID_DE_LOCALE_TEXT
  }

  return (
    <MuiXGrid
      classes={{
        root: classes.root
      }}
      localeText={lang}
      autoHeight={autoHeight}
      autoPageSize={autoHeight}
      className={classes.root}
      components={toolbar ? { Toolbar: GridToolbar } : {}}
      {...props}
    />
  )
}

const useStyles = makeStyles<Theme>(() => {
  return {
    root: {}
  }
})
