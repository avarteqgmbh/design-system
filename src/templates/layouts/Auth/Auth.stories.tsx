import React from 'react'
import { Story } from '@storybook/react'

import { withDesign } from 'storybook-addon-designs'
import Logo from '../../Logo'
import { actions, footer, children } from './StoryHelper'
import { Auth, AuthProps } from './Auth'

export default {
  title: 'Templates/Layouts/Auth',
  component: Auth,
  decorators: [withDesign],
  argTypes: {
    onClick: {
      action: { type: 'onClick' },
      table: {
        type: { summary: 'func' }
      }
    },
    onChange: {
      action: { type: 'onChange' },
      table: {
        type: { summary: 'func' }
      }
    }
  },
  parameters: {
    backgroundColor: 'paper',
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/piIRNwoneeyLTKctvITs6z/%F0%9F%98%81-Happy?node-id=806%3A17767'
    }
  }
}

const Template: Story<AuthProps> = (args) => {
  return <Auth {...args} />
}

export const Default = Template.bind({})
Default.args = {
  actions,
  bgImage:
    'https://images.pexels.com/photos/6481652/pexels-photo-6481652.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  footer,
  children,
  logo: <Logo />
}
