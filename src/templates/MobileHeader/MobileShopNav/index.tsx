import React from 'react'

import { Box, Divider, Grid, onClickOutsideHook } from '../../../components'

import { MobileShopNavItem } from './MobileShopNavItem'
import { SpecialCategory } from './SpecialCategory'

export interface Category {
  name: string
  children?: Category[]
  productsCount?: number
  onClick?: () => void
}

export interface MobileShopNavProps {
  logo?: React.ReactNode
  // clearShopNavState?: boolean
  specialCategories: { name: string; onClick?: () => void }[]
  categories: Category[]
  activeCategory: Category
  setActiveCategory: (category: Category | null) => void
  isActive: boolean
  setIsActive: (isActive: boolean) => void
}

export const MobileShopNav = (props: MobileShopNavProps): JSX.Element => {
  const {
    logo,
    // clearShopNavState,
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
      {logo && logo}
      <Box display={activeCategory ? 'none' : 'block'}>
        <Grid container direction='row' mb={6} spacing={4}>
          {specialCategories &&
            specialCategories.length > 0 &&
            specialCategories.map((category) => {
              return (
                <Grid item key={category.name} xs={12}>
                  <SpecialCategory
                    label={category.name}
                    onClick={(): void => {
                      return category.onClick && category.onClick()
                    }}
                  />
                </Grid>
              )
            })}
        </Grid>
        <Divider />
        <Grid container direction='row' spacing={4}>
          {categories &&
            categories.length > 0 &&
            categories.map((category) => {
              return (
                <Grid key={category.name} xs={12}>
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
      </Box>
      {activeCategory && (
        <Box>
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
          <Grid container direction='row' mt={0} spacing={4}>
            {activeCategory.children &&
              activeCategory.children?.map((category) => {
                return (
                  <Grid
                    item
                    key={category.name}
                    sx={{
                      display:
                        category.productsCount && category.productsCount === 0
                          ? 'none'
                          : 'block'
                    }}
                    xs={12}
                  >
                    <MobileShopNavItem
                      count={category.productsCount || 0}
                      label={category.name}
                      linkTo={(): void => {
                        return category.onClick && category.onClick()
                      }}
                    />
                  </Grid>
                )
              })}
          </Grid>
        </Box>
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
