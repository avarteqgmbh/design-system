import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { BaseHeaderMobile, BaseHeaderMobileProps } from './BaseHeaderMobile'
import { AnyIcon, Typography } from '../../components'

export default {
  title: 'Templates/MobileHeader',
  component: BaseHeaderMobile,
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/piIRNwoneeyLTKctvITs6z/%F0%9F%98%81-Happy?node-id=2797%3A66076'
    }
  }
}

const Template: Story<BaseHeaderMobileProps> = (args) => {
  return <BaseHeaderMobile {...args} />
}

export const Default = Template.bind({})
Default.args = {
  avatarUrl: 'https://mui.com/static/images/avatar/5.jpg',
  pageTitle: 'Points',
  points: '1.200'
}