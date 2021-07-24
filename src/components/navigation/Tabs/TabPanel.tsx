import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

interface TabPanelProps {
  index: number
  value: string
}

export const TabPanel: JSX.Element<TabPanelProps> = (props) => {
  const { children, value, index, ...other } = props
  const classes = useStyles()

  return (
    <div
      className={classes.root}
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  )
}

const useStyles = makeStyles(() => {
  return {
    root: {}
  }
})
