import React from 'react'
import { Skeleton as MuiSkeleton } from '@mui/material'
import { SkeletonProps } from '@mui/lab'

export function Skeleton(props: SkeletonProps): JSX.Element {
  return <MuiSkeleton {...props} />
}
