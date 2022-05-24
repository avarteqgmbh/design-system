import React from 'react'

import { Box, Typography } from '../../../components'

interface Props {
  label: string
  onClick: () => void
  icon?: JSX.Element
}

export const SpecialCategory = (props: Props): JSX.Element => {
  const { label, icon, onClick } = props

  return (
    <Box
      alignItems='center'
      bgcolor='primary.main'
      sx={classes.root}
      color='common.white'
      display='flex'
      onClick={(): void => {
        onClick()
      }}
      p={3}
    >
      {icon}
      <Typography color='common.white' fontWeight={800}>
        {label}
      </Typography>
    </Box>
  )
}

const classes = {
  root: {
    borderRadius: 2,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'primary.dark'
  }
}
