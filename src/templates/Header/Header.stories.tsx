import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { IconName } from '../../components/dataDisplay/AnyIcon/AnyIcon'
import { BaseHeader, BaseHeaderProps } from './BaseHeader'
import { MenuItem } from './MenuItem'
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

const LINKS = [
  { icon: 'home' },
  { label: 'Menü', icon: 'menu', active: true },
  { label: 'Prämien', icon: 'shop' }
]

const CUSTOMLINKS = [
  { icon: 'search' },
  { icon: 'cart', badge: true },
  { icon: 'notifications' }
]

const CHILDREN = (
  <>
    {CUSTOMLINKS.map((link) => {
      return <MenuItem icon={link.icon as IconName} badge={link.badge} />
    })}
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
  links: LINKS,
  children: CHILDREN
}
