import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { UserNav, UserNavProps } from './UserNav'
import { AnyIcon } from '../../components'

export default {
  title: 'Templates/MobileHeader',
  component: UserNav,
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/piIRNwoneeyLTKctvITs6z/%F0%9F%98%81-Happy?node-id=2797%3A66076'
    }
  }
}

const USER_NAV = [{
  label: 'Shop',
  icon: <AnyIcon icon='shop' />,
  chipLabel: '99'
}]

const Template: Story<UserNavProps> = (args) => {
  return <UserNav {...args} />
}

export const Default = Template.bind({})
Default.args = {
  items: USER_NAV,
  motto: 'Test',
  welcome: 'Servus',
  avatarUrl: '',
  fullName: 'Peter Müller',
  status: 'Active',
  isActive: true
}