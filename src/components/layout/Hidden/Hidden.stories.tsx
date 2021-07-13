import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { HiddenProps } from '@material-ui/core'
import { Hidden } from './Hidden'
import { Paper } from '../../surfaces/Paper/Paper'

export default {
  title: 'Layout/Hidden',
  component: Hidden,
  argTypes: {
    implementation: {
      control: 'select',
      options: ['js', 'css'],
      defaultValue: 'js',
      table: {
        type: { summary: 'js | css' },
        defaultValue: { summary: 'js' }
      }
    },
    initialWidth: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      table: {
        type: { summary: 'xs | sm | md | lg | xl' }
      }
    },
    lgDown: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    lgUp: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    mdDown: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    mdUp: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    only: {
      control: 'multi-select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      table: {
        type: { summary: 'xs | sm | md | lg | xl' }
      }
    },
    smDown: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    smUp: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    xlDown: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    xlUp: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    xsDown: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    xsUp: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    }
  },
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%8E%A8-Design-System?node-id=181%3A375'
    }
  }
}

const Template: Story<HiddenProps> = (args) => {
  return (
    <Hidden {...args}>
      <Paper style={{ textAlign: 'center', padding: '12px' }}>Hidden</Paper>
    </Hidden>
  )
}

export const Default = Template.bind({})
Default.args = {}
