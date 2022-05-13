import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { BaseHeader, BaseHeaderProps, Link } from './BaseHeader'
import { UserMenuItem } from './UserMenuItem'
import { MetaNav } from './MetaNav'

import { AnyIcon } from '../../components'
import {
  FacebookOutlined,
  Instagram,
  Search,
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
      url: 'https://www.figma.com/file/piIRNwoneeyLTKctvITs6z/%F0%9F%98%81-Happy?node-id=2797%3A66401'
    }
  }
}

const MAIN_LINKS = [
  { icon: <AnyIcon size='md' icon='home' /> },
  {
    label: 'Menü',
    icon: <AnyIcon size='md' hasContrastColor icon='menu' />,
    active: true
  },
  { label: 'Prämien', icon: <AnyIcon size='md' icon='shop' /> }
]

const QUICK_LINKS = [
  { icon: <Search /> },
  { icon: <AnyIcon size='md' icon='cart' />, badge: true },
  { icon: <AnyIcon size='md' icon='notifications' /> }
]

const META_MAIN_LINKS = [
  { label: 'Company' },
  { label: 'Blog' },
  { label: 'Academy' }
]

const META_QUICK_LINKS = [
  { icon: <Twitter fontSize='small' /> },
  { icon: <Instagram fontSize='small' /> },
  { icon: <FacebookOutlined fontSize='small' /> }
]

const USER_MENU = (
  <UserMenuItem
    avatar='https://mui.com/static/images/avatar/1.jpg'
    title='Max Mustermann-Lamacun'
    subtitle='4.200 Punkte'
  />
)

const Template: Story<BaseHeaderProps> = (args) => {
  return <BaseHeader {...args} />
}

export const Default = Template.bind({})
Default.args = {
  logo: <Logo />,
  mainLinks: MAIN_LINKS,
  quickLinks: QUICK_LINKS,
  userMenu: USER_MENU
}

export const WithMetaNav = Template.bind({})
WithMetaNav.args = {
  logo: <Logo />,
  density: 5,
  mainLinks: MAIN_LINKS,
  quickLinks: QUICK_LINKS,
  userMenu: USER_MENU,
  metaNav: (
    <MetaNav
      density={3}
      mainLinks={META_MAIN_LINKS as Link[]}
      quickLinks={META_QUICK_LINKS as Link[]}
    />
  )
}
