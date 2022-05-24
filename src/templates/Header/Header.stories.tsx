import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { BaseHeader, BaseHeaderProps, Link } from './BaseHeader'
import { UserNav, UserMenuItems } from './UserNav'
import { MetaNav } from './MetaNav'
import { ShopNav } from './ShopNav'
import { MainMenuItem } from '../MainMenuItem/MainMenuItem'
import { MainCategoryItem, Highlight } from './ShopNav/types'

import { AnyIcon, Chip } from '../../components'

import {
  FacebookOutlined,
  Instagram,
  Search,
  DarkMode,
  Twitter
} from '@mui/icons-material'
import Logo from '../Logo'

export default {
  title: 'Templates/Header',
  component: BaseHeader,
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/piIRNwoneeyLTKctvITs6z/%F0%9F%98%81-Happy?node-id=2797%3A66076'
    },
    fullscreen: true
  }
}

const MAIN_LINKS = [
  { icon: <AnyIcon size='medium' icon='home' /> },
  {
    label: 'Menü',
    icon: <AnyIcon size='medium' hasContrastColor icon='menu' />,
    active: true
  },
  {
    label: 'Prämien',
    icon: <AnyIcon size='medium' icon='shop' />
  }
]

const QUICK_LINKS = [
  { icon: <Search /> },
  { icon: <AnyIcon size='medium' icon='cart' />, badge: true },
  { icon: <AnyIcon size='medium' icon='notifications' /> }
]

const META_MAIN_LINKS = [
  { label: 'Company' },
  { label: 'Blog', badge: true },
  { label: 'Academy' }
]

const META_QUICK_LINKS = [
  { icon: <Twitter fontSize='small' /> },
  { icon: <Instagram fontSize='small' /> },
  { icon: <FacebookOutlined fontSize='small' /> }
]

const USER_MENU_ITEMS = [
  {
    items: [
      { label: 'Profil', icon: <AnyIcon size='medium' icon='user' /> },
      { label: 'Punktekonto', icon: <AnyIcon size='medium' icon='points' /> }
    ]
  },
  {
    items: [
      { label: 'Warenkorb', icon: <AnyIcon size='medium' icon='cart' /> },
      {
        label: 'Wunschliste',
        icon: <AnyIcon size='medium' icon='wishlist' />,
        endIcon: <Chip label='9' size='small' color='primary' rounded={false} />
      },
      { label: 'Bestellungen', icon: <AnyIcon size='medium' icon='orders' /> }
    ]
  },
  {
    items: [{ label: 'Logout' }]
  }
]

const USER_NAV = (
  <UserNav
    avatarUrl='https://mui.com/static/images/avatar/1.jpg'
    firstName='Max'
    fullName='Max Mustermann-Lamacun'
    points='4.200'
    density={4}
    userMenu={USER_MENU_ITEMS as UserMenuItems[]}
    children={[<MainMenuItem density={3} icon={<DarkMode />}/>, <MainMenuItem density={3} icon={<AnyIcon size='large' icon='LangDE'/>} />]}
  />
)

const MAIN_CATEGORIES: MainCategoryItem[] = [
  {
    label: 'Schöner Wohnen',
    subCategories: [{ label: 'SW Sub 1' }, { label: 'SW Sub 2' }]
  },
  {
    label: 'Coole Technik',
    active: true,
    subCategories: [
      { label: 'CT Sub 1' },
      { label: 'CT Sub 2', active: true },
      { label: 'CT Sub 3' }
    ]
  },
  {
    label: 'Perfekter Haushalt',
    subCategories: [
      { label: 'PH Sub 1' },
      { label: 'PH Sub 2' },
      { label: 'PH Sub 3' }
    ]
  },
  {
    label: 'Gemütlicher Garten',
    subCategories: [
      { label: 'GG Sub 1' },
      { label: 'GG Sub 2' },
      { label: 'GG Sub 3' }
    ]
  },
  {
    label: 'Traumhafte Reisen',
    subCategories: [{ label: 'Sub 1' }, { label: 'Sub 2' }, { label: 'Sub 3' }]
  },
  {
    label: 'Weine aus aller Welt',
    subCategories: [{ label: 'Sub 1' }, { label: 'Sub 2' }]
  }
]

const HIGHLIGHT_CATEGORIES: Highlight[] = [
  {
    title: 'Schöner Leben',
    image:
      'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    title: 'Multimedia',
    image:
      'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  }
]

const Template: Story<BaseHeaderProps> = (args) => {
  return <BaseHeader {...args} />
}

export const Default = Template.bind({})
Default.args = {
  logo: <Logo />,
  mainLinks: MAIN_LINKS,
  quickLinks: QUICK_LINKS,
  userMenu: USER_NAV
}

export const WithMetaNav = Template.bind({})
WithMetaNav.args = {
  logo: <Logo />,
  mainLinks: MAIN_LINKS,
  quickLinks: QUICK_LINKS,
  userMenu: USER_NAV,
  metaNav: (
    <MetaNav
      density={3}
      mainLinks={META_MAIN_LINKS as Link[]}
      quickLinks={META_QUICK_LINKS as Link[]}
    />
  )
}

export const WithShopNav: React.FC<BaseHeaderProps> = () => {
  const [shopNavOpen, setShopNavOpen] = React.useState(false)
  const SHOP_MAIN_LINKS = [
    { icon: <AnyIcon size='medium' icon='home' /> },
    {
      label: 'Menü',
      icon: <AnyIcon size='medium' icon='menu' />
    },
    {
      label: 'Prämien',
      icon: <AnyIcon size='medium' hasContrastColor={shopNavOpen} icon='shop' />,
      onClick: (): void => {
        setShopNavOpen(!shopNavOpen)
      },
      active: shopNavOpen
    }
  ]

  return (
    <BaseHeader mainLinks={SHOP_MAIN_LINKS as Link[]}>
      <ShopNav
        isOpen={shopNavOpen}
        menu={MAIN_CATEGORIES}
        highlights={HIGHLIGHT_CATEGORIES}
      />
    </BaseHeader>
  )
}
