import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { PaginationItem, PaginationProps } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import { Pagination } from './Pagination'

export default {
  title: 'Navigation/Pagination',
  component: Pagination,
  argTypes: {
    boundaryCount: {
      control: 'number',
      defaultValue: 1,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1 }
      }
    },
    color: {
      control: 'radio',
      options: ['primary', 'secondary', 'standard'],
      defaultValue: 'primary',
      table: {
        type: { summary: 'primary | secondary | standard' },
        defaultValue: { summary: 'primary' }
      }
    },
    count: {
      control: 'number',
      defaultValue: 10,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 10 }
      }
    },
    defaultPage: {
      control: 'number',
      defaultValue: 1,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1 }
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
    hideNextButton: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    hidePrevButton: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    page: {
      control: { type: 'number' },
      table: {
        type: { summary: 'number' }
      }
    },
    shape: {
      control: 'radio',
      options: ['round', 'rounded'],
      defaultValue: 'round',
      table: {
        type: { summary: 'round | rounded' },
        defaultValue: { summary: 'round' }
      }
    },
    showFirstButton: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    showLastButton: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    siblingCount: {
      control: 'number',
      defaultValue: 1,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1 }
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
    variant: {
      control: 'radio',
      options: ['outlined', 'text'],
      defaultValue: 'outlined',
      table: {
        type: { summary: 'outlined | text' },
        defaultValue: { summary: 'outlined' }
      }
    }
  },
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%93%9A-Design-System?node-id=2000%3A10362'
    },
    muiDocSrc: 'https://mui.com/components/pagination/'
  }
}

const Template: Story<PaginationProps> = (args) => {
  return <Pagination {...args} />
}

export const Default = Template.bind({})

export const CustomIcons = Template.bind({})
CustomIcons.args = {
  renderItem: (item): React.ReactNode => {
    return (
      <PaginationItem
        components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
        {...item}
      />
    )
  }
}
