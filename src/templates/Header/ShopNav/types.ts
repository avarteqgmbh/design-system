export interface MenuItem {
  label: string
  onClick?: () => void
  active?: boolean
}

export interface MainCategoryItem extends MenuItem {
  subCategories: MenuItem[]
}

export interface Highlight {
  title: string
  image: string
  onClick?: () => void
}
