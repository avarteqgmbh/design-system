export interface MenuItem {
  label: string
  onClick?: () => void
  active?: boolean
}

export interface MainCategoryItem extends MenuItem {
  subCategories: MenuItem[]
}

export interface MenuItems {
  mainCategoryLabel: string
  subCategoryLabel: string
  items: MainCategoryItem[]
}
