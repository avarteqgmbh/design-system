import React from 'react'
import { styled } from '@mui/material/styles'
import Search from '@mui/icons-material/Search'
import {
  Breadcrumbs,
  Box,
  InputAdornment,
  IconButton,
  Link,
  Typography,
  TextField
} from '../../components'

export interface SearchHeroProps {
  bgImage?: string
  breadcrumbs?: {
    label: string
    href: string
    onClick?: () => void
  }[]
  children?: React.ReactNode
  height?: number
  search?: boolean
  searchValue?: string
  searchPlaceholder?: string
  onSearchValueChange?: () => void
  onSearchButtonClick?: () => void
  title: string
}

export const SearchHero: React.FC<SearchHeroProps> = (props) => {
  const {
    bgImage,
    breadcrumbs,
    children,
    height = 400,
    title,
    search,
    searchValue,
    onSearchValueChange,
    searchPlaceholder = 'Suche...',
    onSearchButtonClick
  } = props

  return (
    <StyledSearchHero
      sx={{ backgroundImage: bgImage && `url(${bgImage})`, height }}
    >
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
            value={searchValue}
            placeholder={searchPlaceholder}
            onChange={onSearchValueChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    borderRadius='medium'
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
      {children}
    </StyledSearchHero>
  )
}

const StyledSearchHero = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: theme.palette.background.gradient,
    width: '100%'
  }
})
