import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { Link } from './Link'
import { LinkProps } from '@mui/material'

export default {
  title: 'Navigation/Link',
  component: Link,
  argTypes: {
    onClick: {
      action: { type: 'onClick' },
      table: {
        type: { summary: 'func' }
      }
    }
  },
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%93%9A-Design-System?node-id=404%3A30649'
    },
    muiDocSrc: 'https://mui.com/components/links/'
  }
}

const Template: Story<LinkProps> = (args) => {
  return <Link {...args} />
}

const LinkLabel = <span>Link</span>

export const Default = Template.bind({})
Default.args = {
  children: LinkLabel
}
