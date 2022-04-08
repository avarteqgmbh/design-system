import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { Dialog } from './Dialog'
import {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogProps as MuiDialogProps,
  DialogTitle
} from '@mui/material'
import { Button } from '../../index'

export default {
  title: 'Feedback/Dialog',
  component: Dialog,
  argTypes: {
    'aria-describedby': {
      control: { type: 'text' },
      table: {
        type: { summary: 'text' }
      }
    },
    'aria-labelledby': {
      control: { type: 'text' },
      table: {
        type: { summary: 'text' }
      }
    },
    disableEscapeKeyDown: {
      control: 'boolean',
      options: ['true', 'false'],
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    fullScreen: {
      control: 'boolean',
      options: ['true', 'false'],
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    fullWidth: {
      control: 'boolean',
      options: ['true', 'false'],
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    maxWidth: {
      control: { type: 'select' },
      options: ['lg', 'md', 'sm', 'xl', 'xs', false],
      defaultValue: 'sm',
      table: {
        type: { summary: 'select' },
        defaultValue: { summary: 'sm' }
      }
    },
    scroll: {
      control: { type: 'select' },
      options: ['body', 'paper'],
      defaultValue: 'paper',
      table: {
        type: { summary: 'select' },
        defaultValue: { summary: 'paper' }
      }
    }
  },
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%93%9A-Design-System?node-id=762%3A7043'
    },
    muiDocSrc: 'https://mui.com/components/dialogs/'
  }
}

const head = `Lorem Ipsum`

const body = ` Cras mattis consectetur purus sit amet fermentum.Cras justo odio
dapibus ac facilisis in, egestas eget quam.Morbi leo risus, porta
ac consectetur ac, vestibulum at eros.Praesent commodo cursus
magna, vel scelerisque nisl consectetur et.Cras mattis consectetur purus sit amet fermentum.Cras justo odio,
  dapibus ac facilisis in, egestas eget quam.Morbi leo risus, porta
ac consectetur ac, vestibulum at eros.Praesent commodo cursus
magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum.Cras justo odio
dapibus ac facilisis in, egestas eget quam.Morbi leo risus, porta
ac consectetur ac, vestibulum at eros.Praesent commodo cursus
magna, vel scelerisque nisl consectetur et.Cras mattis consectetur purus sit amet fermentum.Cras justo odio,
  dapibus ac facilisis in, egestas eget quam.Morbi leo risus, porta
ac consectetur ac, vestibulum at eros.Praesent commodo cursus
magna, vel scelerisque nisl consectetur et.`

const AlertTemplate: Story<MuiDialogProps> = (args) => {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = (): void => {
    setOpen(true)
  }

  const handleClose = (): void => {
    setOpen(false)
  }

  return (
    <div>
      <Button onClick={handleClickOpen}>Open alert dialog</Button>
      <Dialog {...args} open={open} onClose={handleClose}>
        <DialogTitle id='alert-dialog-title'>{head}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            {body}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export const Default = AlertTemplate.bind({})
Default.args = {}
