import React from 'react'
import { SxProps } from '@mui/material'
import { Theme } from '../../theme/types'
import { Box } from '../../components'

export interface SidebarProps {
  sx?: SxProps<Theme>
}

export const Sidebar: React.FC<SidebarProps> = ({ children, sx }) => {
  return <Box sx={{ ...sx, ...styles }}>{children}</Box>
}

const styles = {
  position: 'fixed',
  zIndex: 10,
  top: 0,
  left: 'calc((100% - 60px) * -1)',
  padding: 4,
  paddingTop: 4,
  width: 'calc(100% - 60px)',
  height: '100vh',
  color: 'text.primary',
  borderStyle: 'solid',
  borderWidth: 1,
  borderColor: 'transparent',
  boxSizing: 'border-box',
  borderRightColor: 'background.border',
  background: 'background.paper',
  boxShadow: 2,
  overflowY: 'auto'
}

export default Sidebar
