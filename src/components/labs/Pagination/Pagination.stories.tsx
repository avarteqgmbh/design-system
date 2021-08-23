import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { PaginationProps } from '@material-ui/lab'
import { Pagination } from './Pagination'

export default {
  title: 'Lab/Pagination',
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
      defaultValue: 1,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1 }
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
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%8E%A8-Design-System?node-id=392%3A24801'
    }
  }
}

const Template: Story<PaginationProps> = (args) => {
  return <Pagination {...args} />
}

export const Default = Template.bind({})
Default.args = {}

export const Count = Template.bind({})
Count.args = {
  count: 10
}

export const Disabled = Template.bind({})
Disabled.args = {
  count: 10,
  defaultPage: 3,
  disabled: true
}

export const Rounded = Template.bind({})
Rounded.args = {
  count: 10,
  defaultPage: 3,
  shape: 'rounded'
}

export const Standard = Template.bind({})
Standard.args = {
  count: 10,
  color: 'standard'
}

export const Secondary = Template.bind({})
Secondary.args = {
  count: 10,
  color: 'secondary'
}

export const BoundaryCount = Template.bind({})
BoundaryCount.args = {
  count: 100,
  boundaryCount: 3
}

export const DefaultPage = Template.bind({})
DefaultPage.args = {
  count: 100,
  defaultPage: 50
}

export const showFirstButton = Template.bind({})
showFirstButton.args = {
  count: 10,
  defaultPage: 5,
  showFirstButton: true
}

export const showLastButton = Template.bind({})
showLastButton.args = {
  count: 10,
  defaultPage: 5,
  showLastButton: true
}

export const Small = Template.bind({})
Small.args = {
  count: 10,
  defaultPage: 3,
  size: 'small'
}

export const Large = Template.bind({})
Large.args = {
  count: 10,
  defaultPage: 3,
  size: 'large'
}
