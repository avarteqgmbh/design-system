import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import { Menu } from './Menu'
import { MenuProps } from '@mui/material'
import { MenuItem } from './MenuItem'

import { Button } from '../../index'

export default {
  title: 'Navigation/Menu',
  component: Menu,
  argTypes: {
    anchorEl: {
      control: { type: 'text' },
      table: {
        type: { summary: 'HTML element | function' }
      }
    },
    autoFocus: {
      control: { type: 'boolean' },
      defaultValue: true,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true }
      }
    },
    children: {
      control: { type: 'node' },
      table: { type: { summary: 'node' } }
    },
    classes: {
      control: { type: 'object' },
      table: { type: { summary: 'object' } }
    },
    disableAutoFocusItem: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    MenuListProps: {
      control: { type: 'object' },
      defaultValue: {},
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: {} }
      }
    },
    onClose: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      }
    },
    open: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' }
      }
    },
    PopoverClasses: {
      control: { type: 'object' },
      table: { type: { summary: 'object' } }
    },
    transitionDuration: {
      control: {
        type: 'text'
      },
      defaultValue: 'auto',
      table: {
        type: {
          summary:
            'auto | number | { appear?: number, enter?: number, exit?: number }'
        },
        defaultValue: { summary: 'auto' }
      }
    },
    TransitionProps: {
      control: { type: 'object' },
      defaultValue: {},
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: {} }
      }
    },
    variant: {
      control: { type: 'text' },
      defaultValue: 'selectedMenu',
      table: {
        type: { summary: 'selectedMenu | menu' },
        defaultValue: { summary: 'selectedMenu' }
      }
    }
  },
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: ''
    }
  }
}

export const Default: Story<MenuProps> = (args) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (): void => {
    setAnchorEl(null)
  }

  return (
    <>
      <Button
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        Open Menu
      </Button>
      <Menu
        {...args}
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  )
}

const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel'
]
const ITEM_HEIGHT = 48

export const MaxHeight: Story<MenuProps> = (args): JSX.Element => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (): void => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        aria-label='more'
        aria-controls='long-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        Open Menu
      </Button>
      <Menu
        {...args}
        id='long-menu'
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch'
          }
        }}
      >
        {options.map((option) => {
          return (
            <MenuItem
              key={option}
              selected={option === 'Pyxis'}
              onClick={handleClose}
            >
              {option}
            </MenuItem>
          )
        })}
      </Menu>
    </div>
  )
}
