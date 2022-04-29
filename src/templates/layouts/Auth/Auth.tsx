import React from 'react'
import { Box, Container } from '../../../index'

export type LayoutVariant = 'background' | 'center' | 'left' | 'right'
export interface AuthProps {
  variant: LayoutVariant
  bgImage?: string
  footer?: JSX.Element
  logo?: JSX.Element
}

export const Auth: React.FC<AuthProps> = ({
  children,
  bgImage,
  footer,
  logo,
  variant = 'center'
}) => {
  const classes = {
    root: {
      display: 'flex',
      height: { xs: '100%', sm: '100vh' },
      alignItems: 'center',
      '@media screen and (min-width: 600px)': {
        '&.background, &.left, &.right': {
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }
      },
      '&.left, &.right': {
        height: '100%',
        '& .MuiContainer-root': {
          maxWidth: '500px',
          padding: 0
        }
      },
      '&.left .MuiContainer-root': {
        marginLeft: 0
      },
      '&.right .MuiContainer-root': {
        marginRight: 0
      }
    },
    loginBoxWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'stretch',
      bgcolor: 'background.default',
      borderRadius: { xs: 0, sm: '8px' },
      overflow: 'hidden',
      boxShadow: {
        xs: 0,
        sm: 7
      },
      margin: 'auto',
      '&.background': {
        width: { xs: '100%', sm: '450px' }
      },
      '&.left, &.right': {
        borderRadius: 0,
        boxShadow: 0,
        marginLeft: 0,
        height: '100vh'
      }
    },
    loginBoxContent: {
      flex: 1,
      minHeight: 500,
      p: 6,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'stretch'
    },
    bgImageBox: {
      display: {
        xs: 'none',
        sm: 'flex'
      },
      flex: 1,
      p: 6,
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100%'
    }
  }

  return (
    <Box sx={classes.root} className={variant}>
      <Container maxWidth='md'>
        <Box sx={classes.loginBoxWrapper} className={variant}>
          <Box sx={classes.loginBoxContent}>
            {logo && <Box mb={4}>{logo}</Box>}
            <Box
              sx={{
                py: 6
              }}
            >
              {children}
            </Box>
            {footer && <Box mt={4}>{footer}</Box>}
          </Box>
          {bgImage && variant === 'center' && <Box sx={classes.bgImageBox} />}
        </Box>
      </Container>
    </Box>
  )
}
