import React from 'react'
import { styled, SxProps } from '@mui/material/styles'
import { Box, Container } from '../../../components'

export type LayoutVariant = 'background' | 'center' | 'left' | 'right'

export interface AuthProps {
  actions?: JSX.Element[]
  children?: React.ReactNode
  bgImage?: string
  footer?: JSX.Element
  logo?: JSX.Element
  variant: LayoutVariant
  sx?: SxProps
}

export const Auth: React.FC<AuthProps> = ({
  actions,
  children,
  bgImage,
  footer,
  logo,
  variant = 'center',
  sx
}) => {
  // If no bgImage is set, the center layout falls back to background for better container width.
  if (!bgImage && variant === 'center') {
    variant = 'background'
  }

  return (
    <StyledAuthLayout
      sx={{
        height: { xs: '100%', sm: '100vh' },
        '@media screen and (min-width: 600px)': {
          '&.background, &.left, &.right': {
            backgroundImage: bgImage && `url(${bgImage})`
          }
        },
        ...sx
      }}
      className={variant}
    >
      <Container maxWidth='md'>
        <Box
          className={`${variant} loginBoxWrapper`}
          sx={{
            borderRadius: { xs: 0, sm: 2 },
            boxShadow: {
              xs: 0,
              sm: 7
            },
            '&.background': {
              width: { xs: '100%', sm: 450 }
            },
            '&.left, &.right': {
              borderRadius: 0,
              boxShadow: 0,
              ml: 0,
              height: '100vh'
            }
          }}
        >
          <Box className='loginBoxContent'>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 4
              }}
            >
              {logo && <Box>{logo}</Box>}
              {actions && (
                <Box display='flex'>
                  {actions.map((action) => {
                    return (
                      <Box ml={4} key={action.key}>
                        {action}
                      </Box>
                    )
                  })}
                </Box>
              )}
            </Box>
            <Box sx={{ py: 6 }}>{children}</Box>
            {footer && <Box mt={4}>{footer}</Box>}
          </Box>
          {bgImage && variant === 'center' && (
            <Box
              sx={{
                display: {
                  xs: 'none',
                  sm: 'flex'
                },
                backgroundImage: bgImage && `url(${bgImage})`
              }}
              className={`bgImageBox ${!bgImage && 'hasNoBgImage'}`}
            />
          )}
        </Box>
      </Container>
    </StyledAuthLayout>
  )
}

const StyledAuthLayout = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    alignItems: 'center',
    '@media screen and (min-width: 600px)': {
      '&.background, &.left, &.right': {
        backgroundImage: theme.palette.background.gradient,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }
    },
    '&.left, &.right': {
      height: '100%',
      '& .MuiContainer-root': {
        maxWidth: 500,
        padding: 0
      }
    },
    '&.left .MuiContainer-root': {
      marginLeft: 0
    },
    '&.right .MuiContainer-root': {
      marginRight: 0
    },
    '& .loginBoxWrapper': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'stretch',
      backgroundColor: theme.palette.background.default,
      overflow: 'hidden',
      margin: 'auto'
    },
    '& .loginBoxContent': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'stretch',
      flex: 1,
      minHeight: 500,
      padding: theme.spacing(6)
    },
    '& .bgImageBox': {
      flex: 1,
      padding: theme.spacing(6),
      minHeight: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      '&.hasNoBgImage': {
        backgroundImage: theme.palette.background.gradient
      }
    }
  }
})
