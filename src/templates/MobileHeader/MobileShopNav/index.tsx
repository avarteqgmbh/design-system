import React from 'react'

import { Box, Button, Grid, onClickOutsideHook } from '../../../components'

import { MobileShopNavItem } from './MobileShopNavItem'

export interface Category {
  active?: boolean
  name: string
  subCategories?: Category[]
  productsCount?: number
  onClick?: () => void
}

export interface MobileShopNavProps {
  logo?: React.ReactNode
  specialCategories?: {
    name: string
    icon?: React.ReactElement
    onClick?: () => void
  }[]
  categories: Category[]
  activeCategory: Category
  setActiveCategory: (category: Category | null) => void
  isActive: boolean
  setIsActive: (isActive: boolean) => void
}

export const MobileShopNav = (props: MobileShopNavProps): JSX.Element => {
  const {
    logo,
    isActive,
    categories,
    specialCategories,
    activeCategory,
    setActiveCategory,
    setIsActive
  } = props

  const shopNavRef = React.useRef<HTMLDivElement | null>(null)

  // const onToggle = (): void => {
  //   setIsActive(false)
  // }

  React.useEffect(() => {
    const cleanOnClickOutsideHook = onClickOutsideHook(shopNavRef, (): void => {
      if (isActive) {
        setIsActive(false)
      }
    })

    cleanOnClickOutsideHook()
  }, [isActive, setIsActive])

  return (
    <Box sx={classes.root} className={isActive ? 'active' : ''}>
      <Grid container mb={4} spacing={4}>
        <Grid item xs={12}>
          {logo && logo}
        </Grid>
      </Grid>
      {!activeCategory && (
        <>
          <Grid container mb={4} spacing={4}>
            {specialCategories &&
              specialCategories.length > 0 &&
              specialCategories.map((special) => {
                return (
                  <Grid item key={special.name} xs={6}>
                    <Button
                      color='primary'
                      size='small'
                      fullWidth
                      startIcon={special.icon}
                      onClick={(): void => {
                        return special.onClick && special.onClick()
                      }}
                    >
                      {special.name}
                    </Button>
                  </Grid>
                )
              })}
          </Grid>
          <Grid container mb={4} spacing={4}>
            {categories &&
              categories.length > 0 &&
              categories.map((category) => {
                return (
                  <Grid item key={category.name} xs={12}>
                    <MobileShopNavItem
                      count={category.productsCount || 0}
                      label={category.name}
                      linkTo={(): void => {
                        return category.onClick && category.onClick()
                      }}
                      onClickChildren={(): void => {
                        setActiveCategory(category)
                      }}
                    />
                  </Grid>
                )
              })}
          </Grid>
        </>
      )}
      {activeCategory && (
        <Grid container mb={4} spacing={4}>
          <Grid item xs={12}>
            <MobileShopNavItem
              backToMain={(): void => {
                setActiveCategory(null)
              }}
              count={activeCategory.productsCount || 0}
              label={activeCategory.name}
              linkTo={(): void => {
                return activeCategory.onClick && activeCategory.onClick()
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container pt={0} spacing={4}>
              {activeCategory.subCategories &&
                activeCategory.subCategories?.map((subCategory) => {
                  return (
                    <Grid
                      item
                      key={subCategory.name}
                      sx={{
                        display:
                          subCategory.productsCount &&
                          subCategory.productsCount === 0
                            ? 'none'
                            : 'block'
                      }}
                      xs={12}
                    >
                      <MobileShopNavItem
                        active={subCategory.active}
                        count={subCategory.productsCount || 0}
                        label={subCategory.name}
                        linkTo={(): void => {
                          return subCategory.onClick && subCategory.onClick()
                        }}
                      />
                    </Grid>
                  )
                })}
            </Grid>
          </Grid>
        </Grid>
      )}
    </Box>
  )
}

const classes = {
  root: {
    position: 'fixed',
    zIndex: 10,
    top: 0,
    right: '100%',
    padding: 4,
    width: 'calc(100% - 60px)',
    height: '100vh',
    color: 'text.primary',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'transparent',
    borderLeftColor: 'background.border',
    borderRightColor: 'transparent',
    boxSizing: 'border-box',
    bgcolor: 'background.paper',
    boxShadow: 2,
    overflowY: 'auto',
    transition: 'transform ease-in-out 300ms',
    '&.active': {
      transform: 'translateX(100%)'
    }
  }
}
