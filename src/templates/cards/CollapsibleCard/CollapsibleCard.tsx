import React from 'react'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { Box, Typography } from '../../../components'

export interface CollapsibleCardProps {
  subtitle: string
  position?: number
  score?: number
  scoreColor?: 'success' | 'error' | 'default'
  title: string
  highlighted?: boolean
  info?: { label: string; value: string }[]
  kpis?: { label: string; value: string }[]
}

export const CollapsibleCard: React.FC<CollapsibleCardProps> = (props) => {
  const {
    subtitle,
    position,
    score,
    scoreColor = 'default',
    title,
    info,
    kpis,
    highlighted = false
  } = props
  const [collapsed, setCollapsed] = React.useState(true)
  const hasBody = (info && info.length > 0) || (kpis && kpis.length > 0)

  const classes = {
    root: {
      bgcolor: 'background.paper',
      borderRadius: '8px',
      mb: 4,
      overflow: 'hidden',
      transition: 'all ease-in-out 200ms',
      cursor: hasBody ? 'pointer' : 'default',
      boxShadow: 1
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'stretch',
      borderLeft: '5px solid',
      borderColor: highlighted ? 'primary.main' : 'transparent'
    },
    left: {
      display: 'flex',
      alignItems: 'center',
      p: 4
    },
    leftTitleWrapper: {
      display: 'flex',
      flexDirection: 'column',
      ml: 4
    },
    right: {
      bgcolor: 'background.light',
      width: 120,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    body: {
      display: collapsed ? 'none' : 'block',
      p: 4,
      borderTop: '1px solid',
      borderColor: 'background.border',

      '& .info': {
        my: 2,
        mr: 2,
        display: 'flex',
        flexDirection: 'column'
      },

      '& .kpis': {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        columnGap: 4,
        rowGap: 2,

        '& .info': {
          my: 0
        }
      }
    }
  }

  return (
    <Box
      onClick={(): void => {
        return setCollapsed(!collapsed)
      }}
      sx={classes.root}
    >
      <Box sx={classes.header}>
        <Box sx={classes.left}>
          {position ? (
            <Typography fontWeight='bold'>{position}</Typography>
          ) : collapsed ? (
            <ExpandMore />
          ) : (
            <ExpandLess />
          )}
          <Box sx={classes.leftTitleWrapper}>
            <Typography color='text.secondary'>{subtitle}</Typography>
            <Typography fontWeight='bold'>{title}</Typography>
          </Box>
        </Box>
        {score && (
          <Box sx={classes.right}>
            <Typography color={`${scoreColor}.main`} fontWeight='bold'>
              {score}
            </Typography>
          </Box>
        )}
      </Box>
      {hasBody && (
        <Box sx={classes.body}>
          {info &&
            info.map((item) => {
              return (
                <Box className='info' key={item.label}>
                  <Typography fontWeight='light' color='text.secondary' mr={2}>
                    {item.label}
                  </Typography>
                  <Typography fontWeight='bold'>{item.value}</Typography>
                </Box>
              )
            })}
          <Box className='kpis'>
            {kpis &&
              kpis.map((item) => {
                return (
                  <Box className='info' key={item.label}>
                    <Typography
                      fontWeight='light'
                      color='text.secondary'
                      mr={2}
                    >
                      {item.label}
                    </Typography>
                    <Typography fontWeight='bold'>{item.value}</Typography>
                  </Box>
                )
              })}
          </Box>
        </Box>
      )}
    </Box>
  )
}
