/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'
import { Theme } from '../../../theme/types'
import { Box, Container } from '../../../index'

export type LayoutVariant = 'background' | 'center' | 'left' | 'right'
export interface AuthProps {
  actions?: JSX.Element[]
  bgImage?: string
  footer?: JSX.Element
  logo?: JSX.Element
  variant: LayoutVariant
}

export const Auth: React.FC<AuthProps> = ({
  actions,
  children,
  bgImage,
  footer,
  logo,
  variant = 'center'
}) => {
  // if no bgImage
  if (!bgImage && variant === 'center') {
    variant = 'background'
  }

  const gradientBgImage = (theme: Theme): string | undefined => {
    return theme.palette.background.gradient
  }

  const classes = {
    root: {
      display: 'flex',
      height: { xs: '100%', sm: '100vh' },
      alignItems: 'center',
      '@media screen and (min-width: 600px)': {
        '&.background, &.left, &.right': {
          backgroundImage: bgImage ? `url(${bgImage})` : gradientBgImage,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }
      },
      '&.left, &.right': {
        height: '100%',
        '& .MuiContainer-root': {
          maxWidth: 500,
          p: 0
        }
      },
      '&.left .MuiContainer-root': {
        ml: 0
      },
      '&.right .MuiContainer-root': {
        mr: 0
      }
    },
    loginBoxWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'stretch',
      bgcolor: 'background.default',
      borderRadius: { xs: 0, sm: 2 },
      overflow: 'hidden',
      boxShadow: {
        xs: 0,
        sm: 7
      },
      m: 'auto',
      '&.background': {
        width: { xs: '100%', sm: 450 }
      },
      '&.left, &.right': {
        borderRadius: 0,
        boxShadow: 0,
        ml: 0,
        height: '100vh'
      }
    },
    loginBoxContent: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'stretch',
      flex: 1,
      minHeight: 500,
      p: 6
    },
    bgImageBox: {
      display: {
        xs: 'none',
        sm: 'flex'
      },
      flex: 1,
      p: 6,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: bgImage ? `url(${bgImage})` : 'background.gradient',
      minHeight: '100%'
    }
  }

  return (
    // @ts-ignore
    <Box sx={classes.root} className={variant}>
      <Container maxWidth='md'>
        <Box sx={classes.loginBoxWrapper} className={variant}>
          <Box sx={classes.loginBoxContent}>
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
                    return <Box ml={4}>{action}</Box>
                  })}
                </Box>
              )}
            </Box>
            <Box sx={{ py: 6 }}>{children}</Box>
            {footer && <Box mt={4}>{footer}</Box>}
          </Box>
          {bgImage && variant === 'center' && <Box sx={classes.bgImageBox} />}
        </Box>
      </Container>
    </Box>
  )
}
