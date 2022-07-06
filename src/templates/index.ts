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
  Points,
  ThousandSeparator,
  OrderItem,
  OrderStatusCard
} from './cards/index'

export type {
  CardProps,
  CollapsibleCardProps,
  HighlightProductCardProps,
  ProductCardProps,
  SelectableCardProps,
  VerticalProductCardProps,
  OrderItemProps,
  OrderStatusCardProps
} from './cards/index'

// CodeSnippet
export { CodeSnippet } from './CodeSnippet/CodeSnippet'
export type { CodeSnippetProps } from './CodeSnippet/CodeSnippetProps'

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

// Mobile Header
export { BaseHeaderMobile } from './MobileHeader/BaseHeaderMobile'
export { BackBtn } from './MobileHeader/BackBtn'
export { HamburgerButton } from './MobileHeader/HamburgerButton'
export { MobileUserNav } from './MobileHeader/MobileUserNav'
export { MobileShopNav } from './MobileHeader/MobileShopNav'
export { MobileShopNavItem } from './MobileHeader/MobileShopNav/MobileShopNavItem'

export type { BaseHeaderMobileProps } from './MobileHeader/BaseHeaderMobile'
export type { BackBtnProps } from './MobileHeader/BackBtn'
export type { HamburgerButtonProps } from './MobileHeader/HamburgerButton'
export type { MobileUserNavProps } from './MobileHeader/MobileUserNav'
export type { Category, MobileShopNavProps } from './MobileHeader/MobileShopNav'
export type { MobileShopNavItemProps } from './MobileHeader/MobileShopNav/MobileShopNavItem'

// Footer
export { Footer } from './Footer/Footer'
export type { Link as FooterLink, FooterProps } from './Footer/Footer'

// LanguageSelect
export { LanguageSelect } from './LanguageSelect/LanguageSelect'
export type { LanguageSelectProps } from './LanguageSelect/LanguageSelect'

// Modal
export { Modal } from './Modal/Modal'

// Search Hero
export { SearchHero } from './SearchHero/SearchHero'
export type { SearchHeroProps } from './SearchHero/SearchHero'

// Slider
export { Slider } from './Slider/Slider'
export type { SliderProps } from './Slider/Slider'

// ToggleMode
export { ToggleMode } from './ToggleMode/ToggleMode'
export type { ToggleModeProps } from './ToggleMode/ToggleMode'
