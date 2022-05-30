import React from 'react'
import { Box } from '../../components'

interface OverlayProps {
  open?: boolean
  onClick?: () => void
}

export const Overlay: React.FC<OverlayProps> = ({ open = false, onClick }) => {
  return (
    <Box
      sx={{
        ...styles,
        visibility: open ? 'visible' : 'hidden',
        opacity: open ? 1 : 0
      }}
      onClick={(): void => {
        return onClick && onClick()
      }}
    />
  )
}

const styles = {
  position: 'absolute',
  transition: '250ms all ease-in-out',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 10,
  bgcolor: 'rgba(0,0,0,.65)'
}
