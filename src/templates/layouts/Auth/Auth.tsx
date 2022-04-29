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
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      '&.background, &.left, &.right': {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
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
      bgcolor: 'background.default',
      borderRadius: '8px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'stretch',
      overflow: 'hidden',
      boxShadow: 7,
      margin: 'auto',
      '&.background': {
        width: '450px'
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
