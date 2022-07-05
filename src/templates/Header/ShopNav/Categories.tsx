import React from 'react'
import { styled } from '@mui/material/styles'
import { Box, Typography } from '../../../components'
import { MainCategoryItem, MenuItem } from './types'
import Item from './Item'

interface Props {
  label: string
  isMaincategory?: boolean
  items?: MainCategoryItem[] | MenuItem[] | null
  setActiveCategory?: (label: string) => void
}

export const Categories: React.FC<Props> = (props) => {
  const { label, isMaincategory, items, setActiveCategory } = props
  return (
    <StyledCategories>
      <Typography variant='h6' mb={3}>
        {label}
      </Typography>
      <Box>
        {items ? (
          items.map((item) => {
            return (
              <Item
                active={item.active || false}
                label={item.label}
                onClick={(): void => {
                  return item.onClick && item.onClick()
                }}
                setActiveCategory={setActiveCategory}
                hasChildren={isMaincategory}
              />
            )
          })
        ) : (
          <Typography>Wähle eine Hauptkategorie</Typography>
        )}
      </Box>
    </StyledCategories>
  )
}

const StyledCategories = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
    marginRight: theme.spacing(6),
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.light,
    borderRadius: theme.radius.card,
    maxWidth: '100%'
  }
})
