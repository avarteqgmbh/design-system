import React from 'react'
import { ChevronRight } from '@mui/icons-material'
import { Box, Icon, Typography } from '../../components'
import { NavTeaser } from './NavTeaser'

export interface ShopMenuItem {
  label: string
  onClick: () => void
}

export interface MainCategories {
  mainCategoryLabel: string
  subCategoryLabel: string
  items: {
    label: string
    onClick: () => void
    subCategories: ShopMenuItem[]
  }[]
}

export interface Highlight {
  title: string
  image: string
  onClick: () => void
}

export interface ShopNavProps {
  isOpen: boolean
  mainCategories: MainCategories
  highlights: Highlight[]
}

export const ShopNav = (props: ShopNavProps): JSX.Element => {
  const { mainCategories, highlights, isOpen = false } = props
  const [subCategories, setSubCategories] = React.useState<ShopMenuItem[]>([])
  const [activeMainCategory, setActiveMainCategory] = React.useState('')
  const [activeHoveredMainCategory, setActiveHoveredMainCategory] =
    React.useState('')
  const [activeSubCategory, setActiveSubCategory] = React.useState('')
  const classes = {
    root: {
      display: isOpen ? 'flex' : 'none',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'absolute',
      top: '100%',
      bgcolor: 'background.paper',
      boxShadow: 1,
      borderTop: '1px solid',
      borderColor: 'background.border',
      width: '100%',
      py: 6
    },
    menuWrapper: {
      display: 'flex',
      width: 1200,
      '& ul': {
        mt: 4,
        mb: 2,
        pl: 0,
        listStyle: 'none'
      }
    },
    menuItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      cursor: 'pointer',
      borderRadius: '8px',
      transition: 'all ease-in-out 200ms',
      p: 2,
      '&:hover': {
        '& .label': {
          color: 'primary.main'
        }
      },
      '&.onHover': {
        '& .icon': {
          opacity: 1
        }
      },
      '&.active': {
        bgcolor: 'primary.main',
        '& .label': {
          color: 'primary.contrastText'
        },
        '&:hover': {
          '& .label': {
            color: 'primary.contrastText'
          }
        }
      }
    },
    menuContainer: {
      display: 'flex',
      flexDirection: 'column',
      flex: '1',
      mr: 6,
      p: 4,
      bgcolor: 'background.light',
      borderRadius: '8px',
      maxWidth: '100%'
    },
    highlightItemWrapper: {
      display: 'grid',
      flex: '1',
      gridTemplateColumns: 'repeat(1, 1fr)',
      columnGap: 5,
      rowGap: 5
    }
  }

  return (
    <Box sx={classes.root}>
      <Box sx={classes.menuWrapper}>
        <Box sx={classes.menuContainer}>
          <Box>
            <Typography variant='h6' ml={2}>
              {mainCategories.mainCategoryLabel}
            </Typography>
          </Box>
          <ul>
            {mainCategories.items.map((item) => {
              return (
                <li>
                  <Box
                    className={`${activeMainCategory === item.label && 'active'}
                      ${activeHoveredMainCategory === item.label && 'onHover'}`}
                    sx={classes.menuItem}
                    onMouseEnter={(): void => {
                      setActiveHoveredMainCategory(item.label)
                      setSubCategories(item.subCategories)
                    }}
                    onClick={(): void => {
                      setActiveMainCategory(item.label)
                      setActiveSubCategory('')
                      return item.onClick && item.onClick()
                    }}
                  >
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      className='label'
                    >
                      {item.label}
                    </Typography>
                    <Icon
                      sx={{
                        opacity: 0,
                        color:
                          activeMainCategory === item.label
                            ? 'primary.contrastText'
                            : 'primary.main',
                        transition: 'all ease-in-out 200ms'
                      }}
                      className='icon'
                    >
                      <ChevronRight />
                    </Icon>
                  </Box>
                </li>
              )
            })}
          </ul>
        </Box>
        <Box sx={classes.menuContainer}>
          <Box>
            <Typography variant='h6' ml={2}>
              {mainCategories.subCategoryLabel}
            </Typography>
          </Box>
          {subCategories.length > 0 && (
            <ul>
              {subCategories.map((item: ShopMenuItem) => {
                return (
                  <li>
                    <Box
                      sx={classes.menuItem}
                      className={
                        activeSubCategory === item.label ? 'active' : ''
                      }
                      onClick={(): void => {
                        setActiveMainCategory('')
                        setActiveSubCategory(item.label)
                        return item.onClick && item.onClick()
                      }}
                    >
                      <Typography
                        variant='body2'
                        color='textSecondary'
                        className='label'
                      >
                        {item.label}
                      </Typography>
                    </Box>
                  </li>
                )
              })}
            </ul>
          )}
        </Box>
        <Box sx={classes.highlightItemWrapper}>
          {highlights.map((highlight) => {
            return (
              <NavTeaser
                title={highlight.title}
                image={highlight.image}
                onClick={(): void => {
                  return highlight.onClick()
                }}
              />
            )
          })}
        </Box>
      </Box>
    </Box>
  )
}
