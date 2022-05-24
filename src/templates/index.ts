// Layout
export { Auth } from './layouts/index'

// Cards
export {
  BaseCard,
  CollapsibleCard,
  HighlightProductCard,
  ProductCard,
  SelectableCard,
  VerticalProductCard,
  AmountInput,
  Points
} from './cards/index'

export type {
  CardProps,
  CollapsibleCardProps,
  HighlightProductCardProps,
  ProductCardProps,
  SelectableCardProps,
  VerticalProductCardProps
} from './cards/index'

// Header
export { BaseHeader } from './Header/BaseHeader'
export { MainMenuItem } from './MainMenuItem/MainMenuItem'
export { MetaNav } from './Header/MetaNav'
export { ShopNav } from './Header/ShopNav'
export { UserNav } from './Header/UserNav'

export type { Link as AnyLinkProps, BaseHeaderProps } from './Header/BaseHeader'
export type { MainMenuItemProps } from './MainMenuItem/MainMenuItem'
export type { MetaNavProps } from './Header/MetaNav'
export type { ShopNavProps } from './Header/ShopNav'
export type { UserMenuItems, UserNavprops } from './Header/UserNav'

// Footer
export { Footer } from './Footer/Footer'
export type { Link as FooterLink, FooterProps } from './Footer/Footer'

// Modal
export { Modal } from './Modal/Modal'

// Search Hero
export { SearchHero } from './SearchHero/SearchHero'
export type { SearchHeroProps } from './SearchHero/SearchHero'

// Slider
export { Slider } from './Slider/Slider'
export type { SliderProps } from './Slider/Slider'
