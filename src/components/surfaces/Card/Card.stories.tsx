import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { PaperProps } from '@material-ui/core'
import { Card } from './Card'

export default {
  title: 'Surfaces/Card',
  component: Card,
  argTypes: {},
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%8E%A8-Design-System?node-id=181%3A375'
    }
  }
}

const Template: Story<PaperProps> = (args) => {
  return <Card style={{ height: 140, width: 100 }} {...args} />
}

export const Default = Template.bind({})
Default.args = {}
