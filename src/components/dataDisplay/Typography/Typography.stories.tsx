import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { TypographyProps } from '@mui/material'
import { Typography } from './Typography'

export default {
  title: 'Data Display/Typography',
  component: Typography,
  argTypes: {
    align: {
      defaultValue: 'inherit',
      table: {
        defaultValue: { summary: 'inherit' }
      }
    },
    color: {
      defaultValue: 'initial',
      table: {
        defaultValue: { summary: 'initial' }
      }
    },
    display: {
      defaultValue: 'initial',
      table: {
        defaultValue: { summary: 'initial' }
      }
    },
    variant: {
      defaultValue: 'body1',
      table: {
        defaultValue: { summary: 'body1' }
      }
    }
  },
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%93%9A-Design-System?node-id=102%3A791'
    }
  }
}

const Template: Story<TypographyProps> = (args) => {
  return <Typography {...args} />
}

export const Default = Template.bind({})
Default.args = {
  children: 'default'
}

export const Variant = Template.bind({})
Variant.args = {
  children: 'default',
  variant: 'h2'
}
