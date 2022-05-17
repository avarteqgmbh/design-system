import React from 'react'
import { ChevronRight } from '@mui/icons-material'
import { Box, Icon, Typography } from '../../../components'
import { MainCategoryItem, MenuItem } from './types'

interface MainCategoriesProps {
  label: string
  items: MainCategoryItem[]
  activeMainCategory: string
  setSubCategories: (subcategories: MenuItem[]) => void
  setActiveMainCategory: (mainCategory: string) => void
  setActiveSubCategory: (subCategory: string) => void
}

export const MainCategories: React.FC<MainCategoriesProps> = (props) => {
  const {
    label,
    items,
    activeMainCategory,
    setSubCategories,
    setActiveMainCategory,
    setActiveSubCategory
  } = props
  const classes = {
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
    }
  }

  return (
    <Box sx={classes.menuContainer}>
      <Box>
        <Typography variant='h6' ml={2}>
          {label}
        </Typography>
      </Box>
      <ul>
        {items.map((item) => {
          return (
            <li>
              <Box
                className={`${activeMainCategory === item.label && 'active'}`}
                sx={classes.menuItem}
                onMouseEnter={(): void => {
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
  )
}
