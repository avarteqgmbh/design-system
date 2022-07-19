import React from 'react'
import { Tabs as MuiTabs, TabsProps as MuiTabsProps } from '@mui/material'

export interface TabsProps extends Omit<MuiTabsProps, 'onChange'> {
  onChange: (event: React.ChangeEvent<{}>, newValue: number) => void
}

export function Tabs(props: TabsProps): JSX.Element {
  const { children, sx } = props
  return (
    <MuiTabs {...props} sx={{ ...styles, ...sx }}>
      {children}
    </MuiTabs>
  )
}

const styles = {
  '& .MuiTab-root': {
    textTransform: 'none'
  },
  '& .MuiTabs-scrollButtons': {
    color: 'text.primary'
  }
}
