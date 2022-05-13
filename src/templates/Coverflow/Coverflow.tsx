/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'
import { Theme } from '../../theme/types'
import { Search } from '@mui/icons-material'
import {
  Breadcrumbs,
  Box,
  InputAdornment,
  IconButton,
  Link,
  Typography,
  TextField
} from '../../components'

export interface CoverflowProps {
  bgImage?: string
  breadcrumbs?: {
    label: string
    href: string
    onClick?: () => void
  }[]
  search: boolean
  searchPlaceholder: string
  onSearchButtonClick: () => void
  title: string
}

export const Coverflow = (props: CoverflowProps): JSX.Element => {
  const {
    bgImage,
    breadcrumbs,
    title,
    search,
    searchPlaceholder = 'Suche...',
    onSearchButtonClick
  } = props

  const gradientBgImage = (theme: Theme): string | undefined => {
    return theme.palette.background.gradient
  }

  const classes = {
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: bgImage ? `url(${bgImage})` : gradientBgImage,
      height: 400,
      width: '100%'
    }
  }

  return (
    // @ts-ignore
    <Box sx={classes.root}>
      {breadcrumbs && (
        <Breadcrumbs>
          {breadcrumbs.map((item) => {
            return (
              <Link
                color='inherit'
                href={item.href}
                onClick={item.onClick && item.onClick}
              >
                {item.label}
              </Link>
            )
          })}
        </Breadcrumbs>
      )}
      <Typography variant='h2' mt={2} mb={4}>
        {title}
      </Typography>
      <Box sx={{ minWidth: 460 }}>
        {search && (
          <TextField
            fullWidth
            color='secondary'
            placeholder={searchPlaceholder}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    borderRadius='md'
                    size='small'
                    onClick={onSearchButtonClick}
                  >
                    <Search />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        )}
      </Box>
    </Box>
  )
}
