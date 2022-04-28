import React from 'react'
import { Box, Container } from '../../../index'

export interface AuthProps {
  bgImage?: string
  footer?: JSX.Element
  logo?: JSX.Element
}

export const Auth: React.FC<AuthProps> = ({
  children,
  bgImage,
  footer,
  logo
}) => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Container maxWidth='md'>
        <Box
          sx={{
            bgcolor: 'background.paper',
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'stretch',
            overflow: 'hidden',
            boxShadow: 1
          }}
        >
          <Box
            sx={{
              minHeight: 500,
              width: '50%',
              p: 6,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'stretch'
            }}
          >
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
          {bgImage && (
            <Box
              sx={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100%',
                width: '50%'
              }}
            />
          )}
        </Box>
      </Container>
    </Box>
  )
}
