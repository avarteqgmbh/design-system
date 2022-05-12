import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { BaseHeader, BaseHeaderProps } from './BaseHeader'
import { UserMenuItem } from './UserMenuItem'
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
  { icon: 'home' },
  { label: 'Menü', icon: 'menu', active: true },
  { label: 'Prämien', icon: 'shop' }
]

const QUICK_LINKS = [
  { icon: 'search' },
  { icon: 'cart', badge: true },
  { icon: 'notifications' }
]

const USER_MENU = (
  <>
    <UserMenuItem
      avatar='https://mui.com/static/images/avatar/1.jpg'
      title='Max Mustermann-Lamacun'
      subtitle='4.200 Punkte'
    />
  </>
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
