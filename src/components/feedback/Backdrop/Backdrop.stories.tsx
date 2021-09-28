import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { BackdropProps } from '@mui/material'
import { Button, CircularProgress } from '../../index'
import { Backdrop } from './Backdrop'

export default {
  title: 'Feedback/Backdrop',
  component: Backdrop,
  argTypes: {
    invisible: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    open: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    transitionDuration: {
      control: { type: 'text' },
      table: {
        type: {
          summary: 'number | { appear?: number, enter?: number, exit?: number }'
        }
      }
    }
  },
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%8E%A8-Design-System?node-id=383%3A3833'
    }
  }
}

const Template: Story<BackdropProps> = (args) => {
  return (
    <Backdrop {...args}>
      <CircularProgress color='inherit' />
    </Backdrop>
  )
}

export const Default = Template.bind({})
Default.args = {
  open: true
}

export const WithButton: Story<BackdropProps> = (args) => {
  const [open, setOpen] = React.useState(false)
  const handleClose = (): void => {
    setOpen(false)
  }

  const handleToggle = (): void => {
    setOpen(!open)
  }

  return (
    <div>
      <Button variant='outlined' color='primary' onClick={handleToggle}>
        Show backdrop
      </Button>
      <Backdrop {...args} open={open} onClick={handleClose}>
        <CircularProgress color='inherit' />
      </Backdrop>
    </div>
  )
}
