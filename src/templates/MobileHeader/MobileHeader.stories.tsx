import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { AnyIcon } from '../../components'
import { BaseHeaderMobile, BaseHeaderMobileProps } from './BaseHeaderMobile'

export default {
  title: 'Templates/MobileHeader',
  component: BaseHeaderMobile,
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/piIRNwoneeyLTKctvITs6z/%F0%9F%98%81-Happy?node-id=2797%3A66076'
    },
    fullscreen: true,
    viewport: {
      defaultViewport: 'iphonex',
    },
  }
}

const Template: Story<BaseHeaderMobileProps> = (args) => {
  return <BaseHeaderMobile {...args} />
}

export const Default = Template.bind({})
Default.args = {
  avatarUrl: 'https://mui.com/static/images/avatar/1.jpg',
  pageTitle: 'Points',
  points: '1.200',
  pointsIcon: <AnyIcon icon='points' size='medium' />
}

export const WithNotifications = Template.bind({})
WithNotifications.args = {
  avatarUrl: 'https://mui.com/static/images/avatar/1.jpg',
  notifications: true,
  newNotifications: true,
  pageTitle: 'Points',
  points: '1.200',
  pointsIcon: <AnyIcon icon='points' size='medium' />
}
