import React from 'react'
import { SlideProps } from './types'
import { Typography } from '../Typography/Typography'
import { Box, Grid } from '../../layout/index'
import { LinearProgress } from '../../feedback'

export interface SlideItemProps extends SlideProps {
  index: number
  active: boolean
  onClick: (slideIndex: number) => void
}

export const SlideItem: React.FC<SlideItemProps> = (props) => {
  const { index, title, active, onClick } = props
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (active) {
        if (progress < 100) setProgress(progress + 1.85)
        else setProgress(100)
      } else {
        setProgress(0)
      }
    }, 100)

    return (): void => {
      return clearTimeout(timer)
    }
  }, [progress, active])

  return (
    <Box
      sx={{
        opacity: 0.5,
        marginBottom: 5,
        bgcolor: 'bg.light',
        cursor: 'pointer',
        padding: 2,
        width: '90%',
        borderRadius: '8px',
        '&:last-child': {
          marginBottom: 0
        },
        '&.active, &:hover': {
          opacity: 1
        }
      }}
      className={`${active ? 'active' : ''}`}
    >
      <Grid
        container
        direction='column'
        onClick={(): void => {
          onClick(index)
        }}
      >
        <Typography
          variant='subtitle1'
          sx={{
            marginBottom: 2,
            color: 'text.primary',
            fontWeight: 'bold'
          }}
        >
          {title}
        </Typography>
        {active && (
          <LinearProgress
            variant='determinate'
            sx={{
              marginTop: 2,
              width: '100%',
              borderRadius: '8px'
            }}
            value={progress}
          />
        )}
      </Grid>
    </Box>
  )
}
