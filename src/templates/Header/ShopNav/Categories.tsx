import React from 'react'
import { Box, Typography } from '../../../components'
import { MainCategoryItem, MenuItem } from './types'
import Item from './Item'

interface Props {
  label: string
  items?: MainCategoryItem[] | MenuItem[] | null
  setActiveCategory?: (label: string) => void
  onClick?: () => void
}

const styles = {
  display: 'flex',
  flexDirection: 'column',
  flex: '1',
  mr: 6,
  p: 4,
  bgcolor: 'background.light',
  borderRadius: '8px',
  maxWidth: '100%'
}

export const Categories: React.FC<Props> = (props) => {
  const { label, items, setActiveCategory, onClick } = props
  return (
    <Box sx={styles}>
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
                  return onClick && onClick()
                }}
                setActiveCategory={setActiveCategory}
              />
            )
          })
        ) : (
          <Typography>Wähle eine Hauptkategorie</Typography>
        )}
      </Box>
    </Box>
  )
}
