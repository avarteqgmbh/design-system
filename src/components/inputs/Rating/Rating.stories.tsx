import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { Rating } from './Rating'
import { RatingProps } from '@mui/material'
import Delete from '@mui/icons-material/Delete'

export default {
  title: 'Inputs/Rating',
  component: Rating,
  argTypes: {
    defaultValue: {
      control: 'number',
      table: {
        type: { summary: 'number' }
      }
    },
    size: {
      control: 'radio',
      options: ['large', 'medium', 'small'],
      defaultValue: 'medium',
      table: {
        type: { summary: 'large | medium | small' },
        defaultValue: { summary: 'medium' }
      }
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    max: {
      control: 'number',
      defaultValue: 5,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 5 }
      }
    },
    precision: {
      control: 'number',
      defaultValue: 1,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1 }
      }
    },
    readOnly: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    value: {
      control: 'number',
      table: {
        type: { summary: 'number' }
      }
    }
  },
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%93%9A-Design-System?node-id=387%3A9120'
    },
    muiDocSrc: 'https://mui.com/components/rating/'
  }
}

const Template: Story<RatingProps> = (args) => {
  return <Rating {...args} />
}

export const Default = Template.bind({})

export const CustomIcon = Template.bind({})
CustomIcon.args = {
  defaultValue: 2.5,
  precision: 0.5,
  icon: <Delete fontSize='inherit' />,
  emptyIcon: <Delete fontSize='inherit' />
}
