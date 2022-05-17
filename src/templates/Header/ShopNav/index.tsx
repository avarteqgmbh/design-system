import React from 'react'
import { Box } from '../../../components'
import { MainCategoryItem, MenuItem } from './types'
import { Categories } from './Categories'
import { Highlight, HighlightProps } from './Highlight'

export interface ShopNavProps {
  isOpen: boolean
  menu: MainCategoryItem[]
  highlights: HighlightProps[]
}

export const ShopNav: React.FC<ShopNavProps> = (props) => {
  const { menu, highlights, isOpen = false } = props

  // Active Main Category Label (e.g. Coole Technik)
  const [activeCategory, setActiveCategory] = React.useState<string | null>(
    null
  )

  const [subCategories, setSubCategories] = React.useState<MenuItem[] | null>(
    null
  )

  React.useEffect((): void => {
    const filteredCategory = menu.filter((category) => {
      return category.label === activeCategory
    })[0]

    if (filteredCategory) {
      setSubCategories(filteredCategory.subCategories)
      setActiveCategory(filteredCategory.label || null)
    }
  }, [menu, activeCategory])

  return (
    <Box
      sx={{
        ...styles,
        display: isOpen ? 'flex' : 'none'
      }}
    >
      <Box sx={styles.menuWrapper}>
        <Categories
          label='Hauptkategorien'
          items={menu}
          setActiveCategory={setActiveCategory}
        />
        <Categories
          label={activeCategory || 'Unterkategorien'}
          items={subCategories}
        />
        <Box sx={styles.highlightItemWrapper}>
          {highlights.map(({ title, image, onClick }) => {
            return (
              <Highlight
                title={title}
                image={image}
                onClick={(): void => {
                  return onClick && onClick()
                }}
              />
            )
          })}
        </Box>
      </Box>
    </Box>
  )
}

const styles = {
  flexDirection: 'column',
  alignItems: 'center',
  position: 'absolute',
  top: '100%',
  bgcolor: 'background.paper',
  boxShadow: 1,
  borderTop: '1px solid',
  borderColor: 'background.border',
  width: '100%',
  py: 6,

  menuWrapper: {
    display: 'flex',
    width: 1200
  },

  highlightItemWrapper: {
    display: 'grid',
    flex: '1',
    gridTemplateColumns: 'repeat(1, 1fr)',
    columnGap: 5,
    rowGap: 5
  }
}
