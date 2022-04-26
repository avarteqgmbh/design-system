import React from 'react'
import { Box, Typography } from '../../index'
import { ChangeLog } from './ChangeLog'

// Changelogs
// eslint-disable-next-line import/extensions
import v1_0_0 from './logs/1.0.0.json'

export default {
  title: '👋 Get started/Changelog'
}

export const Changelog = (): JSX.Element => {
  return (
    <Box>
      <Typography variant='h2' marginBottom={6}>
        Changelog
      </Typography>
      <ChangeLog
        version='1.0.0'
        date='01. May 2022'
        isLatestVersion
        changelog={v1_0_0}
      />
    </Box>
  )
}
