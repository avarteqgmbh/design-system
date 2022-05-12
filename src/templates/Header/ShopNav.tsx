import React from 'react'
import { Box, Typography } from '../../components'
import { HighlightProductCard } from '../cards'

export interface ShopMenuItem {
  label: string
  onClick: () => void
}

export interface ShopNavProps {
  mainCategories: {
    mainCategoryLabel: string
    subCategoryLabel: string
    items: {
      label: string
      subCategories: ShopMenuItem[]
    }[]
  }
  highlights: {
    title: string
    image: string
    onClick: () => void
  }[]
}

export const ShopNav = (props: ShopNavProps): JSX.Element => {
  const { mainCategories, highlights } = props
  const [subCategories, setSubCategories] = React.useState<ShopMenuItem[]>([])
  const [activeMainCategory, setActiveMainCategory] = React.useState('')

  const onMainCategoryClick = (label: string, items: ShopMenuItem[]): void => {
    setActiveMainCategory(label)
    setSubCategories(items)
  }

  const classes = {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'absolute',
      top: 90,
      width: '100%',
      mt: 6
    },
    menuItemWrapper: {
      display: 'flex',
      width: 1200,
      borderBottom: '1px solid',
      borderColor: 'background.border',
      '& ul': {
        my: 2,
        pl: 0,
        listStyle: 'none',
        '& li': {
          cursor: 'pointer',
          transition: 'all ease-in-out 200ms',
          py: 2,
          '&.active': {
            bgcolor: 'primary.main',
            '& p': {
              color: 'primary.contrastText'
            }
          }
        }
      },
      pb: 5
    },
    menuItem: {
      display: 'flex',
      flexDirection: 'column',
      mr: 6,
      flex: '1',
      maxWidth: '100%',
      '& .clickable': {
        cursor: 'pointer',
        '& h6:hover': {
          color: 'text.secondary'
        }
      }
    },
    highlightItemWrapper: {
      display: 'flex'
    },
    linkStyles: {
      color: 'text.secondary',
      '&:hover': {
        color: 'text.primary'
      }
    }
  }

  return (
    <Box sx={classes.root}>
      <Box sx={classes.menuItemWrapper}>
        <Box sx={classes.menuItem}>
          <Box>
            <Typography variant='h6'>
              {mainCategories.mainCategoryLabel}
            </Typography>
          </Box>
          <ul>
            {mainCategories.items.map((item) => {
              return (
                <li
                  className={activeMainCategory === item.label ? 'active' : ''}
                >
                  <Typography
                    variant='body2'
                    sx={classes.linkStyles}
                    onClick={(): void => {
                      return onMainCategoryClick(item.label, item.subCategories)
                    }}
                  >
                    {item.label}
                  </Typography>
                </li>
              )
            })}
          </ul>
        </Box>
        <Box sx={classes.menuItem}>
          <Box>
            <Typography variant='h6'>
              {mainCategories.subCategoryLabel}
            </Typography>
          </Box>
          {subCategories.length > 0 && (
            <ul>
              {subCategories.map((item: ShopMenuItem) => {
                return (
                  <li>
                    <Typography
                      variant='body2'
                      sx={classes.linkStyles}
                      onClick={(): void => {
                        return item.onClick && item.onClick()
                      }}
                    >
                      {item.label}
                    </Typography>
                  </li>
                )
              })}
            </ul>
          )}
        </Box>
        <Box sx={classes.highlightItemWrapper}>
          {highlights.map((highlight) => {
            return (
              <HighlightProductCard
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
