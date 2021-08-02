import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { RatingProps } from '@material-ui/lab'
import { Rating } from './Rating'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { makeStyles } from '@material-ui/core'
import { Theme } from '../../../theme/types'

export default {
  title: 'Labs/Rating',
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
    name: {
      control: { type: 'text' },
      table: { type: { summary: 'string' } }
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
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%8E%A8-Design-System?node-id=392%3A24801'
    }
  }
}

const Template: Story<RatingProps> = (args) => {
  return <Rating {...args} />
}

export const Default = Template.bind({})
Default.args = {}

export const DefaultValue = Template.bind({})
DefaultValue.args = {
  defaultValue: 2
}

export const Max = Template.bind({})
Max.args = {
  defaultValue: 6,
  max: 10
}

export const Small = Template.bind({})
Small.args = {
  defaultValue: 6,
  max: 10,
  size: 'small'
}

export const Large = Template.bind({})
Large.args = {
  defaultValue: 6,
  max: 10,
  size: 'large'
}

export const Disabled = Template.bind({})
Disabled.args = {
  defaultValue: 2,
  disabled: true
}

export const ReadOnly = Template.bind({})
ReadOnly.args = {
  defaultValue: 2,
  readOnly: true
}

export const Percision = Template.bind({})
Percision.args = {
  defaultValue: 2.5,
  precision: 0.5
}

export const EmptyIcon = Template.bind({})
EmptyIcon.args = {
  defaultValue: 2.5,
  precision: 0.5,
  emptyIcon: <StarBorderIcon fontSize='inherit' />
}

const StylesTemplate: Story<RatingProps> = (args) => {
  const classes = useStyles()
  return <Rating {...args} classes={{ ...classes }} />
}
export const CustomIcon = StylesTemplate.bind({})
CustomIcon.args = {
  defaultValue: 2.5,
  precision: 0.5,
  icon: <FavoriteIcon fontSize='inherit' />
}

const useStyles = makeStyles<Theme>(() => {
  return {
    root: {},
    iconFilled: {
      color: '#ff6d75'
    },
    iconHover: {
      color: '#ff3d47'
    }
  }
})
