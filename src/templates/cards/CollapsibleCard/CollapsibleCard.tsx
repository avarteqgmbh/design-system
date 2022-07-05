import React from 'react'
import { styled } from '@mui/material/styles'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { Box, Typography } from '../../../components'

export interface CollapsibleCardProps {
  subtitle?: string
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

  return (
    <StyledCollapsibleCard
      onClick={(): void => {
        return setCollapsed(!collapsed)
      }}
      sx={{ cursor: hasBody ? 'pointer' : 'default', boxShadow: 1 }}
    >
      <Box
        className='cardHeader'
        sx={{
          borderLeft: '5px solid',
          borderColor: highlighted ? 'primary.main' : 'transparent'
        }}
      >
        <Box className='left'>
          {position ? (
            <Typography fontWeight='bold'>{position}</Typography>
          ) : collapsed ? (
            <ExpandMore />
          ) : (
            <ExpandLess />
          )}
          <Box className='leftTitleWrapper'>
            {subtitle && (
              <Typography color='text.secondary'>{subtitle}</Typography>
            )}
            <Typography fontWeight='bold'>{title}</Typography>
          </Box>
        </Box>
        {score && (
          <Box className='right'>
            <Typography color={`${scoreColor}.main`} fontWeight='bold'>
              {score}
            </Typography>
          </Box>
        )}
      </Box>
      {hasBody && (
        <Box
          className='cardBody'
          sx={{ display: collapsed ? 'none' : 'block' }}
        >
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
    </StyledCollapsibleCard>
  )
}

const StyledCollapsibleCard = styled(Box)(({ theme }) => {
  return {
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.radius.card,
    marginBottom: theme.spacing(4),
    overflow: 'hidden',
    transition: 'all ease-in-out 200ms',
    '& .cardHeader': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'stretch'
    },
    '& .left': {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(4)
    },
    '& .leftTitleWrapper': {
      display: 'flex',
      flexDirection: 'column',
      marginLeft: theme.spacing(4)
    },
    '& .right': {
      backgroundColor: theme.palette.background.light,
      width: 120,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    '& .cardBody': {
      padding: theme.spacing(4),
      borderTop: '1px solid',
      borderColor: theme.palette.background.border,

      '& .info': {
        margin: theme.spacing(2),
        marginLeft: 0,
        display: 'flex',
        flexDirection: 'column'
      },

      '& .kpis': {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        columnGap: 4,
        rowGap: 2,

        '& .info': {
          margin: theme.spacing(0, 2)
        }
      }
    }
  }
})
